const express = require('express')

const Projects = require('./projects-model')
const md = require('./projects-middleware')

const router = express.Router()

router.get('/', (req, res, next) => {
    Projects.get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(next)
})

router.get('/:id', md.validateId, (req, res) => {
    res.json(req.project)
})

router.post('/', md.validatePost, (req, res, next) => {
    const post = req.body
    Projects.insert(post)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(next)
})

router.put(
  "/:id",
  md.validateId,
  md.validatePost,
  async (req, res, next) => {
    try {
        const updatedPost = 
        await Projects.update(req.params.id, req.post)
        res.status(200).json(updatedPost)
    } catch(err){
        next(err)
    }
  }
);

router.delete('/:id', md.validateId, async (req, res, next) => {
    try {
        await Projects.remove(req.params.id)
        res.json(req.project)
    } catch(err){
        next(err)
    }
})

router.get('/:id/actions', md.validateId, (req, res, next) => {
    Projects.getProjectActions(req.params.id)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(next)
})

router.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message1: "There was an error performing the required operation",
        message2: err.message
    })
    next()
})

module.exports = router