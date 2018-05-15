const express = require('express');
const app = express();

const socket = require('socket.io');

app.use(express.static((__dirname + '/static')));

var server = app.listen(7777, function(){
  console.log('Express app listening on port 7777');
});

//tell socket to listen on the server
var io = socket(server);

//listen for connection method and fire callback when detected
io.on('connection', function(socket){
  //socket is the instance between the client making the connection and the server
  console.log('Socket connection established!', socket.id);

  socket.on('chat', function(message){
    console.log(message);
    
    io.sockets.emit('incoming', message);

  })


});