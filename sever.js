const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/mas.html");
});

io.on("connection", (socket) => {
  console.log("Một người dùng đã kết nối");

  socket.on("message", (data) => {
    io.sockets.emit("message", data);
  });

  socket.on("disconnect", () => {
    console.log("Một người dùng đã ngắt kết nối");
  });
});

http.listen(3000, () => {
  console.log("Server đang lắng nghe trên cổng 3000");
});
