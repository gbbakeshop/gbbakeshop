import{r as t,u as S,q as g,j as B,a as e}from"./app-f46303a7.js";import{B as L}from"./branch-layout-2cc28e34.js";import w from"./branch-bread-report-table-c9f85e33.js";import{g as x}from"./records-services-77202558.js";import C from"./production-tabs-33194adf.js";import{S as j}from"./skeleton-loader-7838592d.js";import{S as D}from"./search-ae99f021.js";import"./toast-notification-8eea7f11.js";import"./iconBase-ff4ab028.js";import"./branches-services-95ce5ec1.js";import"./moment-3b5526b7.js";import"./move-to-sales-report-form-f97fae37.js";import"./input-4b248597.js";import"./useDispatch-3d836920.js";import"./action-drawer-022de936.js";import"./branch-bread-report-edit-9a762537.js";import"./edit-icon-882d0c58.js";import"./transfer-icon-69edc633.js";import"./index.esm-e33b7c50.js";import"./index.esm-6edd22ca.js";import"./index.esm-afdfae5f.js";function U(p){const[s,m]=t.useState([]),{auth:a}=p,[n,c]=t.useState(!0),{refresh:u}=S(r=>r.app),[d,f]=t.useState([]),[o,h]=t.useState(""),{url:i}=g(),l=i.split("/")[2]=="bread-report"?a.user.branchid:i.split("/")[2];return t.useEffect(()=>{x({branchid:l,params:"bread"}).then(r=>{m(r.status),c(!1)})},[u]),t.useEffect(()=>{const r=s.filter(b=>b.bread_name.toLowerCase().includes(o.toLowerCase()));f(r)},[o]),B(L,{branchid:a.user.branchid,children:[e(C,{}),e("br",{}),e(D,{search:o,setSearch:h}),n?e(j,{}):e(w,{account:a.user,data:o==""?s:d})]})}export{U as default};