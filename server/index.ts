import express, { Application, Request, Response } from 'express'
import { Employee } from './types'

import queries from './queries'

const cors = require('cors')
const pool = require('./db')

const app: Application = express()

//middleware
app.use(cors())
app.use(express.json())

// Add new employee
app.post('/employees', async (req, res) => {
	try {
		const employee = req.body
		const newEmployee = await queries.addEmployee(employee as Employee)

		res.json(newEmployee.rows[0])
	} catch (error: any) {
		res.json(error.message)
	}
})

// app.put('/employees/:id', async (req, res) => {
// 	try {
// 		const employee = req.body
// 		const newEmployee = await queries.addEmployee(employee as Employee)

// 		res.json(newEmployee.rows[0])
// 	} catch (error: any) {
// 		res.json(error.message)
// 	}
// })

// List all employees
app.get('/employees', async (req, res) => {
	try {
		const employees = await queries.listEmployees()
		res.json(
			employees.rows.map((r: any) => ({
				id: r.id,
				email: r.email,
				phone: r.phone,
				firstName: r.first_name,
				lastName: r.last_name,
				sicknessDays: r.sickness_days,
				vacationDays: r.vacation_days,
			}))
		)
	} catch (error: any) {
		console.error(error.message)
	}
})

app.listen(5001, () => {
	console.info('server has started on port 5001 🚀')
})
