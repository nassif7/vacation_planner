import React, { useState } from 'react'
import StyledDataGrid from 'components/StylesDataGrid'
import './styles.css'
import useTableData from './useTableData'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { GridColDef, GridCellParams, GridColumns } from '@mui/x-data-grid'
import VacationForm from 'components/VacationForm'

const EmployeesTable = () => {
	const { rows, columns, isFetching } = useTableData()
	const [open, setOpen] = useState<string>('')

	const handleCellClick = ({ row, field }: GridCellParams) => {
		setOpen(row.id)
		console.log(row, field)
	}

	return (
		<div style={{ height: '100%', width: '100%' }}>
			<StyledDataGrid
				rows={rows}
				columns={columns}
				pageSize={rows.length}
				disableSelectionOnClick
				autoHeight
				disableColumnFilter
				disableColumnMenu
				disableColumnSelector
				onCellClick={handleCellClick}
			/>
			<VacationForm employeeId={open} onClose={() => setOpen('')} />
		</div>
	)
}

export default EmployeesTable
