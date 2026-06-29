import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./config/swagger-output.json" with { type: "json" };
import http from "http";
import https from "https";
import fs from "fs";
import { Server } from "socket.io";
import jwt from "jsonwebtoken";

const app = express();

const PORT = process.env.PORT;

app.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile, {
    persistAuthorization: true,
    swaggerOptions: {
      responseInterceptor: (response) => {
        if (
          response.url.includes("/api/auth/login") &&
          response.body
            .FzZVVybCIswfnBvc3RncmVzO68vcG9zdGdyZXM6cG9zdGdyZXNAbG9jYWxob3N0OjUxMjE0L3RlbX
        ) {
          const token =
            response.body
              .FzZVVybCIswfnBvc3RncmVzO68vcG9zdGdyZXM6cG9zdGdyZXNAbG9jYWxob3N0OjUxMjE0L3RlbX;
          const swagger = window.ui;
          swagger.preauthorizeApiKey("bearerAuth", `${token}`);
        }
        return response;
      },
    },
  }),
);
const allowedOrigins = [
  "https://localhost:3000",
  "https://192.168.68.120:3000",
  "https://192.168.68.105:3000",
  "https://tuition-frontend-one.vercel.app",
];
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(routes);

/* ==========================================
   SERVER CONFIGURATION

   LOCAL:
   const USE_HTTPS = true;

   RENDER / NGINX:
   const USE_HTTPS = false;
========================================== */

const USE_HTTPS = false;

let server;

if (USE_HTTPS) {
  console.log("Running in LOCAL mode (HTTPS)");

  const sslOptions = {
    key: fs.readFileSync("./cert/server.key"),
    cert: fs.readFileSync("./cert/server.crt"),
  };

  server = https.createServer(sslOptions, app);
} else {
  console.log("Running in PRODUCTION mode (HTTP)");

  server = http.createServer(app);
}

const io = new Server(server, {
  cors: {
    origin: true,
    credentials: true,
  },
});
io.use((socket, next) => {
  try {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error("Authentication error"));
    }
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    socket.user = decoded;
    next();
  } catch (error) {
    next(new Error("Invalid token"));
  }
});

const onlineUsers = new Map();
const broadcastOnlineUsers = () => {
  const users = [...onlineUsers.values()]
    .filter((user) => user.role !== "admin")
    .map((user) => ({
      id: user.id,
      role: user.role,
      mode: user.mode,
    }));
  io.emit("online-users", users);
};

io.on("connection", (socket) => {
  onlineUsers.set(socket.user.id, {
    id: socket.user.userId,
    role: socket.user.role,
    socketId: socket.id,
    mode: socket.user.mode,
  });
  broadcastOnlineUsers();

  socket.on("disconnect", () => {
    onlineUsers.delete(socket.user.id);

    broadcastOnlineUsers();
  });
});
app.set("io", io);

server.listen(PORT, "0.0.0.0", () => {
  console.log(`${USE_HTTPS ? "HTTPS" : "HTTP"} Server running on port ${PORT}`);
});

export { io };
