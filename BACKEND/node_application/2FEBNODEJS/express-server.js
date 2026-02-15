//npm install express socket.io


const express = require('express');
const http = require('http');
//object de-structuring
const { Server } = require('socket.io');




// creates an instance of an Express application.
const app = express();


//creates an HTTP server using http module
const server = http.createServer(app);


//initializes the Socket.IO library and attaches it to the HTTP server 
const io = new Server(server);




// Serve a simple client page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});




// Listen for new connections
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);




  // Listen for messages from the client
  socket.on('chatMessage', (msg) => {
    console.log('Message:', msg);
    // Broadcast to all connected clients
    io.emit('chatMessage', msg);
  });




  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});


server.listen(3001, () => console.log('Server running on http://localhost:3001'));
