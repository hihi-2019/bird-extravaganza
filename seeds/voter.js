
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('voter').del()
    .then(function () {
      // Inserts seed entries
      return knex('voter').insert([
        {
          voter_id: 1,
          voter_bird_id: 2,
          voter_name: 'Alice',
          quote: 'Tui for life!'
        },
        {
          voter_id: 2,
          voter_bird_id: 8,
          voter_name: 'Freya',
          quote: 'Oh my gosh, these look amazing and regal'
        },
        { voter_id: 3, voter_bird_id: 5, voter_name: 'Bas', quote: 'Every Friday I share a scoop of chips with my favourite seagull/best mate Gary' },
        { voter_id: 4, voter_bird_id: 4, voter_name: 'Caitlin', quote: 'I love to go ice-skating with my buddy Big Bird. He is surprisingly graceful' }
      ])
    });
};

