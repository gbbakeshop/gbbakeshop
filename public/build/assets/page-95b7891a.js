import{r as t,q as B,u as x,j as s,a as r}from"./app-bb52e482.js";import{A as g}from"./administrator-layout-b8cdb933.js";import w from"./branch-bread-report-table-d7561ec0.js";import{g as L}from"./records-services-77202558.js";import C from"./branch-bread-report-tabs-132d3d75.js";import{S as j}from"./skeleton-loader-1d73eace.js";import{S as D}from"./search-b48fe1fb.js";import E from"./sidebar-branches-451b4ec1.js";import"./ReactToastify-3617c5b7.js";import"./useDispatch-3a9ed006.js";import"./store-icon-6acd80dc.js";import"./moment-141cb4c5.js";import"./move-to-sales-report-form-317becce.js";import"./input-f1edcf29.js";import"./action-drawer-03e12801.js";import"./branch-bread-report-edit-04b9e387.js";import"./edit-icon-3e9e1d7b.js";import"./transfer-icon-9fba7f62.js";import"./index.esm-b4a1a7c4.js";import"./iconBase-53dc09d0.js";import"./index.esm-8efbae79.js";import"./branches-services-592b8022.js";import"./open-closed-bf0a30ca.js";import"./keyboard-d925fd65.js";function Y(i){const[a,m]=t.useState([]),{auth:p}=i,[n,c]=t.useState(!0),{url:u}=B(),f=u.split("/")[2],{refresh:l}=x(o=>o.app),[d,h]=t.useState([]),[e,S]=t.useState("");return t.useEffect(()=>{L({branchid:f,params:"bread"}).then(o=>{m(o.status),c(!1)})},[l]),t.useEffect(()=>{const o=a.filter(b=>b.bread_name.toLowerCase().includes(e.toLowerCase()));h(o)},[e]),s(g,{children:[r(E,{}),s("div",{className:"flex flex-col w-full h-full p-4",children:[r(C,{}),r("br",{}),r(D,{search:e,setSearch:S}),n?r(j,{}):r(w,{account:p.user,data:e==""?a:d})]})]})}export{Y as default};
