const express = require('express')

const Projects = require('./projects-model')
const md = require('./projects-middleware')

const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.method)
})

router.get('/:id', (req, res) => {
    console.log(req.method)
})

router.post('/', (req, res) => {
    console.log(req.method)
})

router.put('/:id', (req, res) => {
    console.log(req.method)
})

router.delete('/:id', (req, res) => {
    console.log(req.method)
})

router.get('/:id/actions', (req, res) => {
    console.log(req.method)
})



module.exports = router