import{r as t,q as B,u as w,j as s,a as r}from"./app-2ef5853a.js";import{A as x}from"./administrator-layout-c97eada5.js";import g from"./branch-bread-report-table-390e4ff0.js";import{g as L}from"./records-services-77202558.js";import C from"./branch-bread-report-tabs-02329ae6.js";import{S as j}from"./skeleton-loader-f8d7a37e.js";import{S as v}from"./search-665cdfc8.js";import D from"./sidebar-branches-d651b774.js";import"./ReactToastify-796b9ca4.js";import"./useDispatch-54a27983.js";import"./store-icon-471b655e.js";import"./branches-services-d2b0cdac.js";import"./moment-076a636f.js";import"./move-to-sales-report-form-69c1eb10.js";import"./x-mark-icon-1d06a67f.js";import"./input-2a23fd1e.js";import"./move-icon-2a2c22c9.js";import"./transition-5e6ac3bb.js";import"./open-closed-0a1c49eb.js";import"./dialog-1e6fe237.js";import"./keyboard-b23630b0.js";import"./hidden-b0c1fc86.js";import"./branch-bread-report-edit-d7e474bd.js";import"./pencil-icon-c7619bb7.js";import"./index.esm-81317a28.js";import"./iconBase-bb677f71.js";import"./index.esm-92dd0b9c.js";import"./use-resolve-button-type-867e49e6.js";function rt(i){const[a,m]=t.useState([]),{auth:p}=i,[n,c]=t.useState(!0),{url:u}=B(),f=u.split("/")[2],{refresh:d}=w(o=>o.app),[l,h]=t.useState([]),[e,S]=t.useState("");return t.useEffect(()=>{L({branchid:f,params:"bread"}).then(o=>{m(o.status),c(!1)})},[d]),t.useEffect(()=>{const o=a.filter(b=>b.bread_name.toLowerCase().includes(e.toLowerCase()));h(o)},[e]),s(x,{children:[r(D,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(C,{}),r("br",{}),r(v,{search:e,setSearch:S}),n?r(j,{}):r(g,{account:p.user,data:e==""?a:l})]})]})}export{rt as default};
