import{r as e,u as i,q as d,j as t,a as r,F as h}from"./app-78341254.js";import{A as f}from"./administrator-layout-fcd61b04.js";import{S as u}from"./skeleton-loader-0de3c97a.js";import x from"./sidebar-branches-46108b27.js";import{B as S}from"./bread-crumbs-5baf6d4d.js";import{BranchLineChart as g}from"./branch-line-chart-1f806ed8.js";import{BranchBarChart as B}from"./branch-bar-chart-27306ee9.js";import v from"./branch-analytics-search-d17779ad.js";import{d as b}from"./records-services-fe504d0d.js";import w from"./sales-chart-b4189091.js";import"./squire-icon-55bf27e6.js";import"./useDispatch-ed1aaa2e.js";import"./store-icon-b035ce75.js";import"./branches-services-91965912.js";import"./open-closed-12574650.js";import"./keyboard-96d205eb.js";import"./use-resolve-button-type-fb34bb67.js";import"./iconBase-595103b3.js";import"./index-8791c46c.js";function O(A){const[s,c]=e.useState({sales:[],charges:[],expenses:[]}),{period:o}=i(a=>a.branchAnalytics),[m,n]=e.useState(!0),{url:l}=d(),p=l.split("/")[2];return i(a=>a.app),e.useState([]),e.useState(""),e.useEffect(()=>{b(o,p).then(a=>{console.log("data",a),c({...s,sales:a.records,charges:a.charges,expenses:a.expenses})})},[o]),e.useEffect(()=>{n(!1)},[]),t(f,{children:[r(x,{}),t("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(S,{}),m?r(u,{}):t(h,{children:[r(v,{}),r("div",{className:"w-full mt-8",children:r(w,{})}),t("div",{className:"flex",children:[r("div",{className:"w-1/2",children:r(g,{datas:s})}),r("div",{className:"w-1/2",children:r(B,{datas:s})})]})]})]})]})}export{O as default};
