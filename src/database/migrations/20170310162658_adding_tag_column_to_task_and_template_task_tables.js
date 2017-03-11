exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.table('task', table => table.string('tag')),
    knex.schema.table('template_task', table => table.string('tag'))
  ])

exports.down = (knex, Promise) =>
  Promise.all([
    knex.schema.table('task', table => table.dropColumn('tag')),
    knex.schema.table('template_task', table => table.dropColumn('tag'))
  ])
