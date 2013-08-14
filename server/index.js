'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var path = require('path');

server.listen(4000);

app.configure(function () {
  app.use(express.static(path.join(__dirname, '../public')));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

io.sockets.on('connection', function (socket) {
  socket.emit('message', { text: 'sup' });
  socket.on('message', function(message) {
      console.log("Received message from client: " + message.text);
  });
});
