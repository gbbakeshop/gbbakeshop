import{r as t,q as B,u as w,j as s,a as r}from"./app-471bb704.js";import{A as x}from"./administrator-layout-69e59bc1.js";import g from"./branch-bread-report-table-22655900.js";import{g as L}from"./records-services-77202558.js";import C from"./branch-bread-report-tabs-b4fadf89.js";import{S as j}from"./skeleton-loader-80ca7b3f.js";import{S as v}from"./search-6b32677d.js";import D from"./sidebar-branches-639fbdfd.js";import"./ReactToastify-3a845d54.js";import"./useDispatch-2468cd42.js";import"./store-icon-8d6effd5.js";import"./branches-services-4d776545.js";import"./moment-bb3be199.js";import"./move-to-sales-report-form-eb599541.js";import"./x-mark-icon-2b3a3df3.js";import"./input-60c4323a.js";import"./move-icon-e3cc8229.js";import"./transition-d2abeff0.js";import"./open-closed-cd31899c.js";import"./dialog-ed4b2db6.js";import"./keyboard-27505bb6.js";import"./hidden-400fb523.js";import"./branch-bread-report-edit-357c95b2.js";import"./pencil-icon-607cca7f.js";import"./index.esm-67fcce9b.js";import"./iconBase-2480812f.js";import"./index.esm-31de157e.js";import"./use-resolve-button-type-a2477459.js";function rt(i){const[a,m]=t.useState([]),{auth:p}=i,[n,c]=t.useState(!0),{url:u}=B(),f=u.split("/")[2],{refresh:d}=w(o=>o.app),[l,h]=t.useState([]),[e,S]=t.useState("");return t.useEffect(()=>{L({branchid:f,params:"bread"}).then(o=>{m(o.status),c(!1)})},[d]),t.useEffect(()=>{const o=a.filter(b=>b.bread_name.toLowerCase().includes(e.toLowerCase()));h(o)},[e]),s(x,{children:[r(D,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(C,{}),r("br",{}),r(v,{search:e,setSearch:S}),n?r(j,{}):r(g,{account:p.user,data:e==""?a:l})]})]})}export{rt as default};
