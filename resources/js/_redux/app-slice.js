import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    refresh:Math.random(),
    isReset: false,
    response:[],
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
  },
})

// Action creators are generated for each case reducer function
export const { 
  isResetForm,
  isRandomhandler,
  isResponseHandler } = appSlice.actions

export default appSlice.reducer