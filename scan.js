'use strict';

const pogobuf = require('pogobuf-vnext'),
  POGOProtos = require('node-pogo-protos-vnext'),
  PoGo = require('./lib/pogo'),
  Gym = require('./lib/gym'),
  RaidBoss = require('./lib/raidboss'),
  moment = require('moment-timezone'),
  prettyMs = require('pretty-ms'),
  fs = require('mz/fs'),
  logger = require('winston'),
  csvImport = require('neat-csv'),
  sqlite3 = require('sqlite3').verbose(),
  Config = require('./config'),
  TeleBot = require('telebot');

const teams = [
  'Uncontested',
  'Mystic',
  'Valor',
  'Instinct'
];

let client;

const db = new sqlite3.Database('raids.db');
const bot = new TeleBot(Config.telegram.token);
const parse = 'html';

async function createTables() {
  logger.remove(logger.transports.Console);
  logger.add(logger.transports.Console, {
    'timestamp': function() {
      return moment().format('HH:mm:ss');
    },
    'colorize': true,
    'level': Config.logLevel,
  });

  logger.debug('Creating database');
  db.run('CREATE TABLE IF NOT EXISTS gym (gym_id VARCHAR(50) NOT NULL, latitude REAL NOT NULL, longitude REAL NOT NULL, raid_seed INTEGER, raid_level INTEGER, raid_start DATETIME, raid_end DATETIME, pokemon_id INTEGER, cp INTEGER, moveset VARCHAR(200))');
}


async function loadGyms(filename) {
  logger.debug('Import gyms from ' + filename);

  if (!fs.existsSync(filename)) throw new Error(`Input file does not exist: ${filename}`);

  const content = await fs.readFile(filename, 'utf8');
  return csvImport(content, {
    separator: Config.csvDelimiter,
  });
}


