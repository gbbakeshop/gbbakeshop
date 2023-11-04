import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
export const branchAnalytics = createSlice({
  name: 'branchAnalytics',
  initialState: {
    period:'Daily'
  },
  reducers: {
    setPeriod: (state,actions) => {
      state.period = actions.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
    setPeriod
} = branchAnalytics.actions

export default branchAnalytics.reducer