const GamesMario = require('../models/gameMario')
const Games = require('../models/game')

const getGamesMario = async (req, res, next) => {
  try {
    const allGamesMario = await Games.find({
      title: { $regex: /Mario/, $options: 'i' }
    })
    return res.status(200).json(allGamesMario)
  } catch (error) {
    return res.status(400).json('Ha fallado la petición')
  }
}

const postGamesMario = async (req, res, next) => {
  try {
    const newGamesMario = new GamesMario(req.body)
    const gameMariosSaved = await newGamesMario.save()
    return res.status(201).json(gameMariosSaved)
  } catch (error) {
    return res.status(400).json('error')
  }
}
module.exports = { postGamesMario, getGamesMario }
