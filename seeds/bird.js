
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bird').del()
    .then(function () {
      // Inserts seed entries
      return knex('bird').insert([
        {
          bird_id: 1,
          bird_name: 'Kakapo',
          votes: 0,
          blurb:
            'The kakapo is a large, nocturnal, flightless, lek-breeding parrot – a real oddity. It is also critically endangered.',
          image: ''
        },
        {
          bird_id: 2,
          bird_name: 'Tui',
          votes: 0,
          blurb:
            'boisterous, medium-sized, common and widespread bird of forest and suburbia – unless you live in Canterbury',
          image: ''
        },
        {
          bird_id: 3,
          bird_name: 'Macaroni Penguin',
          votes: 0,
          blurb:
            'Macaroni penguins spend six months at sea while foraging for fish, crustaceans, and squid.',
          image: ''
        },
        {
          bird_id: 4,
          bird_name: 'Big Bird',
          votes: 0,
          blurb:
            'Largest bird on Sesame Street. Best friend is Snuffleupagus. He can roller skate, ice skate, dance, swim, sing, write poetry, draw, and even ride a unicycle.',
          image: ''
        },
        {
          bird_id: 5,
          bird_name: 'Red billed Seagull',
          votes: 0,
          blurb:
            'The red-billed gull is the commonest gull on the New Zealand coast. A real wildcard',
          image: ''
        },
        {
          bird_id: 6,
          bird_name: 'Pīwakawaka',
          votes: 0,
          blurb:
            'Known for its friendly ‘cheet cheet’ call and energetic flying antics, the aptly named fantail. In Māori mythology the fantail was responsible for the presence of death in the world.',
          image: ''
        },
        {
          bird_id: 7,
          bird_name: 'Kererū',
          votes: 0,
          blurb:
            'Often heard before it is seen, the kererū has been known to fall out of the odd tree after too much fermented fruit.',
          image: ''
        },
        {
          bird_id: 8,
          bird_name: 'Royal Spoonbill',
          votes: 0,
          blurb:
            'It eats fish, shellfish, crabs and amphibians, catching its prey by making a side-to-side movement with its bill. The end of the bill of the royal spoonbill is broader and works more like a pair of tongs.',
          image: ''
        }
      ])
    });
};
