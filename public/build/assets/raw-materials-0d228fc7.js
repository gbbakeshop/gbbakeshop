import{r as t,q as S,u as w,j as b,a as e}from"./app-3485f549.js";import{B as g}from"./branch-layout-26b62f6a.js";import L from"./branch-raw-materials-table-928410dd.js";import{g as x}from"./raw-materials-services-2c0abca4.js";import{S as _}from"./skeleton-loader-dc2d9fbc.js";import{S as j}from"./search-f9d79d70.js";import"./squire-icon-5c32ab22.js";import"./useDispatch-8bd9ff98.js";import"./store-icon-0b9207bd.js";import"./branches-services-61073265.js";import"./database-icon-15b9ad73.js";import"./calendar-icon-fc9daa10.js";import"./moment-917393ec.js";import"./branch-raw-materials-update-form-83f26235.js";import"./x-mark-icon-e0965a25.js";import"./input-d1ca341d.js";import"./pencil-icon-effbf598.js";import"./transition-55e28017.js";import"./open-closed-853883de.js";import"./dialog-e8766f85.js";import"./keyboard-86256e9b.js";import"./hidden-f590cb14.js";function Q(i){const{auth:a}=i,m=a.user.branchid,[s,n]=t.useState([]),[p,c]=t.useState(!0);S();const{refresh:u}=w(r=>r.app),[f,h]=t.useState([]),[o,l]=t.useState("");return t.useEffect(()=>{x(m).then(r=>{n(r),c(!1)})},[u]),t.useEffect(()=>{const r=s.filter(d=>d.raw_materials.toLowerCase().includes(o.toLowerCase()));h(r)},[o]),b(g,{position:a.user.position,branchid:a.user.branchid,children:[e(j,{search:o,setSearch:l}),p?e(_,{}):e(L,{position:a.user.position,data:o==""?s:f})]})}export{Q as default};