async function scanGym(gymRow) {
  const lat = parseFloat(gymRow.latitude);
  const lng = parseFloat(gymRow.longitude);

  client.setPosition(lat, lng);

  await client.init();
  const gymData = await Gym.scanGym(client, lat, lng);

  let message = '';
  let notify = false;

  if (gymData) {
    const gym = gymData.gym;
    const fort = gymData.fort;

    logger.info(`Found gym: ${gym.name}`);

    if (fort.raid_info) {
      logger.info(`A raid boss has landed at ${gym.name}`);

      const raidInfo = fort.raid_info;
      const team = 'Team: ' + teams[fort.owned_by_team];
      const timeOccupied = prettyMs(fort.gym_display.occupied_millis);
      const raidStart = moment(raidInfo.raid_battle_ms).tz(Config.timezone).format('YYYY-MM-DD HH:mm');
      const raidEnd = moment(raidInfo.raid_end_ms).tz(Config.timezone).format('YYYY-MM-DD HH:mm');

      let raidMsg = '<b>';
      let pokemonName = '';
      let raidMove1;
      let raidMove2;
      let moveset = '';
      let weakness = '';
      let counters = {};

      if (raidInfo.raid_level > 3) {
        notify = true;
      }

      message = `<b>${gym.name}</b>\n`;
      message += `${team} (${timeOccupied})\n`;

      if (raidInfo.raid_pokemon && raidInfo.raid_level > 1) {
        notify = true;

        pokemonName = pogobuf.Utils.getEnumKeyByValue(POGOProtos.Enums.PokemonId, raidInfo.raid_pokemon.pokemon_id);
        raidMove1 = pogobuf.Utils.getEnumKeyByValue(POGOProtos.Enums.PokemonMove, raidInfo.raid_pokemon.move_1);
        raidMove2 = pogobuf.Utils.getEnumKeyByValue(POGOProtos.Enums.PokemonMove, raidInfo.raid_pokemon.move_2);

        raidMove1 = raidMove1.replace(/\s+/g, '');
        raidMove1 = raidMove1.replace('Fast', '');
        raidMove2 = raidMove2.replace(/\s+/g, '');
        moveset = `${raidMove1}/${raidMove2}`;

        const raidBoss = RaidBoss.getWeaknessAndCounters(pokemonName);
        weakness = raidBoss.weakness.join(',');
        counters = raidBoss.counters;

        raidMsg += `${pokemonName}  - `;
      }

      raidMsg += `Level ${raidInfo.raid_level}</b>\n`;

      if (raidInfo.raid_pokemon) {
        raidMsg += `<b>CP: ${raidInfo.raid_pokemon.cp}</b>\n`;
        raidMsg += `<b>MS: ${moveset}</b>\n`;
        raidMsg += `Weakness: ${weakness}\n`;

        if (counters.hasOwnProperty('supreme') && counters.supreme.length) {
          raidMsg += '<b>Supreme Counters:</b>\n  ' + counters.supreme.join('\n  ') + '\n';
        }

        if (counters.hasOwnProperty('good') && counters.good.length) {
          raidMsg += '<b>Good Counters:</b>\n  ' + counters.good.join('\n  ') + '\n';
        }

        if (counters.hasOwnProperty('tank') && counters.tank.length) {
          raidMsg += '<b>Tank Counters:</b>\n  ' + counters.tank.join('\n  ') + '\n';

          if (counters.hasOwnProperty('glass') && counters.glass.length) {
            raidMsg += '<b>Glass Counters:</b>\n  ' + counters.glass.join('\n  ') + '\n';
          }
        }
      }

      raidMsg += `Start: ${raidStart}\n`;
      raidMsg += `End: ${raidEnd}\n`;
      raidMsg += `https://maps.google.com/?q=${lat},${lng}`;

      message += raidMsg;

      db.all('SELECT * FROM gym WHERE raid_seed = ?', raidInfo.raid_seed, (err, rows) => {
        if (rows.length) {
          const raidData = rows[0];

          if (raidInfo.raid_pokemon && raidData.pokemon_id) {
            logger.debug('Notification has already been sent for this raid');

            notify = false;
          } else if (!raidInfo.raid_pokemon) {
            logger.debug('Raid has not started yet');

            notify = false;
          } else {
            logger.debug('Updating raid data in DB');

            const updateStmt = db.prepare('UPDATE gym SET pokemon_id = ?, cp = ?, moveset = ? WHERE raid_seed = ?');

            updateStmt.run([
              raidInfo.raid_pokemon.pokemon_id,
              raidInfo.raid_pokemon.cp,
              moveset,
              raidInfo.raid_seed,
            ]);
          }

        } else {
          logger.debug('Saving raid to DB');

          const insertStmt = db.prepare('INSERT INTO gym VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');

          insertStmt.run([
            fort.id,
            lat,
            lng,
            raidInfo.raid_seed,
            raidInfo.raid_level,
            raidInfo.raid_battle_ms,
            raidInfo.raid_end_ms,
            raidInfo.raid_pokemon ? raidInfo.raid_pokemon.pokemon_id : null,
            raidInfo.raid_pokemon ? raidInfo.raid_pokemon.cp : null,
            moveset
          ]);
        }

        if (notify) {
          logger.info(`Sending Telegram notification to ${Config.telegram.channel}`);

          bot.sendMessage(Config.telegram.channel, message, {parse})
            .catch(error => {
              logger.error(error);
            });
        }
      });
    } else {
      logger.info(`No raid boss has landed at ${gym.name}`);
    }
  } else {
    logger.error(`Gym not found at ${lat}, ${lng}`);
  }
}


async function login() {
  const version = await PoGo.getRpcVersion();

  try {
    if (PoGo.isApiDeprecated(version, Config.api.appVersion)) {
      logger.error(`Unable to scan for raids. Niantic has forced API version ${version}.`);
      process.exit();
    } else {
      const clientSettings = {
        authType: Config.api.authType,
        username: Config.api.username,
        password: Config.api.password,
        hashingKey: Config.api.hashingKey,
        version: Config.api.appVersion,
        useHashingServer: true
      };

      if (Config.api.proxy.length) {
        clientSettings.proxy = Config.api.proxy;
      }

      client = new pogobuf.Client(clientSettings);
    }
  } catch (exception) {
    logger.error(exception);
  }
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function Main() {
  await createTables();
  await login();
  const gymData = await loadGyms('gyms.csv');

  for (const gymRow of gymData) {
    logger.info(`Scanning gym at ${gymRow.latitude}, ${gymRow.longitude}`);
    await scanGym(gymRow);
    await sleep(4000);
  }
}


logger.info(`Sleeping for ${Config.intervalMinutes} minutes before scanning`);

setInterval(() => {
  Main()
    .catch(e => console.error(e));

  logger.info(`Sleeping for ${Config.intervalMinutes} minutes before next scan`);
}, Config.intervalMinutes * 60 * 1000);
