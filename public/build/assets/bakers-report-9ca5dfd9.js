import{r as t,q as b,u as g,j as k,a as e}from"./app-f46303a7.js";import{B}from"./branch-layout-2cc28e34.js";import L from"./branch-bakers-report-table-f39370e0.js";import w from"./production-tabs-33194adf.js";import{S as x}from"./skeleton-loader-7838592d.js";import{g as C}from"./records-services-77202558.js";import{S as j}from"./search-ae99f021.js";import"./toast-notification-8eea7f11.js";import"./iconBase-ff4ab028.js";import"./branches-services-95ce5ec1.js";import"./moment-3b5526b7.js";import"./branch-bakers-report-edit-6f766b59.js";import"./input-4b248597.js";import"./useDispatch-3d836920.js";import"./drawer-aaa6a31f.js";import"./action-drawer-022de936.js";import"./move-to-bread-report-form-49f48773.js";import"./move-to-another-branch-f20314ad.js";import"./edit-icon-882d0c58.js";import"./transfer-icon-69edc633.js";import"./index.esm-e33b7c50.js";import"./index.esm-6edd22ca.js";import"./index.esm-afdfae5f.js";function W(m){const{auth:a}=m,[s,n]=t.useState([]);t.useState([]);const[c,u]=t.useState(!0),{url:i}=b(),p=i.split("/")[2]=="bakers-report"?a.user.branchid:i.split("/")[2],{refresh:f}=g(r=>r.app),[d,h]=t.useState([]),[o,l]=t.useState("");return t.useEffect(()=>{C({branchid:p,params:"bakers"}).then(r=>{n(r.status),u(!1)})},[f]),t.useEffect(()=>{const r=s.filter(S=>S.bread_name.toLowerCase().includes(o.toLowerCase()));h(r)},[o]),k(B,{branchid:a.user.branchid,children:[e(w,{}),e("br",{}),e(j,{search:o,setSearch:l}),c?e(x,{}):e(L,{branchid:p,data:o==""?s:d})]})}export{W as default};