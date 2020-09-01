const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

io.on('connect', (socket) => {
 console.log('New connection')
 socket.on('disconnect', () => {
  console.log('USer had left')
 });
})

app.user(router);

server.listen(PORT, () => console.log(`Server has started. ${PORT}`));