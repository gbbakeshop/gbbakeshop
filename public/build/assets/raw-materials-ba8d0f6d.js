import{r as t,q as S,u as w,j as b,a as e}from"./app-78341254.js";import{B as g}from"./branch-layout-0cbac6d1.js";import L from"./branch-raw-materials-table-62674c5d.js";import{g as x}from"./raw-materials-services-cceb861d.js";import{S as _}from"./skeleton-loader-0de3c97a.js";import{S as j}from"./search-7b4d6c8f.js";import"./squire-icon-55bf27e6.js";import"./useDispatch-ed1aaa2e.js";import"./store-icon-b035ce75.js";import"./branches-services-91965912.js";import"./database-icon-f62cae78.js";import"./moment-e4ef00d7.js";import"./branch-raw-materials-update-form-5b40881e.js";import"./x-mark-icon-6f305442.js";import"./input-9e384f12.js";import"./pencil-icon-a5911282.js";import"./transition-d6311da9.js";import"./open-closed-12574650.js";import"./dialog-524c6794.js";import"./keyboard-96d205eb.js";import"./hidden-87301ad0.js";function O(i){const{auth:a}=i,n=a.user.branchid,[s,m]=t.useState([]),[p,c]=t.useState(!0);S();const{refresh:u}=w(r=>r.app),[f,h]=t.useState([]),[o,l]=t.useState("");return t.useEffect(()=>{x(n).then(r=>{m(r),c(!1)})},[u]),t.useEffect(()=>{const r=s.filter(d=>d.raw_materials.toLowerCase().includes(o.toLowerCase()));h(r)},[o]),b(g,{position:a.user.position,branchid:a.user.branchid,children:[e(j,{search:o,setSearch:l}),p?e(_,{}):e(L,{position:a.user.position,data:o==""?s:f})]})}export{O as default};
