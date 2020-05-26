exports.up = function (knex) {
  return knex.schema.alterTable('flats', (table) => {
    table.string('country').references('counry');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('flats');
};
