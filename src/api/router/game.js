const {
  getGames,
  postGame,
  updateGame,
  deleteGame,
  getGameOne
} = require('../controllers/game')
const gamesRouter = require('express').Router()
gamesRouter.get('/', getGames)
gamesRouter.get('/:id', getGameOne)
gamesRouter.post('/', postGame)
gamesRouter.put('/:id', updateGame)
gamesRouter.delete('/:id', deleteGame)

module.exports = gamesRouter
