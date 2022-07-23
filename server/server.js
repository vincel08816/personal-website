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

  socket.on("sendMessage", ({ guestId, text, isGuest, emoji }) => {
    const userSocket = users.get(
      isGuest ? "62db74d0f53ffd33e36fb85a" : guestId
    );

    if (!userSocket) return console.log("socket not found", users);
    console.log("💌 sendMessage:", text);
    io.to(userSocket).emit("getMessage", {
      isGuest,
      guestId,
      text,
      updatedAt: new Date(),
      emoji,
    });
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
