import{r as t,q as S,u as w,j as b,a as e}from"./app-a5f44683.js";import{B as g}from"./branch-layout-332515bd.js";import L from"./branch-raw-materials-table-8f044686.js";import{g as x}from"./raw-materials-services-c2b88cbb.js";import{S as _}from"./skeleton-loader-2519a0e2.js";import{S as j}from"./search-02de32ae.js";import"./squire-icon-743c4ee5.js";import"./useDispatch-7d9112c0.js";import"./store-icon-5a5cb3f1.js";import"./branches-services-2bfde4dd.js";import"./database-icon-901cc323.js";import"./moment-f45994c4.js";import"./branch-raw-materials-update-form-90884847.js";import"./x-mark-icon-52290eb2.js";import"./input-f2077ca3.js";import"./pencil-icon-39da1f20.js";import"./transition-4743fbc4.js";import"./open-closed-9b60def7.js";import"./dialog-2886340a.js";import"./keyboard-18eb2dfc.js";import"./hidden-2f38d50d.js";function O(i){const{auth:a}=i,n=a.user.branchid,[s,m]=t.useState([]),[p,c]=t.useState(!0);S();const{refresh:u}=w(r=>r.app),[f,h]=t.useState([]),[o,l]=t.useState("");return t.useEffect(()=>{x(n).then(r=>{m(r),c(!1)})},[u]),t.useEffect(()=>{const r=s.filter(d=>d.raw_materials.toLowerCase().includes(o.toLowerCase()));h(r)},[o]),b(g,{position:a.user.position,branchid:a.user.branchid,children:[e(j,{search:o,setSearch:l}),p?e(_,{}):e(L,{position:a.user.position,data:o==""?s:f})]})}export{O as default};