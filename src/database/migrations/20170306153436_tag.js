
exports.up = function(knex, Promise) {

  return Promise.all([
    knex.schema.createTable('tag', function(table) {
      table.increments('id').primary();
      table.text('name');
    })
  ])
};

exports.down = function(knex, Promise) {

  return Promise.all([
    knex.schema.dropTable('tag')
  ])
};
