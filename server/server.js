require("dotenv").config();
const connectDB = require("./modules/db");

const app = require("./modules/app");
const server = require("http").createServer(app);

const io = require("socket.io")(server);

const users = new Map();

io.on("connection", (socket) => {
  console.log("a user has connected.");

  socket.on("addUser", (userId) => {
    // if (users.has(userId)) return;
    console.log("addUser");
    users.set(userId, socket.id);
    users.set(socket.id, userId);

    io.emit("getUsers", users);
  });

  socket.on("sendMessage", ({ guestId, text, isGuest }) => {
    const userId = users.get(guestId);

    console.log("💌 sendMessage:", text);
    io.to(userId).emit("getMessage", {
      guestId,
      text,
    });

    // {!} send message to myself somehow
    // const user = users.get(receiverId);
    // let payload = { senderId, text, conversationId };
    // if (user) io.to(user.socketId).emit("getMessage", payload);
  });

  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    users.delete(users.get(socket));
    users.delete(socket);

    io.emit("getUsers", users);
  });
});

connectDB();

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`listening on port: ${PORT}`));

// socket.on("sendMessage", ({ senderId, receiverId, conversationId, text }) => {
//   const user = getUser(receiverId);
//   console.log("💌 sendMessage:", text);
//   if (user) {
//     io.to(user.socketId).emit("getMessage", {
//       senderId,
//       text,
//       conversationId,
//     });
//   }
// });
