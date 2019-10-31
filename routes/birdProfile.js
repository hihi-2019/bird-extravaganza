const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/:id', (req, res) => {

  let {id} = req.params

  db.getBird(id)
  .then(data => {
      
      console.log(data[0].bird_name)
      res.render('birdProfile', data[0])
    })
    
})
  // // let data = {
  // //   birdData: birdData
  // // }
  // res.render('birdProfile')


module.exports = router;