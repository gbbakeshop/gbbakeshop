import{r as t,q as b,u as i,m as v,B as w,j as a,a as r}from"./app-41cc0b88.js";import{A as L}from"./administrator-layout-52b410e4.js";import g from"./branch-sales-report-table-aa27034e.js";import{a as N}from"./records-services-8c083049.js";import C from"./branch-sales-report-tabs-38aca171.js";import{S as R}from"./skeleton-loader-efe0ba36.js";import{S as j}from"./search-0e3c4a69.js";import k from"./sidebar-branches-55280ff1.js";import{B as D}from"./bread-crumbs-fcf137bf.js";import E from"./branch-sales-report-search-date-230f2ba6.js";import{u as P}from"./useDispatch-cb55bb16.js";import"./squire-icon-3a27aa60.js";import"./store-icon-6351df1f.js";import"./branches-services-c82cb97c.js";import"./moment-854efd96.js";import"./branch-sales-report-edit-43d7afa5.js";import"./x-mark-icon-74cd7f9d.js";import"./input-e7403343.js";import"./pencil-icon-3de4c194.js";import"./transition-8fbb313c.js";import"./open-closed-e1999277.js";import"./dialog-ad4f0c03.js";import"./keyboard-4c58af20.js";import"./hidden-5f273b7b.js";import"./clock-icon-af8cab06.js";import"./iconBase-94d31c31.js";import"./index.esm-cf821160.js";import"./use-resolve-button-type-8276605f.js";function ir(m){const c=P(),{auth:n}=m,[p,l]=t.useState(!0),{url:d}=b(),f=d.split("/")[2],{refresh:u}=i(o=>o.app),[h,S]=t.useState([]),[e,B]=t.useState(""),{records:s}=i(o=>o.salesReport);return t.useEffect(()=>{N({branchid:f,params:"done",date:v().format("L")}).then(o=>{c(w(o.status)),l(!1)})},[u]),t.useEffect(()=>{const o=s.filter(x=>x.bread_name.toLowerCase().includes(e.toLowerCase()));S(o)},[e]),a(L,{children:[r(k,{}),a("div",{className:"flex flex-col h-screen w-[79vw] p-4 overflow-auto",children:[r(D,{}),r(C,{}),r("br",{}),a("div",{className:"flex gap-4",children:[r("div",{className:"flex-none",children:r(E,{})}),r("div",{className:"flex-1",children:r(j,{search:e,setSearch:B})})]}),p?r(R,{}):r(g,{account:n.user,data:e==""?s:h})]})]})}export{ir as default};
