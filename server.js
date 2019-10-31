 
const express = require('express')
const hbs = require('express-handlebars')
const server = express()
const birdProfile = require('./routes/birdProfile')

server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))

server.set('view engine', 'hbs') // allow access to hbs file directory
server.use(express.static('public')) // allow access to public folder
server.use(express.urlencoded({extended: false})) //this lets us access form data 
server.use('/birdProfile', birdProfile)

server.get('/', (req, res) => {
  res.render('birdIndex',{})
  })

server.get('/birdProfile', (req, res) => {
  res.send(birdProfile)
  })

server.get('/voterProfile/:id', (req, res) => {
  let {id} = req.params
  res.render('voterProfile', {})
  })

module.exports = server;