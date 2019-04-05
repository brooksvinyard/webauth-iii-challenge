const express = require('express');
const cors = require('cors');

const authRouter = require('./api/auth-router.js');
const usersRouter = require('./api/users-router.js');
// const restricted = require('../auth/restricted-middleware.js')

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api', authRouter);
server.use('/api/users', usersRouter);
// server.use('/api/users', restricted, usersRouter);

server.get('/', (req, res) => {
  res.send("It's alive!");
});

module.exports = server;
