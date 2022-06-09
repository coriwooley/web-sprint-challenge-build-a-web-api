const express = require('express');
const server = express();

const projectsRoutes = require('./projects/projects-router')
const actionsRoutes = require('./actions/actions-router')

server.use(express.json())
server.use('/api/projects', projectsRoutes)
server.use('/api/actions', actionsRoutes)


module.exports = server;
