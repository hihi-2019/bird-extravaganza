
exports.up = function(knex) {
  return knex.schema.createTable('voter', table => {
    table.increments('voter_id').primary()
    table.integer('voter_bird_id')
    table.string('voter_name')
    table.string('quote')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('voter')  
};
