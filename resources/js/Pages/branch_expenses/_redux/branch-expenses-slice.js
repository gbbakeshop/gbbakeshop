import { createSlice } from '@reduxjs/toolkit'

export const branchExpenses = createSlice({
  name: 'branchExpenses',
  initialState: {
    expenses:[],
    charges:[]
  },
  reducers: {
    setCharge: (state,actions) => {
      state.charges = actions.payload
    },
    setExpenses: (state,actions) => {
      state.expenses = actions.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { 
    setCharge,
    setExpenses
} = branchExpenses.actions

export default branchExpenses.reducer