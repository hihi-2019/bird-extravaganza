const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res) => {
 db.orderVotes().then(birds => {
   const data = {
     birds: birds
   }
  //  db.orderVotes()
   res.render('leaderboard', data)
 })
})



module.exports = router;