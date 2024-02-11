const socket = new WebSocket("ws://localhost:3000");

const message = document.getElementById("message");
const sendBtn = document.getElementById("send");
const output = document.getElementById("output");

sendBtn.addEventListener("click", () => {
  if (message.value) {
    socket.send(message.value);
    message.value = "";
  }
});

socket.onmessage = function (event) {
  output.innerHTML += "<p>" + event.data + "</p>";
};
