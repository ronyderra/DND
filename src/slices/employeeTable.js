import { createSlice } from '@reduxjs/toolkit'
import tempData from '../tempData.json'

const initialState = tempData;
export const employeeTableSlice = createSlice({
    name: 'employeeTable',
    initialState,
    reducers: {
        addRow: (state, action) => {
            state.push(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addRow } = employeeTableSlice.actions

export default employeeTableSlice.reducer