import { createSlice } from '@reduxjs/toolkit'

export const salesReport = createSlice({
  name: 'salesReport',
  initialState: {
    records:[],
  },
  reducers: {
    setRecord: (state,actions) => {
      state.records = actions.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { 
    setRecord
} = salesReport.actions

export default salesReport.reducer