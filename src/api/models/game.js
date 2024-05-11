const mongoose = require('mongoose')
const gameSchema = new mongoose.Schema(
  {
    imgURL: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'games'
  }
)
const Game = mongoose.model('games', gameSchema, 'games')
module.exports = Game
