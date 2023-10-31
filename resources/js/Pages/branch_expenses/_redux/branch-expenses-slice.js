import { createSlice } from '@reduxjs/toolkit'

export const branchExpenses = createSlice({
  name: 'branchExpenses',
  initialState: {
    expenses:[],
  },
  reducers: {
    setExpenses: (state,actions) => {
      state.expenses = actions.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { 
    setExpenses
} = branchExpenses.actions

export default branchExpenses.reducer