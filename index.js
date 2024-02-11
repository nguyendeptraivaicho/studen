const socket = io();

const message = document.getElementById("message");
const sendBtn = document.getElementById("send");
const output = document.getElementById("output");

sendBtn.addEventListener("click", () => {
  socket.emit("message", message.value);
  message.value = "";
});

socket.on("message", (data) => {
  output.innerHTML += `<p>${data}</p>`;
});
