const pool = require('./db')

import {Employee} from './types'

const addEmployee = (employee: Employee) =>
  pool.query(
    "INSERT INTO employee " +
    "(first_name, " +
    "last_name, " +
    "email, " +
    "phone, " +
    "vacation_days, " +
    "sickness_days) " +
    "VALUES($1, $2, $3, $4, $5 ,$6) " +
    "RETURNING *",
    [employee.firstName, employee.lastName, employee.email, employee.phone, employee.vacationDays, employee.sicknessDays])

const listEmployees = () => pool.query("SELECT * FROM employee")


const queries = {
  addEmployee,
  listEmployees
}

export default queries
