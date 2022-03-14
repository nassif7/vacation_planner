const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'p@ssword',
  host: 'localhost',
  port: 5432,
  database: 'vacation_calendar'
})

module.exports = pool

