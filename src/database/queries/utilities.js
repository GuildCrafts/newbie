import knex from '../knex'

const firstRecord = records => records[0]

const createRecord = (table, attributes) =>
  knex
    .table(table)
    .insert(attributes)
    .returning('*')

const findRecord = (table, column, data) =>
  knex
    .table(table)
    .where(column, data)
    .returning('*')
    .then(firstRecord)

const findAllWhere = (table, column, data) =>
  knex
    .table(table)
    .where(column, data)
    .returning('*')

const findAll = table =>
  knex
    .table(table)
    .returning('*')

const updateRecord = (table, column, data, attributes) =>
  knex
    .table(table)
    .where(column, data)
    .update(attributes)
    .update({'updated_at': knex.raw('now()')})
    .returning('*')
    .then(firstRecord)

const deleteRecord = (table, column, data) =>
  knex
    .table(table)
    .where(column, data)
    .del()

const deleteAll = table =>
  knex.raw(`DELETE FROM ${table}`)


 export {
    createRecord,
    deleteRecord,
    findRecord,
    firstRecord,
    updateRecord,
    findAllWhere,
    findAll,
    deleteAll
}
