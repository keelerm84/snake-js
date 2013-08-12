/*global io*/
'use strict';

var socket = io.connect();

socket.on('message', function (data) {
  console.log(data);
  socket.emit('message', { text: 'yo' });
});
