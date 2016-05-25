// the user server process
socket.broadcast.to('position').emit('position','his position');

// the emitter server process
var io = require('./emitter')({ host: '127.0.0.1', port: 6379 });
io.join('position');
io.on('position', function (data) {
  console.log(data)
});
