import React, { useState } from 'react'
import StyledDataGrid from 'components/StylesDataGrid'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { GridColDef, GridCellParams, GridColumns } from '@mui/x-data-grid'
import {
	useUpdateEmployeeMutation,
	useFetchEmployeesQuery,
} from 'store/employees/employeesApiSlice'

interface VacationFormProps {
	employeeId: string
	onClose: () => void
}

const VacationForm: React.FC<VacationFormProps> = ({ employeeId, onClose }) => {
	const styles = {
		bgcolor: 'background.paper',
		borderRadius: 2,
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		boxShadow: 24,
		p: 2,
		width: 900,
	}
	const { data } = useFetchEmployeesQuery()

	const [updateEmployee] = useUpdateEmployeeMutation()

	const employee = data?.find((e) => e.id === employeeId)
	const handleClick = () => {
		updateEmployee(employee)
	}

	return (
		<Modal
			open={!!employeeId}
			onClose={onClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={styles}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					Text in a modal
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
				</Typography>

				<Button type="submit" onClick={handleClick}>
					Submit
				</Button>
			</Box>
		</Modal>
	)
}

export default VacationForm
