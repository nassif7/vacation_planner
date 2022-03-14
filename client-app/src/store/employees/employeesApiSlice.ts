import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'http://localhost:5001/'

import { Employee } from 'types'

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl,
		prepareHeaders(headers) {
			return headers
		},
	}),
	endpoints(builder) {
		return {
			fetchEmployees: builder.query<Employee[], string | void>({
				query(path = 'employees') {
					return `${path}`
				},
			}),
			updateEmployee: builder.mutation<any, any>({
				query: (body) => {
					console.log(body)
					return {
						url: 'emplyees',
						method: 'PUT',
						body,
					}
				},
			}),
		}
	},
})

export const { useFetchEmployeesQuery, useUpdateEmployeeMutation } = apiSlice
