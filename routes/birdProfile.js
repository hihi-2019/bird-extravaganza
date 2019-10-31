const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
  // let data = {
  //   birdData: birdData
  // }
  res.render('birdProfile')
})

module.exports = router;