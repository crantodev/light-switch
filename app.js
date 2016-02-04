var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/light', function(req, res) {
  res.sendFile(__dirname + '/light.html');
});

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('action', function(make) {
    io.emit('action', make);
  });
});

http.listen(3000);
