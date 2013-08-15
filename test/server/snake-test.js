'use strict';

var should = require('should');
var Snake = require('../../server/snake-model.js');

describe('SnakeModel', function() {
  var snake;

  beforeEach(function() {
    snake = new Snake(0, 0);
  });

  it('should have an initial direction of north', function() {
    snake.direction.should.equal('n');
  });

  it('should start with one node', function() {
    snake.nodes.length.should.equal(1);
  });

  it('should start at specified origin', function() {
    snake.nodes[0].x.should.equal(0);
    snake.nodes[0].y.should.equal(0);
  });

});
