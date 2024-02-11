const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("message", (message) => {
    io.emit("message", message);
    fs.appendFile("chatlog.txt", message + "\n", (err) => {
      if (err) throw err;
      console.log("Message saved to chatlog.txt");
    });
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
