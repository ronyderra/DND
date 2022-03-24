import { createSlice } from '@reduxjs/toolkit'
import tempData from '../tempData.json'

export const employeeTableSlice = createSlice({
    name: 'employeeTable',
    initialState: tempData,
    reducers: {
        addRow: (state) => {
            state.value += 1
        },
        deleteRow: (state) => {
            state.value -= 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { addRow, deleteRow } = employeeTableSlice.actions

export default employeeTableSlice.reducer