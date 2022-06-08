const Projects = require('./projects-model')

function logger(req, res, next) {
    console.log(`${req.method} request to ${req.originalUrl} 
    on [${new Date().toISOString()}]`)
    next()
  }

  async function validateId(req, res, next){
      try {
          const project = await Projects.get(req.params.id)
          if(!project){
              res.status(404).json({
                  message: 'not found'
              })
          } else {
              req.body.project = project
              next()
          }
      } catch(err){
          next(err)
      }
  }

  function validatePost(req, res, next){
      const {name, description} = req.body
      if(!name || !description){
          res.status(400).json({
              message: "missing required fields"
          })
      } else {
          name, description
          next()
      }
  }

  function updateValidation(req, res, next){
      const {completed} = req.body
      if(!completed){
          res.status(404)
      } else {
          completed
          next()
      }
  }

  module.exports = {
      logger,
      validateId,
      validatePost,
      updateValidation
  }
