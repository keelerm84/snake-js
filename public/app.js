/*global io*/
'use strict';

var socket = io.connect();

socket.on('message', function (message) {
  console.log("Received message from server: " + message.text);
  socket.emit('message', { text: 'yo' });
});
