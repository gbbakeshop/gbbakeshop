import{r as t,q as b,u as k,j as B,a as e}from"./app-439bd4e4.js";import{B as L}from"./branch-layout-0b080b06.js";import g from"./branch-bakers-report-table-17b62b85.js";import w from"./production-tabs-def16833.js";import{S as x}from"./skeleton-loader-cb02462d.js";import{a as C}from"./records-services-8c083049.js";import{S as j}from"./search-44165072.js";import"./squire-icon-469d41ab.js";import"./useDispatch-3338ceec.js";import"./store-icon-330df8fd.js";import"./branches-services-7dd5a948.js";import"./database-icon-4b4783e7.js";import"./moment-c511fdcc.js";import"./branch-bakers-report-edit-2e5ef0df.js";import"./x-mark-icon-a6cf0dfc.js";import"./input-bea1ffe2.js";import"./pencil-icon-0e380139.js";import"./transition-ecf15cca.js";import"./open-closed-8292dd2d.js";import"./dialog-793596d4.js";import"./keyboard-23378de6.js";import"./hidden-95bf9ddf.js";import"./move-to-bread-report-form-42848cc4.js";import"./move-icon-301b9e73.js";import"./move-to-another-branch-bd23ba10.js";import"./clock-icon-8b8c2455.js";import"./iconBase-91a5c3ab.js";import"./index.esm-5540f020.js";function tt(m){const{auth:r}=m,[s,n]=t.useState([]);t.useState([]);const[c,u]=t.useState(!0),{url:i}=b(),p=i.split("/")[2]=="bakers-report"?r.user.branchid:i.split("/")[2],{refresh:f}=k(o=>o.app),[d,h]=t.useState([]),[a,l]=t.useState("");return t.useEffect(()=>{C({branchid:p,params:"bakers"}).then(o=>{n(o.status),u(!1)})},[f]),t.useEffect(()=>{const o=s.filter(S=>S.bread_name.toLowerCase().includes(a.toLowerCase()));h(o)},[a]),B(L,{position:r.user.position,branchid:r.user.branchid,children:[e(w,{position:r.user.position}),e("br",{}),e(j,{search:a,setSearch:l}),c?e(x,{}):e(g,{account:r.user,branchid:p,data:a==""?s:d})]})}export{tt as default};
