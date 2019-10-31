 
const express = require('express')
const hbs = require('express-handlebars')
const server = express()
const birdProfile = require('./routes/birdProfile')
const voterProfile = require('./routes/voterProfile')
const leaderboard = require('./routes/leaderboard')
const db = require('./db')

server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))

server.set('view engine', 'hbs') // allow access to hbs file directory
server.use(express.static('public')) // allow access to public folder
server.use(express.urlencoded({extended: false})) //this lets us access form data 
server.use('/birdProfile', birdProfile)
server.use('/voterProfile', voterProfile)
server.use('/leaderboard', leaderboard)

server.get('/', (req, res) => {
  db.getBirds()
    .then(birds => {
      const data = {
        birds: birds
      }
      console.log(data)
    res.render('birdIndex', data)
    }
    )

  })

server.get('/birdProfile', (req, res) => {
  res.send(birdProfile)
  })

server.get('/voterProfile', (req, res) => {
  res.send(voterProfile)
  })

server.get('/leaderboard', (req, res) => {
  res.send(leaderboard)
})

module.exports = server;