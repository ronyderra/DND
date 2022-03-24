import { configureStore } from '@reduxjs/toolkit'
import employeeTableReducer from '../slices/employeeTable'

export default configureStore({
    reducer: {
        employeeTable: employeeTableReducer
    },
})