import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'branchAccount',
  initialState: {
    account:{},
  },
  reducers: {
    setAccount: (state,actions) => {
      state.account = actions.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { 
    setAccount} = appSlice.actions

export default appSlice.reducer