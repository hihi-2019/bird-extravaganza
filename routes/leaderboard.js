const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  // let data = {
  //   bird names and votes sorted by vote number
  // }
  res.render('leaderboard',{})
})

module.exports = router;