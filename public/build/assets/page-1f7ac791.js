import{r,q as b,u as w,j as s,a as t}from"./app-755926e6.js";import{A as x}from"./administrator-layout-f86fa75a.js";import L from"./branch-bread-report-table-5ade91b0.js";import{a as g}from"./records-services-8c083049.js";import C from"./branch-bread-report-tabs-55daffb5.js";import{S as j}from"./skeleton-loader-64893bc6.js";import{S as v}from"./search-29c1ff63.js";import D from"./sidebar-branches-ac0e45f5.js";import{B as E}from"./bread-crumbs-c7fb3f7b.js";import"./squire-icon-ec3eadb9.js";import"./useDispatch-dc0683dc.js";import"./store-icon-251e079f.js";import"./branches-services-a1d34a43.js";import"./moment-cf72a34d.js";import"./move-to-sales-report-form-2e299e21.js";import"./x-mark-icon-42d2a16d.js";import"./input-2aff30ee.js";import"./move-icon-2226e7c8.js";import"./exclamation-icon-80116cfb.js";import"./transition-e9d8e3c7.js";import"./open-closed-a18f8bb1.js";import"./dialog-09580682.js";import"./keyboard-e0fd5332.js";import"./hidden-0056d141.js";import"./branch-bread-report-edit-996fe450.js";import"./pencil-icon-3adfbf1c.js";import"./clock-icon-98e0bd35.js";import"./iconBase-3f81a67c.js";import"./index.esm-85ca18bb.js";import"./use-resolve-button-type-5daf695a.js";function at(m){const[a,i]=r.useState([]),{auth:p}=m,[n,c]=r.useState(!0),{url:u}=b(),f=u.split("/")[2],{refresh:d}=w(o=>o.app),[l,h]=r.useState([]),[e,S]=r.useState("");return r.useEffect(()=>{g({branchid:f,params:"bread"}).then(o=>{i(o.status),c(!1)})},[d]),r.useEffect(()=>{const o=a.filter(B=>B.bread_name.toLowerCase().includes(e.toLowerCase()));h(o)},[e]),s(x,{children:[t(D,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(E,{}),t(C,{}),t("br",{}),t(v,{search:e,setSearch:S}),n?t(j,{}):t(L,{account:p.user,data:e==""?a:l})]})]})}export{at as default};