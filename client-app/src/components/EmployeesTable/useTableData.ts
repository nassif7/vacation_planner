import { useFetchEmployeesQuery } from 'store/employees/employeesApiSlice'
import { useMemo } from 'react'
import { GridColDef, GridCellParams, GridColumns } from '@mui/x-data-grid'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { format, getMonth, getYear, getDaysInMonth } from 'date-fns'
import { Employee } from 'types'
import clsx from 'clsx'

const useTableData = () => {
	const { data = [], isFetching } = useFetchEmployeesQuery()

	const today = format(new Date(), 'EEEE dd.MM.yyyy')
	const month = getMonth(new Date()) + 1
	const year = getYear(new Date())
	const numberOfMonthDays = getDaysInMonth(new Date())

	const monthDays = []

	for (let i = 1; i <= numberOfMonthDays; i++) {
		const day = format(new Date(`${year}-${month}-${i}`), 'EE-dd.MM.yyyy')
		monthDays.push(day)
	}

	const employeesColumn: GridColDef = {
		field: 'employee',
		headerName: 'Emps',
		editable: false,
		sortable: false,
	}

	const columns: GridColDef[] = [
		employeesColumn,
		...monthDays.map((day) => {
			const [dayName, dayDate] = day.split('-')
			const field = `${dayDate}`
			const headerName = dayName
			const editable = false

			return {
				field,
				dayDate,
				editable,
				sortable: false,
				headerName,
				width: 70,
				cellClassName: (params: GridCellParams<string>) => {
					return clsx('MuiDataGrid-cell--textCenter ', {
						hot: params.value === 'S',
						cold: params.value === 'V',
					})
				},
			}
		}),
	]

	const rows = useMemo(
		() =>
			data.map((employee: Employee) => {
				return columns.reduce((acc, c) => {
					const { field } = c
					const isSick = employee.sicknessDays.includes(field)
					const isOnVacation = employee.vacationDays.includes(field)
					const fieldValue =
						field === 'employee'
							? employee.firstName
							: isSick
							? 'S'
							: isOnVacation
							? 'V'
							: ''
					return {
						id: employee.id,
						employee: employee,
						...acc,
						[field]: fieldValue,
					}
				}, {})
			}),
		[data]
	)

	return { rows, columns, isFetching }
}

export default useTableData
