const config = require('../config/config.js')

const defaultConfig = env => {
  const connectionString = process.env.DATABASE_URL ||
   `postgres://${process.env.USER}@localhost:5432/noob-${env}`

  return {
    client: 'postgresql',
    connection: connectionString,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: __dirname + '/migrations',
      tableName: 'migrations'
    },
    seeds: {
      directory: __dirname + `/build/server/database/seeds/${env}`
    }
  }
}

module.exports = { 'development': defaultConfig('development') }
