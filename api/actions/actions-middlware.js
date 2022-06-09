const Actions = require('./actions-model')

function logger(req, res, next){
    console.log(`${req.method} 
    request to ${req.originalUrl} 
    on [${new Date().toISOString()}]`)

    next()
}

async function validateId(req, res, next){
    try {
        const action = await Actions.get(req.params.id)
        !action ? res.status(404).json({
            message: 'not found'
        }) : req.action = action
        next()
    } catch(err){
        next(err)
    }
}

function validateAction(req, res, next){
    const {project_id, description, notes, completed} = req.body

    !project_id || !description || !notes || typeof completed === "undefined" ?
    res.status(400).json('all fields required') :
    req.action = {project_id, description, notes, completed}
    next()
}

module.exports = {
    logger,
    validateId,
    validateAction
}