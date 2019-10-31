const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
  // let data = {
  //   birdData: birdData
  // }
  res.send('this is a standin for a birds profile')
})

module.exports = router;