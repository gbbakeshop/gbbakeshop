import{r,q as b,u as w,j as s,a as t}from"./app-3485f549.js";import{A as x}from"./administrator-layout-a4dda69d.js";import L from"./branch-bread-report-table-5faf0aa5.js";import{a as g}from"./records-services-8c083049.js";import C from"./branch-bread-report-tabs-fb1e27f8.js";import{S as j}from"./skeleton-loader-dc2d9fbc.js";import{S as v}from"./search-f9d79d70.js";import D from"./sidebar-branches-35cfdb76.js";import{B as E}from"./bread-crumbs-5204cfba.js";import"./squire-icon-5c32ab22.js";import"./useDispatch-8bd9ff98.js";import"./store-icon-0b9207bd.js";import"./branches-services-61073265.js";import"./moment-917393ec.js";import"./move-to-sales-report-form-64bd438e.js";import"./x-mark-icon-e0965a25.js";import"./input-d1ca341d.js";import"./move-icon-c93c438a.js";import"./exclamation-icon-de346e93.js";import"./transition-55e28017.js";import"./open-closed-853883de.js";import"./dialog-e8766f85.js";import"./keyboard-86256e9b.js";import"./hidden-f590cb14.js";import"./branch-bread-report-edit-59ad4272.js";import"./pencil-icon-effbf598.js";import"./clock-icon-c3c2fb13.js";import"./iconBase-46b727f8.js";import"./index.esm-53cbef27.js";import"./use-resolve-button-type-778c4baf.js";function at(m){const[a,i]=r.useState([]),{auth:p}=m,[n,c]=r.useState(!0),{url:u}=b(),f=u.split("/")[2],{refresh:d}=w(o=>o.app),[l,h]=r.useState([]),[e,S]=r.useState("");return r.useEffect(()=>{g({branchid:f,params:"bread"}).then(o=>{i(o.status),c(!1)})},[d]),r.useEffect(()=>{const o=a.filter(B=>B.bread_name.toLowerCase().includes(e.toLowerCase()));h(o)},[e]),s(x,{children:[t(D,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(E,{}),t(C,{}),t("br",{}),t(v,{search:e,setSearch:S}),n?t(j,{}):t(L,{account:p.user,data:e==""?a:l})]})]})}export{at as default};
