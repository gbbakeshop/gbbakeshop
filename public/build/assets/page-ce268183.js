import{r as t,j as s,a as o}from"./app-5d8b0e1d.js";import{A as u}from"./administrator-layout-791277db.js";import{a as d}from"./selecta-services-a09a9361.js";import S from"./selecta-table-2f97b34d.js";import{S as h}from"./skeleton-loader-b307029f.js";import{S as w}from"./search-826a4c11.js";import x from"./sidebar-controls-72e86c85.js";import"./ReactToastify-0f1a55c0.js";import"./useDispatch-b811ceb1.js";import"./store-icon-4418cdb0.js";import"./branches-services-28dca217.js";import"./moment-f74ed1a8.js";import"./eyes-icon-b8d138fe.js";import"./trash-icon-b560490f.js";import"./pencil-icon-94509901.js";import"./account-icons-8ff61e08.js";function B(L){const[r,i]=t.useState([]),[m,l]=t.useState(!0),[p,c]=t.useState([]),[e,n]=t.useState("");return t.useEffect(()=>{d().then(a=>{i(a),l(!1)})},[]),t.useEffect(()=>{const a=r.filter(f=>f.product_name.toLowerCase().includes(e.toLowerCase()));c(a)},[e]),s(u,{children:[o(x,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[o(w,{search:e,setSearch:n}),m?o(h,{}):o(S,{data:e==""?r:p})]})]})}export{B as default};
