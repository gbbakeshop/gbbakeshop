import{r as i,u as h,q as d,j as c,a}from"./app-3485f549.js";import"./Dropdown-70622635.js";import{B as l}from"./branch-layout-26b62f6a.js";import u from"./branch-analytics-search-a85c1dc5.js";import{BranchLineChart as f}from"./branch-line-chart-61701037.js";import{BranchBarChart as x}from"./branch-bar-chart-397a3119.js";import{f as b}from"./records-services-8c083049.js";import"./transition-55e28017.js";import"./open-closed-853883de.js";import"./squire-icon-5c32ab22.js";import"./useDispatch-8bd9ff98.js";import"./store-icon-0b9207bd.js";import"./branches-services-61073265.js";import"./database-icon-15b9ad73.js";import"./calendar-icon-fc9daa10.js";import"./index-72561513.js";function k(n){const[s,p]=i.useState({sales:[],charges:[],expenses:[]}),{period:e}=h(r=>r.branchAnalytics),{auth:t}=n,{url:o}=d(),m=o.split("/")[2]=="bread-report"?t.user.branchid:o.split("/")[2];return i.useEffect(()=>{b(e,t.user.branchid).then(r=>{p({...s,sales:r.records,charges:r.charges,expenses:r.expenses})})},[e]),c(l,{position:t.user.position,branchid:m,children:[a(u,{}),c("div",{className:"flex",children:[a("div",{className:"w-1/2",children:a(f,{datas:s})}),a("div",{className:"w-1/2",children:a(x,{datas:s})})]})]})}export{k as default};