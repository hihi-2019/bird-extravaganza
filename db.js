const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)


function getBird(id, db = database) {
    return db('bird').where('bird_id', id).select()
}

function getBirds(db = database){ 
    return db('bird').select()
}

// function orderVotes(birdData) {
//   let sortedVotes = birdData.birds

//   sortedVotes.sort(function(a, b) {
//     return b.votes - a.votes
//   })

//   // birdData.sortedVotes = sortedVotes

//   return sortedVotes
// }

// -----OR THIS------------

function orderVotes(db = database) {
return db('bird').orderBy("votes", "desc")
}

module.exports = {
  getBird,
  getBirds,
  orderVotes,
}