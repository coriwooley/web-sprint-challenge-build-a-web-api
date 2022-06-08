const express = require('express');
const server = express();

const projectsRoutes = require('./projects/projects-router')

server.use(express.json())
server.use('/api/projects', projectsRoutes)


module.exports = server;
