require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const gamesRouter = require('./src/api/router/game')
const gamesMarioRouter = require('./src/api/router/gameMario')

const app = express()

connectDB()

app.use(express.json())

app.use('/api/v1/games', gamesRouter)
app.use('/api/v1/gamesMario', gamesMarioRouter)

app.use('/ping', (req, res, next) => {
  return res.status(200).json('pong')
})

app.use('*', (req, res, next) => {
  return res.status(400).json('Rute not found')
})

app.listen(3000, () => {
  console.log('http://localhost:' + 3000)
})
