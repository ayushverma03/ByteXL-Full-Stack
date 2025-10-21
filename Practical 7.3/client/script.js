const socket = io("http://localhost:5000");

const input = document.getElementById("msgInput");
const sendBtn = document.getElementById("sendBtn");
const messages = document.getElementById("messages");

sendBtn.onclick = () => {
  const msg = input.value.trim();
  if (msg) {
    socket.emit("chat message", msg);
    input.value = "";
  }
};

socket.on("chat message", (msg) => {
  const div = document.createElement("div");
  div.textContent = msg;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
});
