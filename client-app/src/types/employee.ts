interface Employee {
	id: string
	firstName: string
	lastName: string
	email: string
	phone?: string
	vacationDays: string[]
	sicknessDays: string[]
}

export default Employee
