import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
export const branchExpenses = createSlice({
  name: 'branchExpenses',
  initialState: {
    expenses:[],
    charges:[],
    date:moment().format('L')
  },
  reducers: {
    setCharge: (state,actions) => {
      state.charges = actions.payload
    },
    setExpenses: (state,actions) => {
      state.expenses = actions.payload
    },
    setDate: (state,actions) => {
      state.date = actions.payload
    },
    
    
  },
})

// Action creators are generated for each case reducer function
export const { 
    setCharge,
    setExpenses,
    setDate
} = branchExpenses.actions

export default branchExpenses.reducer