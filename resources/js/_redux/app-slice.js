import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    refresh:Math.random(),
    isReset: false,
    response:[],
    setResponse:{},
    isSideBar:true,
    branches:[]
  },
  reducers: {
    isResetForm: (state,actions) => {
      state.isReset = actions.payload
    },
    isRandomhandler: (state,actions) => {
      state.refresh = Math.random()
    },
    isResponseHandler: (state,actions) => {
      state.response = actions.payload
    },
    isSideBarHandler: (state,actions) => {
      state.isSideBar = actions.payload
    },
    isSetResponse: (state,actions) => {
      state.setResponse = actions.payload
    },
    setBranches: (state,actions) => {
      state.branches = actions.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { 
  isResetForm,
  isRandomhandler,
  isResponseHandler,
  isSideBarHandler,
  isSetResponse,
  setBranches } = appSlice.actions

export default appSlice.reducer