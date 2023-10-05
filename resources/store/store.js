import { configureStore } from '@reduxjs/toolkit'
import appSlice from '@/_redux/app-slice'
export default configureStore({
  reducer: {
    app: appSlice,
  },
})