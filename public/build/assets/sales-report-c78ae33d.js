import{r,u as i,q as x,m as L,B as g,j as m,a as t}from"./app-755926e6.js";import{B}from"./branch-layout-aa7c9c9c.js";import R from"./branch-sales-report-table-379f01d3.js";import{a as v}from"./records-services-8c083049.js";import w from"./production-tabs-2bc29482.js";import{S as C}from"./skeleton-loader-64893bc6.js";import{S as N}from"./search-29c1ff63.js";import j from"./branch-sales-report-search-date-7fdbeb1a.js";import{u as D}from"./useDispatch-dc0683dc.js";import"./squire-icon-ec3eadb9.js";import"./store-icon-251e079f.js";import"./branches-services-a1d34a43.js";import"./database-icon-8a9fef99.js";import"./calendar-icon-e1db7830.js";import"./moment-cf72a34d.js";import"./branch-sales-report-edit-638d424d.js";import"./x-mark-icon-42d2a16d.js";import"./input-2aff30ee.js";import"./pencil-icon-3adfbf1c.js";import"./transition-e9d8e3c7.js";import"./open-closed-a18f8bb1.js";import"./dialog-09580682.js";import"./keyboard-e0fd5332.js";import"./hidden-0056d141.js";import"./clock-icon-98e0bd35.js";import"./iconBase-3f81a67c.js";import"./index.esm-85ca18bb.js";function rt(p){r.useState([]);const n=D(),{records:a}=i(o=>o.salesReport),{auth:e}=p,[c,u]=r.useState(!0);x();const d=e.user.branchid,{refresh:l}=i(o=>o.app),[f,h]=r.useState([]),[s,S]=r.useState("");return r.useEffect(()=>{v({branchid:d,params:"done",date:L().format("L")}).then(o=>{n(g(o.status)),u(!1)})},[l]),r.useEffect(()=>{const o=a.filter(b=>b.bread_name.toLowerCase().includes(s.toLowerCase()));h(o)},[s]),m(B,{position:e.user.position,branchid:e.user.branchid,children:[t(w,{position:e.user.position}),t("br",{}),m("div",{className:"flex gap-4",children:[t("div",{className:"flex-none",children:t(j,{})}),t("div",{className:"flex-1",children:t(N,{search:s,setSearch:S})})]}),c?t(C,{}):t(R,{account:e.user,data:s==""?a:f})]})}export{rt as default};
