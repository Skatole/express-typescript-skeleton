exports.seed = function (knex) {
  return knex('flats').insert([
    {
      title: 'Házacska',
      price: 120000000,
      floorArea: 1,
      country: 'Hungary',
      zip: 6633,
      city: 'Szeged',
      street: 'Blahai Láma.u'
    },
    {
      title: 'Telkecske',
      price: 11111111111110,
      floorArea: 10,
      country: 'Hungary',
      zip: 6633,
      city: 'Szeged',
      street: 'Kecske .u'
    },
    {
      title: 'FlatFecske',
      price: 123123,
      floorArea: 5,
      country: 'Hungary',
      zip: 6633,
      city: 'Szeged',
      street: 'Madár Lakás.u'
    }
  ]);
};
