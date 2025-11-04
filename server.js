const http = require('http');
const cors = require('cors');

const apiServer = require('./api');
const sockets = require('./sockets');

apiServer.use(cors());

const httpServer = http.createServer(apiServer);

const socketServer = require('socket.io')(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const PORT = 3000;

sockets.listen(socketServer);

httpServer.listen(PORT,() => {
    console.log(`Server is listening on port: ${PORT}`);
});
