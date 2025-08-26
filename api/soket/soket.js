const { Server } = require("socket.io");

function socketInit(server) {
  const io = new Server(server, {
    cors: {
      origin: "https://apidata-4.onrender.com",  // 👈 frontend ka URL production me daalo
      methods: ["GET", "POST"]
    }
  });

  io.on("connection", (socket) => {
    console.log("✅ User connected:", socket.id);

    // Listen to event
    socket.on("message", (msg) => {
      console.log("📩 Client message:", msg);

      // Broadcast to all clients
      io.emit("message", msg);
    });

    socket.on("disconnect", () => {
      console.log("❌ User disconnected:", socket.id);
    });
  });
}

module.exports = socketInit;
