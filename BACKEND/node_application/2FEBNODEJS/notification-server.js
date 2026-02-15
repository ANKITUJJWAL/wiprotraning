const express = require('express');
const http = require('http');


const  { Server } = require('socket.io');




// creates an instance of an Express application.
const app = express();




//creates an HTTP server using http module
const server = http.createServer(app);




//initializes the Socket.IO library and attaches it to the HTTP server 
const io = new Server(server);




app.get('/', (req, res) => {
  res.sendFile(__dirname + '/notification.html');
});


setInterval(() => {
  io.emit('notification', { message: 'New update!', time: new Date().toLocaleTimeString() });
}, 5000);


server.listen(3001, () => {
  console.log("Server running http://localhost:3001");
});




io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
});


