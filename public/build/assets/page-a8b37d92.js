import{r as o,q as g,u as b,j as B,a as r}from"./app-f46303a7.js";import{A as L}from"./administrator-layout-8f515e17.js";import w from"./branch-sales-report-table-6f46eac7.js";import{g as x}from"./records-services-77202558.js";import C from"./branch-sales-report-tabs-c286fc97.js";import{S as j}from"./skeleton-loader-7838592d.js";import{S as D}from"./search-ae99f021.js";import"./toast-notification-8eea7f11.js";import"./iconBase-ff4ab028.js";import"./branches-services-95ce5ec1.js";import"./index.esm-0bc1fcdd.js";import"./useDispatch-3d836920.js";import"./index.esm-6edd22ca.js";import"./index.esm-ed8fbac6.js";import"./moment-3b5526b7.js";import"./branch-sales-report-edit-80b36978.js";import"./input-4b248597.js";import"./action-drawer-022de936.js";import"./edit-icon-882d0c58.js";import"./index.esm-e33b7c50.js";import"./index.esm-afdfae5f.js";function U(s){const[a,n]=o.useState([]),{auth:i}=s,[m,p]=o.useState(!0),{url:c}=g(),u=c.split("/")[2],{refresh:d}=b(t=>t.app),[f,l]=o.useState([]),[e,h]=o.useState("");return o.useEffect(()=>{x({branchid:u,params:"done"}).then(t=>{n(t.status),console.log("res.status",t.status),p(!1)})},[d]),o.useEffect(()=>{const t=a.filter(S=>S.bread_name.toLowerCase().includes(e.toLowerCase()));l(t)},[e]),B(L,{children:[r(C,{}),r("br",{}),r(D,{search:e,setSearch:h}),m?r(j,{}):r(w,{account:i.user,data:e==""?a:f})]})}export{U as default};
