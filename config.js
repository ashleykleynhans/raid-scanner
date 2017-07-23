module.exports = {
  api: {
    authType: 'ptc',
    username: 'INSERT_USERNAME',
    password: 'INSERT_PASSWORD',
    hashingKey: 'INSERT_HASH_KEY',
    proxy: '', // Optional - leave empty for no proxy
    appVersion: 6900
  },

  telegram: {
    token: 'INSERT_TELEGRAM_TOKEN_HERE',
    channel: '@TELEGRAM_CHANNEL',
    channelL4: '@TELEGRAM_CHANNEL',
    channelLegendary: '@TELEGRAM_CHANNEL'
  },

  timezone: 'America/Los_Angeles',
  csvDelimiter: ',',
  logLevel: 'debug',
  intervalMinutes: 15
};
