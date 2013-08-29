'use strict';

var should = require('should');
var Player = require('../../server/player.js');

describe('PlayerModel', function() {
  var player;
  var socket;

  beforeEach(function() {
    socket = "place-holder-for-socket-stub"; // TODO Need to stub a socket
    player = new Player("player1", socket);
  });

  it('should have a name set', function() {
    player.name.should.equal("player1");
  });

  it('should have a socket', function() {
    player.socket.should.equal(socket);
  });
});
