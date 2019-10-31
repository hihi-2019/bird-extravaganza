const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  // let data = {
  //   birdData: birdData
  // }
  res.render('voterProfile')
})

module.exports = router;