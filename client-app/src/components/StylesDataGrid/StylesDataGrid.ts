import { Theme, styled } from '@mui/material/styles'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

const StyledDataGrid = styled(DataGrid)(({ theme }) => {
	console.log(theme)
	return {
		border: 0,
		color:
			theme.palette.mode === 'light'
				? 'rgba(0,0,0,.85)'
				: 'rgba(255,255,255,0.85)',
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		WebkitFontSmoothing: 'auto',
		letterSpacing: 'normal',
		'& .MuiDataGrid-iconSeparator': {
			display: 'none',
		},
		'& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
			borderRight: `1px solid ${
				theme.palette.mode === 'light' ? '#e0e0e0' : '#303030'
			}`,
		},
		'& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
			borderBottom: `1px solid ${
				theme.palette.mode === 'light' ? '#e0e0e0' : '#303030'
			}`,
		},
		'& .MuiPaginationItem-root': {
			borderRadius: 0,
		},
	}
})

export default StyledDataGrid
