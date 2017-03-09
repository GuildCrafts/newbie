
exports.up = function(knex, Promise) {

  return Promise.all([

    knex.schema.createTable('noob', function(table) {
      table.inherits('users');
      table.integer('mentor_id');
      table.date('start_date');
    }),

    knex.schema.createTable('task', function(table) {
      table.increments('id').primary();
      table.string('body');
      table.integer('template_task_id');
      table.integer('user_id');
      table.boolean('is_complete').defaultTo(false);
      table.dateTime('due_date');
      table.timestamps(true, true);
    }),

    knex.schema.createTable('template_task', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.text('body');
      table.string('user_role')
      table.integer('days_to_complete');
      table.timestamps(true, true);
    })

  ])

};

exports.down = function(knex, Promise) {

  return Promise.all([
    knex.schema.dropTable('noob'),
    knex.schema.dropTable('task'),
    knex.schema.dropTable('template_task')
  ])

};
