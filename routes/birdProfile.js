const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/:id', (req, res) => {

  let {id} = req.params

  db.getBird(id)
  .then(data => {
      
      // console.log(data[0].bird_name)
      res.render('birdProfile', data[0])
    })
})
  // // let data = {
  // //   birdData: birdData
  // // }
  // res.render('birdProfile')

router.get('/voter', (req, res) => {
  // console.log(req.body)
})


router.post('/:id/voter', (req, res) => {

  let voterName = req.body.name
  let quote = req.body.quote
  let birdVote = req.body.birdVote
   let newVoter = {
     voter_bird_id: birdVote,
     voter_name: voterName,
     quote: quote,
   }
   
   db.newVoter(newVoter).then(() => {
     res.redirect('/voterProfile')
   })


 
})



module.exports = router;