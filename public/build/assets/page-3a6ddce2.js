import{r as t,j as s,a as o}from"./app-78341254.js";import{A as u}from"./administrator-layout-fcd61b04.js";import{a as d}from"./selecta-services-5db961d6.js";import S from"./selecta-table-1635cc3d.js";import{S as h}from"./skeleton-loader-0de3c97a.js";import{S as w}from"./search-7b4d6c8f.js";import x from"./sidebar-controls-ffb20382.js";import"./squire-icon-55bf27e6.js";import"./useDispatch-ed1aaa2e.js";import"./store-icon-b035ce75.js";import"./branches-services-91965912.js";import"./moment-e4ef00d7.js";import"./eyes-icon-8beb580e.js";import"./trash-icon-2f77c46a.js";import"./pencil-icon-a5911282.js";import"./account-icons-709816dc.js";function B(L){const[r,i]=t.useState([]),[m,l]=t.useState(!0),[p,c]=t.useState([]),[e,n]=t.useState("");return t.useEffect(()=>{d().then(a=>{i(a),l(!1)})},[]),t.useEffect(()=>{const a=r.filter(f=>f.product_name.toLowerCase().includes(e.toLowerCase()));c(a)},[e]),s(u,{children:[o(x,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[o(w,{search:e,setSearch:n}),m?o(h,{}):o(S,{data:e==""?r:p})]})]})}export{B as default};
