const pogobuf = require('pogobuf-vnext'),
  POGOProtos = require('node-pogo-protos'),
  colors = require('colors/safe');

const Gym = {
  scanGym: async function(client, lat, lng) {
    try {
      const cellIDs = pogobuf.Utils.getCellIDs(lat, lng, 1, 15);

      const mapObjects = await client.getMapObjects(cellIDs, Array(cellIDs.length).fill(0));

      const forts = mapObjects.map_cells.map(cell => cell.forts)
        .reduce((a, b) => a.concat(b))
        .filter(fort => fort.type === POGOProtos.Map.Fort.FortType.GYM);

      if (forts.length) {
        for (let fort of forts) {
          if (fort.latitude === lat && fort.longitude === lng) {
            const gym = await client.gymGetInfo(fort.id, fort.latitude, fort.longitude);

            if (gym && gym.hasOwnProperty('result')
              && gym.result === POGOProtos.Networking.Responses.GetGymDetailsResponse.Result.SUCCESS) {
              return {
                fort: fort,
                gym: gym
              };

            } else if (gym && gym.hasOwnProperty('result')
              && gym.result === POGOProtos.Networking.Responses.GetGymDetailsResponse.Result.ERROR_NOT_IN_RANGE) {
              console.error(colors.red(`OUT OF RANGE: ${lat}, ${lng}`));
            } else {
              console.error(colors.red(`Unable to scan ${lat}, ${lng}`));
            }
          }
        }
      }
    } catch(exception) {
      console.log(exception);
    }
  },

};

module.exports = Gym;
