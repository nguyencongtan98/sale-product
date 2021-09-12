const express = require("express");
const product = require("./controller/product");
const cart = require("./controller/cart");
const login = require("./controller/login");
const order = require("./controller/order");
const database = require("./config/database");

const app = express();

const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

database.connect();

app.use(express.json());

app.use("/product", product);
app.use("/cart", cart);
app.use("/login", login);
app.use("/checkout", order);

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

io.on("connection", (socket) => {
  console.log("User connected");
  socket.on("on-chat", (data) => {
    io.emit("user-chat", data);
  });
});

const PORT = process.env.PORT || 5000;

// app.listen(PORT);

server.listen(5000, () => {
  console.log("Listening on port 5000");
});
