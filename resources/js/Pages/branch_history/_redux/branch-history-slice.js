import { createSlice } from '@reduxjs/toolkit'

export const branchHistory = createSlice({
  name: 'branchHistory',
  initialState: {
    history:[],
  },
  reducers: {
    setHistory: (state,actions) => {
      state.history = actions.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { 
    setHistory
} = branchHistory.actions

export default branchHistory.reducer