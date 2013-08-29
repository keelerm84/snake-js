'use strict';

var Game = function() {
  var uuid = require('node-uuid');
  this.players = [];
  this.id = uuid.v4();
}

Game.prototype.addPlayer = function(player) {
  this.players.unshift(player);
};

module.exports = Game;
