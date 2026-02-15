const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
 
const app = express();
const server = http.createServer(app);
const io = new Server(server);
 
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/private-index.html");
});
 
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
 
  socket.emit("yourId", socket.id);
 
 /*
	arg = {to,msg}
	Usage: arg.to, arg.msg
     
		OR
         go for object destructuring


{to,msg} = {to,msg};
Usage: to, msg
*/
  socket.on("privateMessage", ({ to, msg }) => {
    //some other socket id
    io.to(to).emit("privateMessage", { from: socket.id, msg });
  });
});
 
server.listen(3000, () => {
  console.log("Server running http://localhost:3000");
});
 
