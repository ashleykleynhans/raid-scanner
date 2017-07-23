'use strict';

const RaidBoss = {

  // Reference: https://pokemongo.gamepress.gg/raid-boss-counters
  getWeaknessAndCounters: function(boss) {
    let counters = {};
    let weakness = [];

    switch (boss) {
      // Level 1
      case 'Bayleef':
        weakness = [
          'Flying',
          'Poison',
          'Bug',
          'Fire',
          'Ice'
        ];
        break;

      case 'Croconaw':
        weakness = [
          'Grass',
          'Electric'
        ];
        break;

      case 'Magikarp':
        weakness = [
          'Grass',
          'Electric'
        ];
        break;

      case 'Quilava':
        weakness = [
          'Ground',
          'Rock',
          'Water'
        ];
        break;

      // Level 2
      case 'Electabuzz':
        weakness = [
          'Ground'
        ];
        counters = {
          supreme: [
            'Rhydon : Mud Slap & Earthquake',
            'Golem : Mud Slap/Mud Shot & Earthquake'
          ],
          good: [
            'Dragonite : Dragon Tail/Dragon Breath & Outrage/Hurricane/Dragon Claw',
            'Tyranitar : Bite & Stone Edge',
            'Donphan : Counter & Earthquake',
            'Nidoking : Fury Cutter & Earthquake',
            'Sandslash : Mud Shot & Earthquake'
          ],
          tank: [],
          glass: [
            'Gengar : Shadow Claw & Shadow Ball/Sludge Bomb'
          ]
        };
        break;

      case 'Exeggutor':
        weakness = [
          'Bug (x2)',
          'Flying',
          'Poison',
          'Ghost',
          'Fire',
          'Ice',
          'Dark'
        ];
        counters = {
          supreme: [
            'Scizor : Fury Cutter & X-Scissor'
          ],
          good: [
            'Pinsir : Fury Cutter/Bug Bite & X-Scissor',
            'Flareon : Fire Spin & Flamethrower/Overheat',
            'Charizard : Fire Spin/Air Slash & Flamethrower/Overheat',
            'Typhlosion : Ember/Shadow Claw & Overheat',
            'Houndoom : Snarl/Fire Fang & Foul Play',
            'Dragonite : Dragon Tail/Dragon Breath & Outrage/Hurricane/Dragon Claw'
          ],
          tank: [],
          glass: []
        };
        break;

      case 'Magmar':
        weakness = [
          'Ground',
          'Rock',
          'Water'
        ];
        counters = {
          supreme: [
            'Rhydon : Mud Slap & Earthquake',
            'Golem : Mud Slap/Mud Shot & Earthquake'
          ],
          good: [
            'Dragonite : Dragon Tail/Dragon Breath & Outrage/Hurricane/Dragon Claw',
            'Tyranitar : Bite & Stone Edge',
            'Donphan : Counter & Earthquake',
            'Nidoking : Fury Cutter & Earthquake',
            'Sandslash : Mud Shot & Earthquake',
            'Vaporeon : Water Gun & Hydro Pump/Aqua Tail',
            'Gyarados : Bite/Dragon Tail/Dragon Breath & Hydro Pump',
            'Feraligatr : Water Gun & Hydro Pump'
          ],
          tank: [],
          glass: []
        };
        break;

      case 'Muk':
        weakness = [
          'Ground',
          'Psychic'
        ];
        counters = {
          supreme: [
            'Rhydon : Mud Slap & Earthquake',
            'Golem : Mud Slap/Mud Shot & Earthquake'
          ],
          good: [
            'Dragonite : Dragon Tail/Dragon Breath & Outrage/Hurricane/Dragon Claw'
          ],
          tank: [],
          glass: [
            'Espeon : Confusion/Zen Headbutt & Future Sight',
            'Alakazam : Confusion/Psycho Cut & Future Sight'
          ]
        };
        break;

      case 'Weezing':
        weakness = [
          'Ground',
          'Psychic'
        ];
        counters = {
          supreme: [
            'Rhydon : Mud Slap & Earthquake',
            'Golem : Mud Slap/Mud Shot & Earthquake'
          ],
          good: [
            'Dragonite : Dragon Tail/Dragon Breath & Outrage/Hurricane/Dragon Claw',
            'Tyranitar : Bite & Stone Edge'
          ],
          tank: [],
          glass: [
            'Espeon : Confusion/Zen Headbutt & Future Sight',
            'Alakazam : Confusion/Psycho Cut & Future Sight'
          ]
        };
        break;

      // Level 3
      case 'Alakazam':
        weakness = [
          'Bug',
          'Ghost',
          'Dark'
        ];
        counters = {
          supreme: [
            'Tyranitar : Bite & Stone Edge'
          ],
          good: [
            'Scizor : Fury Cutter & X-Scissor',
            'Houndoom : Snarl & Foul Play',
          ],
          tank: [],
          glass: []
        };
        break;

      case 'Arcanine':
        weakness = [
          'Ground',
          'Rock',
          'Water'
        ];
        counters = {
          supreme: [
            'Rhydon : Mud Slap & Earthquake',
            'Golem : Mud Slap/Mud Shot & Earthquake'
          ],
          good: [
            'Vaporeon : Water Gun & Hydro Pump/Aqua Tail',
            'Sandslash : Mud Shot & Earthquake'
          ],
          tank: [],
          glass: []
        };
        break;

      case 'Flareon':
        weakness = [
          'Ground',
          'Rock',
          'Water'
        ];
        counters = {
          supreme: [
            'Rhydon : Mud Slap & Earthquake',
            'Golem : Mud Slap/Mud Shot & Earthquake'
          ],
          good: [],
          tank: [
            'Vaporeon : Water Gun & Hydro Pump/Aqua Tail',
            'Omastar : Water Gun/Rock Throw & Hydro Pump/Rock Slide'
          ],
          glass: []
        };
        break;

      case 'Gengar':
        weakness = [
          'Ghost',
          'Dark',
          'Psychic',
          'Ground'
        ];
        counters = {
          supreme: [
            'Tyranitar : Bite & Stone Edge'
          ],
          good: [
            'Houndoom : Snarl & Foul Play',
          ],
          tank: [],
          glass: [
            'Alakazam : Confusion/Psycho Cut & Future Sight',
            'Espeon : Confusion/Zen Headbutt & Future Sight',
            'Gengar : Shadow Claw & Shadow Ball'
          ]
        };
        break;

      case 'Jolteon':
        weakness = [
          'Ground'
        ];
        counters = {
          supreme: [
            'Rhydon : Mud Slap & Earthquake',
            'Golem : Mud Slap/Mud Shot & Earthquake'
          ],
          good: [
            'Donphan : Counter & Earthquake',
            'Sandslash : Mud Shot & Earthquake'
          ],
          tank: [],
          glass: [
            'Dragonite : Dragon Tail/Dragon Breath & Outrage/Dragon Claw'
          ]
        };
        break;

      case 'Machamp':
        weakness = [
          'Flying',
          'Psychic',
          'Fairy'
        ];
        counters = {
          supreme: [
            'Alakazam : Confusion/Psycho Cut & Future Sight',
            'Espeon : Confusion/Zen Headbutt & Future Sight',
          ],
          good: [
            'Dragonite : Dragon Tail/Dragon Breath & Hurricane',
            'Exeggutor : Confusion/Zen Headbutt/Extrasensory & Psychic/Solar Beam'
          ],
          tank: [],
          glass: []
        };
        break;

      case 'Vaporeon':
        weakness = [
          'Grass',
          'Electric'
        ];
        counters = {
          supreme: [
            'Exeggutor : Bullet Seed & Solar Beam/Seed Bomb',
            'Venusaur : Razor Leaf/Vine Whip & Solar Beam/Petal Blizzard',
            'Vileplume : Razor Leaf & Solar Beam/Petal Blizzard',
            'Victreebel : Razor Leaf & Solar Beam'
          ],
          good: [
            'Tangela : Vine Whip & Solar Beam/Grass Knot',
            'Jolteon : Thunder Shock & Thunderbolt'
          ],
          tank: [],
          glass: []
        };
        break;

      // Level 4
      case 'Blastoise':
        weakness = [
          'Grass',
          'Electric'
        ];
        counters = {
          supreme: [
            'Jolteon : Thunder Shock & Thunderbolt',
            'Venusaur : Razor Leaf/Vine Whip & Solar Beam/Petal Blizzard'
          ],
          good: [
            'Magneton : Spark/Charge Beam/Thundershock & Zap Cannon',
            'Vileplume : Razor Leaf & Solar Beam/Petal Blizzard',
            'Victreebel : Razor Leaf & Solar Beam'
          ],
          tank: [],
          glass: []
        };
        break;

      case 'Charizard':
        weakness = [
          'Rock (x2)',
          'Water',
          'Electric'
        ];
        counters = {
          supreme: [
            'Golem : Rock Throw/Mud Slap/Mud Shot & Stone Edge/Rock Blast',
            'Omastar : Rock Throw/Water Gun & Rock Slide/Hydro Pump/Rock Blast'
          ],
          good: [
            'Rhydon : Mud Slap & Stone Edge',
            'Tyranitar : Bite & Stone Edge',
            'Vaporeon : Water Gun & Hydro Pump/Aqua Tail',
            'Sudowoodo : Rock Throw & Stone Edge / Rock Slide'
          ],
          tank: [],
          glass: []
        };
        break;

      case 'Lapras':
        weakness = [
          'Grass',
          'Electric',
          'Fighting',
          'Rock'
        ];
        counters = {
          supreme: [
            'Machamp : Counter/Karate Chop & Dynamic Punch/Close Combat/Cross Chop'
          ],
          good: [
            'Heracross : Counter & Close Combat',
            'Jolteon : Thunder Shock & Thunderbolt',
            'Magneton : Spark/Charge Beam/Thundershock & Zap Cannon'
          ],
          tank: [
            'Snorlax : Lick & Hyper Beam/Body Slam',
            'Poliwrath : Rock Smash & Dynamic Punch'
          ],
          glass: []
        };
        break;

      case 'Rhydon':
        weakness = [
          'Water (x2)',
          'Grass (x2)',
          'Fighting',
          'Ground',
          'Steel',
          'Ice'
        ];
        counters = {
          supreme: [
            'Vaporeon : Water Gun & Hydro Pump/Aqua Tail',
          ],
          good: [
            'Exeggutor : Bullet Seed & Solar Beam/Seed Bomb',
            'Venusaur : Razor Leaf/Vine Whip & Solar Beam/Petal Blizzard',
            'Vileplume : Razor Leaf & Solar Beam/Petal Blizzard',
            'Victreebel : Razor Leaf & Solar Beam',
            'Tangela : Vine Whip & Solar Beam/Grass Knot',
            'Feraligatr : Water Gun & Hydro Pump'
          ],
          tank: [],
          glass: []
        };
        break;

      case 'Snorlax':
        weakness = [
          'Fighting'
        ];
        counters = {
          supreme: [
            'Machamp : Counter/Karate Chop & Dynamic Punch/Close Combat/Cross Chop'
          ],
          good: [
            'Heracross : Counter & Close Combat',
            'Dragonite : Dragon Tail/Dragon Breath & Outrage/Hurricane/Dragon Claw',
            'Ursaring : Counter & Close Combat',
            'Alakazam : Confusion/Psycho Cut & Focus Blast'
          ],
          tank: [
            'Tyranitar : Bite & Stone Edge'
          ],
          glass: []
        };
        break;

      case 'Tyranitar':
        weakness = [
          'Fighting (x2)',
          'Ground',
          'Bug',
          'Steel',
          'Water',
          'Grass',
          'Ice',
          'Fairy'
        ];
        counters = {
          supreme: [
            'Vaporeon : Water Gun & Hydro Pump/Aqua Tail',
            'Machamp : Counter/Karate Chop & Dynamic Punch/Close Combat/Cross Chop'
          ],
          good: [
            'Venusaur : Razor Leaf/Vine Whip & Solar Beam/Petal Blizzard',
            'Heracross : Counter & Close Combat',
            'Feraligatr : Water Gun & Hydro Pump',
            'Poliwrath : Rock Smash/Bubble & Dynamic Punch'
          ],
          tank: [],
          glass: []
        };
        break;

      case 'Venusaur':
        weakness = [
          'Flying',
          'Bug',
          'Fire',
          'Ice',
          'Psychic'
        ];
        counters = {
          supreme: [
            'Flareon : Fire Spin & Overheat / Flamethrower',
            'Charizard : Fire Spin/Air slash & Overheat / Flamethrower'
          ],
          good: [
            'Arcanine : Fire Fang / Flamethrower',
            'Dragonite : Dragon Tail/Dragon Breath & Outrage / Hurricane / Dragon Claw',
          ],
          tank: [],
          glass: [
            'Espeon : Confusion/Zen Headbutt & Future Sight',
            'Alakazam : Confusion/Psycho Cut & Future Sight'
          ]
        };
        break;

      // Level 5
      case 'Articuno':
        weakness = [
          'Rock',
          'Fire',
          'Steel',
          'Electric'
        ];
        counters = {
          supreme: [
            'Omastar : Rock Throw & Rock Slide/Rock Blast',
          ],
          good: [
            'Flareon : Fire Spin & Overheat/Flamethrower',
            'Tyranitar : Bite/Iron Tail & Stone Edge',
            'Arcanine : Arcanine & Flamethrower/Wild Charge'
          ],
          tank: [],
          glass: [
            'Golem : Rock Throw & Stone Edge/Rock Blast',
            'Sudowoodo : Rock Throw & Rock Slide/Stone Edge',
            'Jolteon : Thunder Shock & Thunderbolt/Discharge'
          ]
        };
        break;

      case 'Zapdos':
        weakness = [
          'Rock',
          'Ice'
        ];
        counters = {
          supreme: [
            'Golem : Rock Throw & Stone Edge/Rock Blast',
          ],
          good: [
            'Tyranitar : Bite & Stone Edge',
            'Piloswine : Ice Shard/Powder Snow & Avalanche'
          ],
          tank: [],
          glass: [
            'Jynx : Frost Breath & Avalanche',
            'Omastar : Rock Throw & Rock Slide/Rock Blast',
            'Dragonite : Dragon Breath/Dragon Tail & Dragon Claw/Outrage',
            'Gengar : Shadow Claw & Shadow Ball/Sludge Bomb'
          ]
        };
        break;

      case 'Moltres':
        weakness = [
          'Rock',
          'Water',
          'Electric'
        ];
        counters = {
          supreme: [
            'Golem : Rock Throw & Stone Edge/Rock Blast',
            'Omastar : Rock Throw/Water Gun & Rock Slide/Rock Blast/Hydro Pump'
          ],
          good: [
            'Tyranitar : Bite & Stone Edge',
            'Vaporeon : Water Gun & Hydro Pump/Aqua Tail',
            'Gyarados : Dragon Tail/Dragon Breath/Bite & Hydro Pump',
            'Dragonite : Dragon Breath/Dragon Tail & Dragon Claw/Outrage/Hurricane'
          ],
          tank: [],
          glass: [
            'Sudowoodo : Rock Throw & Stone Edge/Rock Slide',
            'Jolteon : Thunder Shock & Thunderbolt/Discharge',
            'Starmie : Water Gun/Hidden Power & Power Gem'
          ]
        };
        break;

      case 'Mewtwo':
        weakness = [
          'Dark',
          'Bug',
          'Ghost'
        ];
        counters = {
          supreme: [
            'Tyranitar : Bite & Crunch/Stone Edge'
          ],
          good: [
            'Houndoom : Snarl & Foul Play',
            'Scizor : Fury Cutter & X-Scissor',
            'Pinsir : Bug Bite/Fury Cutter & X-Scissor',
            'Dragonite : Dragon Breath/Dragon Tail & Dragon Claw/Outrage/Hurricane',
            'Gyarados : Bite & Hydro Pump/Crunch'
          ],
          tank: [],
          glass: [
            'Gengar : Shadow Claw/Hex/Sucker Punch & Shadow Ball'
          ]
        };
        break;

      case 'Mew':
        weakness = [
          'Dark',
          'Bug',
          'Ghost'
        ];
        counters = {
          supreme: [
            'Tyranitar : Bite & Crunch/Stone Edge',
            'Gengar : Shadow Claw/Hex/Sucker Punch & Shadow Ball'
          ],
          good: [
            'Houndoom : Snarl & Foul Play',
            'Scizor : Fury Cutter & X-Scissor',
            'Pinsir : Bug Bite/Fury Cutter & X-Scissor',
            'Dragonite : Dragon Breath/Dragon Tail & Dragon Claw/Outrage/Hurricane',
            'Gyarados : Bite & Hydro Pump/Crunch'
          ],
          tank: [],
          glass: []
        };
        break;

      case 'Raikou':
        weakness = [
          'Ground'
        ];
        counters = {
          supreme: [
            'Rhydon : Mud Slap & Earthquake'
          ],
          good: [
            'Golem : Mud Slap/Mud Shot/Rock Throw & Earthquake',
            'Dragonite : Dragon Breath/Dragon Tail & Outrage/Dragon Claw',
            'Exeggutor : Confusion/Extrasensory & Solar Beam',
            'Nidoking : Fury Cutter & Earthquake'
          ],
          tank: [],
          glass: [
            'Machamp : Counter/Karate Chop & Dynamic Punch'
          ]
        };
        break;

      case 'Entei':
        weakness = [
          'Ground',
          'Rock',
          'Water'
        ];
        counters = {
          supreme: [
            'Omastar : Rock Throw/Water Gun & Rock Slide/Rock Blast/Hydro Pump',
            'Vaporeon : Water Gun/Hydro Pump & Aqua Tail'
          ],
          good: [
            'Golem : Mud Slap/Mud Shot/Rock Throw & Stone Edge/Rock Blast/Earthquake',
            'Rhydon : Mud Slap & Stone Edge/Earthquake',
            'Feraligatr : Water Gun/Hydro Pump',
            'Gyarados : Bite/Dragon Breath/Dragon Tail & Hydro Pump',
            'Dragonite : Dragon Tail/Dragon Breath & Outrage/Dragon Claw/Hurricane',
            'Kingdra : Water Gun & Hydro Pump'
          ],
          tank: [],
          glass: []
        };
        break;

      case 'Suicune':
        weakness = [
          'Grass',
          'Electric'
        ];
        counters = {
          supreme: [
            'Venusaur : Vine Whip/Razor Leaf & Solar Beam/Petal Blizzard',
            'Exeggutor : Confusion/Extrasensory/Bullet Seed & Solar Beam/Seed Bomb'
          ],
          good: [
            'Tangela : Vine Whip/Solar Beam & Grass Knot/Power Whip',
            'Jolteon : Thunder Shock & Thunderbolt/Discharge',
            'Victreebel : Razor Leaf & Leaf Blade/Solar Beam',
            'Vileplume : Razor Leaf & Solar Beam/Petal Blizzard'
          ],
          tank: [
            'Dragonite : Dragon Tail/Dragon Breath & Outrage/Dragon Claw/Hurricane'
          ],
          glass: []
        };
        break;

      case 'Lugia':
        weakness = [
          'Dark',
          'Ghost',
          'Electric',
          'Ice',
          'Rock'
        ];
        counters = {
          supreme: [
            'Tyranitar : Bite & Stone Edge/Crunch'
          ],
          good: [
            'Jolteon : Thunder Shock & Thunderbolt/Discharge',
            'Magneton : Thunder Shock/Spark & Discharge/Zap Cannon',
            'Jynx : Frost Breath & Avalanche',
            'Houndoom : Snarl & Foul Play'
          ],
          tank: [],
          glass: [
            'Gengar : Shadow Claw/Sucker Punch/Hex & Shadow Ball'
          ]
        };
        break;

      case 'Ho-Oh':
        weakness = [
          'Rock',
          'Water',
          'Electric'
        ];
        counters = {
          supreme: [
            'Omastar : Rock Throw/Water Gun & Rock Slide/Rock Blast/Hydro Pump',
            'Golem : Rock Throw & Stone Edge/Rock Blast'
          ],
          good: [
            'Tyranitar : Bite & Stone Edge',
            'Vaporeon : Water Gun & Hydro Pump/Aqua Tail',
            'Gyarados : Bite/Dragon Breath/Dragon Tail & Hydro Pump'
          ],
          tank: [],
          glass: [
            'Sudowoodo : Rock Throw & Rock Slide/Rock Edge',
            'Jolteon : Thunder Shock & Thunderbolt/Discharge',
            'Starmie : Water Gun/Hidden Power & Power Gem'
          ]
        };
        break;

      case 'Celebi':
        weakness = [
          'Bug',
          'Dark',
          'Ghost',
          'Flying',
          'Fire',
          'Ice',
          'Poison'
        ];
        counters = {
          supreme: [
            'Scizor : Fury Cutter/Bullet Punch & X-Scissor',
            'Pinsir : Bug Bite/Fury Cutter & X-Scissor'
          ],
          good: [
            'Tyranitar : Bite & Crunch/Stone Edge/Fire Blast',
            'Flareon : Fire Spin & Overheat/Flamethrower',
            'Arcanine : Fire Fang/Bite/Snarl & Flamethrower',
            'Houndoom : Fire Fang/Bite & Foul Play',
            'Charizard : Fire Spin/Wing Attack & Overheat/Flamethrower',
            'Jynx : Frost Breath & Avalanche'

          ],
          tank: [],
          glass: [
            'Gengar : Shadow Ball/Hex/Sucker Punch & Shadow Ball/Sludge Bomb',
            'Sludge Bomb : Bug Bite & Bug Buzz',
            'Heracross : Struggle Bug & Megahorn'
          ]
        };
        break;
    }

    return {
      weakness: weakness,
      counters: counters
    };
  }
};

module.exports = RaidBoss;
