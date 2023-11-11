import { configureStore } from '@reduxjs/toolkit'
import appSlice from '@/_redux/app-slice'
import branchAccountSlice from '@/Pages/branch_accounts/_redux/branch-account-slice'
import salesReportSlice from '@/Pages/branch_sales_report/_redux/sales-report-slice'
import branchHistorySlice from '@/Pages/branch_history/_redux/branch-history-slice'
import branchExpensesSlice from '@/Pages/branch_expenses/_redux/branch-expenses-slice'
import branchAnalyticsSlice from '@/Pages/branch_analytics/_redux/branch-analytics-slice'
import branchSelectaSlice from '@/Pages/branch_selecta/_redux/branch-selecta-slice'
export default configureStore({
  reducer: {
    app: appSlice,
    branchAccount:branchAccountSlice,
    salesReport:salesReportSlice,
    branchHistory:branchHistorySlice,
    branchExpenses:branchExpensesSlice,
    branchAnalytics:branchAnalyticsSlice,
    branchSelecta:branchSelectaSlice
  },
})