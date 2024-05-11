const { getGamesMario, postGamesMario } = require('../controllers/gameMario')

const gamesMarioRouter = require('express').Router()

gamesMarioRouter.get('/', getGamesMario)
gamesMarioRouter.post('/', postGamesMario)

module.exports = gamesMarioRouter
