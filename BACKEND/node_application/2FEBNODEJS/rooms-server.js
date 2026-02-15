const express = require('express');
const http = require('http');
const { Server } = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = new Server(server);




// Serve a simple client page




app.get('/', (req, res) => {
  res.sendFile(__dirname + '/rooms-index.html');
});


//OR
// serve the static client file, by default index.html
//app.use(express.static(__dirname));


io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);


  // client joins a room with a username
  socket.on('joinRoom', ({ room, username }) => {
    socket.data.username = username || 'Anonymous';
    socket.join(room);
    // notify the room
    io.to(room).emit('system', `${socket.data.username} joined ${room}`);
  });


  // client leaves a room
  socket.on('leaveRoom', (room) => {
    const name = socket.data.username || 'Anonymous';
   // remove the client from the room.
    socket.leave(room);
    io.to(room).emit('system', `${name} left ${room}`);
  });


  // message to a specific room
  socket.on('roomMessage', ({ room, text }) => {
    const name = socket.data.username || 'Anonymous';
    const payload = {
      room,
      user: name,
      text,
      time: new Date().toLocaleTimeString()
    };
    io.to(room).emit('roomMessage', payload);
  });


  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});


const PORT = 3000;
server.listen(PORT, () => {
  console.log(` Server on http://localhost:${PORT}`);
});
