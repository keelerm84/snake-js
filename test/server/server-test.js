/*global describe beforeEach afterEach it*/
'use strict';

var should = require('should');
var io = require('socket.io-client');

var socketURL = 'http://localhost:4000';

describe('Connection', function () {

  var socket;
  var connected = false;

  beforeEach(function (done) {
    // setup
    socket = io.connect(socketURL, {
      transports: ['websocket'],
      'reconnection delay': 0,
      'reopen delay': 0,
      'force new connection': true
    });
    socket.on('connect', function (data) {
      connected = true;
      done();
    });
  });

  afterEach(function (done) {
    if (socket.socket.connected) { socket.disconnect(); }
    done();
  });

  it('should establish a connection', function () {
    connected.should.equal(true);
  });
  
});
