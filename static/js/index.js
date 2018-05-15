//need to connect to socket.io on our server
var socket = io.connect('http://localhost:7777');

var output = document.getElementById('output')
var name_input = document.getElementById('name_input');
var message_input = document.getElementById('message_input');
var send_btn = document.getElementById('send_btn');

send_btn.addEventListener('click', function(){

  socket.emit('chat', {
    name: name_input.value,
    message: message_input.value
  }

)});

socket.on('incoming', function(message){
  output.innerHTML += message.name + ": " + message.message + '\n';
});