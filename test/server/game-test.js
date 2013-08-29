'use strict';

var should = require('should');
var Game = require('../../server/game.js');
var Player = require('../../server/player.js');

describe('GameModel', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('should not have any players by default', function() {
    game.players.length.should.equal(0);
  });

  it('should be able to add multiple players to a game', function() {
    var socket = 'place-holder-for-socket'; // TODO Need to stub a socket
    var player1 = new Player("player1", socket);
    var player2 = new Player("player2", socket);

    game.addPlayer(player1);
    game.addPlayer(player2);

    game.players.length.should.equal(2);
  });

  it('should generate unique hash', function() {
    game.should.have.property('id');
  });
});
