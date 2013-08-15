'use strict';

var Snake = function(x, y, len, dir) {
  this.len = len > 0 ? len : 1;
  this.direction = dir || 'n';
  this.nodes = [
    {x: x, y: y}
  ];
};

Snake.prototype.step = function() {
  var x_step = 0;
  var y_step = 0;

  if (this.direction === 'n') { y_step = -1 }
  else if (this.direction === 'e') { x_step = 1 }
  else if (this.direction === 's') { y_step = 1 }
  else if (this.direction === 'w') { x_step = -1 }

  current = nodes[0];
  this.nodes.push({ x: current.x + x_step, y: current.y + y_step });
};

module.exports = Snake;
