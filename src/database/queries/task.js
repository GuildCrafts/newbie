import knex from 'knex'

const task = {
  add: add,

}

function add( data ) {
  knex.insert([
    { template: data.template },
    { user_id: data.user_id },
    { is_complete: data.is_complete },
    { due_date: data.due_date },
    { created_at: data.template },
    { template: data.template },

  ]).into('task')
}
