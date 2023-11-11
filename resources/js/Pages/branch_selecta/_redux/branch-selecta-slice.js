import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'

export const branchSelecta = createSlice({
  name: 'branchSelecta',
  initialState: {
    records:[],
    history:[]
  },
  reducers: {
    setRecord: (state,actions) => {
      state.records = actions.payload
    },
    setHistory: (state,actions) => {
      state.history = actions.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { 
    setRecord,
    setHistory
} = branchSelecta.actions

export default branchSelecta.reducer