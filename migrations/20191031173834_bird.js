
exports.up = function(knex) {
  return knex.schema.createTable('bird', table => {
    table.increments('bird_id').primary()
    table.string('bird_name')
    table.integer('votes')
    table.text('blurb')
    table.string('image')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('bird')
};
