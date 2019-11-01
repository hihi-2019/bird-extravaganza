const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res) => {
  db.getVoters()
  .then(data => { 
    
    console.log(data)
    res.render('voterProfile', {voter: data})
  })
})

module.exports = router;