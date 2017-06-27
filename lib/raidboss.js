'use strict';

const RaidBoss = {

  getWeakness: function(boss) {
    let weakness;

    switch (boss) {
      // Level 1
      case 'Bayleef': weakness = 'Flying, Poison, Bug, Fire, Ice'; break;
      case 'Croconaw': weakness = 'Grass, Electric'; break;
      case 'Magikarp': weakness = 'Grass, Electric'; break;
      case 'Quilava': weakness = 'Ground, Rock, Water'; break;

      // Level 2
      case 'Electabuzz': weakness = 'Ground'; break;
      case 'Exeggutor': weakness = 'Bug(x2), Flying, Poison, Ghost, Fire, Ice, Dark'; break;
      case 'Magmar': weakness = 'Ground, Rock, Water'; break;
      case 'Muk': weakness = 'Ground, Psychic'; break;
      case 'Weezing': weakness = 'Ground, Psychic'; break;

      // Level 3
      case 'Alakazam': weakness = 'Bug, Ghost, Dark'; break;
      case 'Arcanine': weakness = 'Ground, Rock, Water'; break;
      case 'Flareon': weakness = 'Ground, Rock, Water'; break;
      case 'Gengar': weakness = 'Ghost, Dark, Psychic, Ground'; break;
      case 'Jolteon': weakness = 'Ground'; break;
      case 'Machamp': weakness = 'Flying, Psychic, Fairy'; break;
      case 'Vaporeon': weakness = 'Grass, Electric'; break;

      // Level 4
      case 'Blastoise': weakness = 'Grass, Electric'; break;
      case 'Charizard': weakness = 'Rock (x2), Water, Electric'; break;
      case 'Lapras': weakness = 'Grass, Electric, Fighting, Rock'; break;
      case 'Rhydon': weakness = 'Water(x2), Grass(x2), Fighting, Ground, Steel, Ice'; break;
      case 'Snorlax': weakness = 'Fighting'; break;
      case 'Tyranitar': weakness = 'Fighting(x2), Ground, Bug, Steel, Water, Grass, Ice, Fairy'; break;
      case 'Venusaur': weakness = 'Flying, Bug, Fire, Ice, Psychic'; break;

      default: weakness = '?';
    }

    return weakness;
  }
};

module.exports = RaidBoss;
