import { configureStore } from '@reduxjs/toolkit'
import appSlice from '@/_redux/app-slice'
import branchAccountSlice from '@/Pages/branch_accounts/_redux/branch-account-slice'
import salesReportSlice from '@/Pages/branch_sales_report/_redux/sales-report-slice'
export default configureStore({
  reducer: {
    app: appSlice,
    branchAccount:branchAccountSlice,
    salesReport:salesReportSlice
  },
})