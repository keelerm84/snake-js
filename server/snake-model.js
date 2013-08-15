'use strict';

var Snake = function(x, y, len, dir) {
  this.length = len || 1;
  this.nodes = [
    {x: x, y: y}
  ];
  this.direction = dir || 'n';
};

module.exports = Snake;
