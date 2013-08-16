'use strict';

var should = require('should');
var Snake = require('../../server/snake-model.js');

describe('SnakeModel', function() {
  var snake;

  beforeEach(function() {
    snake = new Snake(0, 0, 3);
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

  it('should grow until we have reached the configured length', function() {
    snake.len.should.equal(3);
    snake.nodes.length.should.equal(1);

    var expectedLengths = [2, 3, 3];
    expectedLengths.forEach(function (expectedLength) {
      snake.step();
      snake.nodes.length.should.equal(expectedLength);
    });
  });

  describe('invalid parameters', function() {
    it('should default length to 1 if invalid', function() {
      snake = new Snake(0, 0, -3);
      snake.len.should.equal(1);
    });
  });
});
