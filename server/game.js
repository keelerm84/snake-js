'use strict';

var Game = function() {
  this.players = [];
  this.id = "1234567890"; // TODO: Generate a unique hash here
}

Game.prototype.addPlayer = function(player) {
  this.players.unshift(player);
};

module.exports = Game;
