'use strict';

var Player = function(name, socket) {
  this.name = name;
  this.socket = socket;
};

module.exports = Player;
