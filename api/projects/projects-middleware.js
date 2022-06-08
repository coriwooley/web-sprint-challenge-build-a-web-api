const Projects = require('./projects-model')

function logger(req, res, next) {
    console.log(`${req.method} request to ${req.originalUrl} 
    on [${new Date().toISOString()}]`)
    next()
  }

  function validateId(req, res, next){
      //do something here
      next()
  }

  function validatePost(req, res, next){
      next()
  }

  module.exports = {
      logger,
      validateId,
      validatePost
  }
