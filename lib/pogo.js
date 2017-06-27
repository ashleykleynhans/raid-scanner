'use strict';

const request = require('request-promise'),
  semver = require('semver');

const PoGo = {

  isApiDeprecated: function(version, appVersion) {
    // convert app version (5901) to client version (0.59.1)
    const clientVersion = PoGo.versionToClientVersion(appVersion);

    return semver.gt(version, clientVersion);
  },

  getRpcVersion: function() {
    const options = {
      uri: 'https://pgorelease.nianticlabs.com/plfe/version',
      headers: {
        'accept': '*/*',
        'user-agent': 'pokemongo/1 CFNetwork/808.3 Darwin/16.3.0',
        'accept-language': 'en-us',
        'x-unity-version': '5.5.1f1'
      },
      gzip: true,
    };

    return request.get(options)
      .then(version => {
        return version.replace(/[^(\d|\.)+]/g, '');
      })
      .catch((exception) => {
        console.error(exception);
      });
  },

  versionToClientVersion: function(version) {
    let ver = '0.' + ((+version) / 100).toFixed(0);
    ver += '.' + (+version % 100);
    return ver;
  },

};

module.exports = PoGo;
