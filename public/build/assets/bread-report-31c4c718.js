import{r as t,u as S,q as B,j as L,a as e}from"./app-439bd4e4.js";import{B as g}from"./branch-layout-0b080b06.js";import w from"./branch-bread-report-table-5a2f7f31.js";import{a as x}from"./records-services-8c083049.js";import C from"./production-tabs-def16833.js";import{S as j}from"./skeleton-loader-cb02462d.js";import{S as D}from"./search-44165072.js";import"./squire-icon-469d41ab.js";import"./useDispatch-3338ceec.js";import"./store-icon-330df8fd.js";import"./branches-services-7dd5a948.js";import"./database-icon-4b4783e7.js";import"./moment-c511fdcc.js";import"./move-to-sales-report-form-4eb9fb06.js";import"./x-mark-icon-a6cf0dfc.js";import"./input-bea1ffe2.js";import"./move-icon-301b9e73.js";import"./exclamation-icon-e1195478.js";import"./transition-ecf15cca.js";import"./open-closed-8292dd2d.js";import"./dialog-793596d4.js";import"./keyboard-23378de6.js";import"./hidden-95bf9ddf.js";import"./branch-bread-report-edit-ee9c4fbd.js";import"./pencil-icon-0e380139.js";import"./clock-icon-8b8c2455.js";import"./iconBase-91a5c3ab.js";import"./index.esm-5540f020.js";function tt(p){const[s,m]=t.useState([]),{auth:r}=p,[n,c]=t.useState(!0),{refresh:u}=S(o=>o.app),[d,f]=t.useState([]),[a,h]=t.useState(""),{url:i}=B(),l=i.split("/")[2]=="bread-report"?r.user.branchid:i.split("/")[2];return t.useEffect(()=>{x({branchid:l,params:"bread"}).then(o=>{m(o.status),c(!1)})},[u]),t.useEffect(()=>{const o=s.filter(b=>b.bread_name.toLowerCase().includes(a.toLowerCase()));f(o)},[a]),L(g,{position:r.user.position,branchid:r.user.branchid,children:[e(C,{position:r.user.position}),e("br",{}),e(D,{search:a,setSearch:h}),n?e(j,{}):e(w,{account:r.user,data:a==""?s:d})]})}export{tt as default};
