
exports.up = function(knex, Promise) {
  return knex.schema.table('template_task', function(table) {
    table.renameColumn('body', 'description')
    table.renameColumn('name', 'title')
  })  
};

exports.down = function(knex, Promise) {
  return knex.schema.table('template_task', function(table) {
    table.renameColumn('description', 'body')
    table.renameColumn('title', 'name')
  })    
};
