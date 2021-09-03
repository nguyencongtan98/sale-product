const express = require("express");
const product = require("./controller/product");

const app = express();

const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());

app.use("/product", product);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("User connected");
  socket.on("on-chat", (data) => {
    io.emit("user-chat", data);
  });
});

const PORT = process.env.PORT || 3000;

// app.listen(PORT);

server.listen(3000, () => {
  console.log("Listening on port 3000");
});
