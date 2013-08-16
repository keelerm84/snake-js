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

  describe('handles directions', function() {
    it('should alter direction on changes in configured direction', function() {
      var snake = new Snake(0, 0, 3);
      var data = [
        { direction: "s", nodes: [{x: 0, y: 1}, {x: 0, y: 0}]},
        { direction: "e", nodes: [{x: 1, y: 1}, {x: 0, y: 1}, {x: 0, y: 0}]},
        { direction: "n", nodes: [{x: 1, y: 0}, {x: 1, y: 1}, {x: 0, y: 1}]},
        { direction: "w", nodes: [{x: 0, y: 0}, {x: 1, y: 0}, {x: 1, y: 1}]}
      ];

      data.forEach(function(datum) {
        snake.direction = datum.direction;
        snake.step();
        snake.nodes.should.eql(datum.nodes);
      });
    });
  });
});
