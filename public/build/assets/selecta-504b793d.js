import{r,q as S,u as b,j as g,a as e}from"./app-3485f549.js";import{B}from"./branch-layout-26b62f6a.js";import L from"./branch-selecta-table-1d3a101f.js";import{g as w}from"./selecta-services-c6713371.js";import{S as x}from"./skeleton-loader-dc2d9fbc.js";import{S as j}from"./search-f9d79d70.js";import C from"./selecta-tabs-f750d71b.js";import{B as D}from"./bread-crumbs-5204cfba.js";import"./squire-icon-5c32ab22.js";import"./useDispatch-8bd9ff98.js";import"./store-icon-0b9207bd.js";import"./branches-services-61073265.js";import"./database-icon-15b9ad73.js";import"./calendar-icon-fc9daa10.js";import"./moment-917393ec.js";import"./branch-selecta-remaining-form-c87b1aed.js";import"./loading-icon-529630bb.js";import"./transition-55e28017.js";import"./open-closed-853883de.js";import"./dialog-e8766f85.js";import"./keyboard-86256e9b.js";import"./hidden-f590cb14.js";import"./branch-selecta-edit-form-031bdbb2.js";import"./pencil-icon-effbf598.js";import"./exclamation-icon-de346e93.js";import"./check-icon-b60c5526.js";import"./iconBase-46b727f8.js";function $(m){const{auth:t}=m,p=t.user.branchid,[s,n]=r.useState([]);S();const[c,u]=r.useState(!0),[d,h]=r.useState([]),[a,f]=r.useState(""),{refresh:i}=b(o=>o.app);return r.useEffect(()=>{w(p).then(o=>{n(o),u(!1)})},[i]),r.useEffect(()=>{const o=s.filter(l=>l.product_name.toLowerCase().includes(a.toLowerCase()));h(o)},[a,i]),g(B,{position:t.user.position,branchid:t.user.branchid,children:[e(D,{branchid:t.user.branchid}),e(j,{search:a,setSearch:f}),e(C,{branchid:t.user.branchid}),c?e(x,{}):e(L,{position:t.user.position,userid:t.user.id,data:a==""?s:d})]})}export{$ as default};
