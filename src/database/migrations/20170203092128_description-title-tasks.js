
exports.up = function(knex, Promise) {
  return knex.schema.table('task', function(table) {
    table.renameColumn('body', 'description')
    table.string('title')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('task', function(table) {
    table.renameColumn('description', 'body')
    table.dropColumn('title')
  })
}
