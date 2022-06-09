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

module.exports = {
    logger,
    validateId
}