const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)


function getBird(id, db = database) {
    return db('bird').where('bird_id', id).select()
}

function getBirds(db = database){ 
    return db('bird').select()
}

module.exports = {
    getBird, 
    getBirds, 
}