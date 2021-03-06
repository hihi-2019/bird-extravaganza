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

function newVoter(voter, db = database){
  return db('voter').insert(voter)
}

function getVotes(db = database) {
  return db('bird')
    .join('voter', 'bird_id', 'voter_bird_id')
    .select()
}

function addUpVotes(birdId, allVotes, db = database) {

  let voteList = allVotes.filter(vote => {
    return vote.voter_bird_id == birdId
  })
  // console.log(birdId, "this is the bird id", voteList, "and vote list", allVotes)
  return db('bird').update({votes:voteList.length}).where({bird_id: birdId}).debug()
}

function getVoters(db = database){
  return db('voter').select()
}


module.exports = {
  getBird,
  getBirds,
  orderVotes,
  newVoter,
  getVotes,
  addUpVotes,
  getVoters
}