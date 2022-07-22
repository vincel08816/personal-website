require("dotenv").config();
const connectDB = require("./modules/db");

const app = require("./modules/app");
const server = require("http").createServer(app);

const io = require("socket.io")(server);

const users = new Map();

io.on("connection", (socket) => {
  console.log("a user has connected.");

  socket.on("addUser", (userId) => {
    console.log("addUser");
    users.set(userId, socket.id);
    users.set(socket.id, userId);

    io.emit("getUsers", users);
  });

  socket.on("sendMessage", ({ senderId, receiverId, conversationId, text }) => {
    console.log("💌 sendMessage:", text);

    const user = users.get(receiverId);
    let payload = { senderId, text, conversationId };
    // {!} do not send message back if sending to self.
    if (user) io.to(user.socketId).emit("getMessage", payload);
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    const temp = users.get(socket);
    users.delete(temp);
    users.delete(socket);

    io.emit("getUsers", users);
  });
});

connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`listening on port: ${PORT}`));
