import{r as o,u as m,m as x,D as B,j as n,a as t}from"./app-439bd4e4.js";import{B as L}from"./branch-layout-0b080b06.js";import"./moment-c511fdcc.js";import{c as D}from"./selecta-services-9dffa43f.js";import{S as g}from"./skeleton-loader-cb02462d.js";import{S as v}from"./search-44165072.js";import w from"./selecta-tabs-8961bd6f.js";import{B as N}from"./bread-crumbs-eaf8b415.js";import _ from"./branch-selecta-search-date-7568b986.js";import j from"./branch-selecta-records-table-e58edf62.js";import{u as C}from"./useDispatch-3338ceec.js";import"./squire-icon-469d41ab.js";import"./store-icon-330df8fd.js";import"./branches-services-7dd5a948.js";import"./database-icon-4b4783e7.js";import"./iconBase-91a5c3ab.js";import"./branch-select-edit-record-6e470d4e.js";import"./pencil-icon-0e380139.js";import"./loading-icon-0145f98c.js";import"./x-mark-icon-a6cf0dfc.js";import"./input-bea1ffe2.js";import"./transition-ecf15cca.js";import"./open-closed-8292dd2d.js";import"./dialog-793596d4.js";import"./keyboard-23378de6.js";import"./hidden-95bf9ddf.js";function et(e){const d=e.auth.user.branchid,[h,u]=o.useState(!0),[l,p]=o.useState([]),[a,f]=o.useState(""),{refresh:s}=m(r=>r.app),{records:c}=m(r=>r.branchSelecta),b=C();return o.useEffect(()=>{D({date:x().format("L"),branchid:d}).then(r=>{b(B(r)),u(!1)})},[s]),o.useEffect(()=>{const r=c.filter(S=>{var i;return(i=S.selecta.product_name)==null?void 0:i.toLowerCase().includes(a==null?void 0:a.toLowerCase())});p(r)},[a,s]),n(L,{position:e.auth.user.position,branchid:e.auth.user.branchid,children:[t(N,{branchid:e.auth.user.branchid}),n("div",{className:"flex gap-4",children:[t("div",{className:"flex-none",children:t(_,{branchid:e.auth.user.branchid})}),t("div",{className:"flex-1",children:t(v,{search:a,setSearch:f})})]}),t(w,{branchid:e.auth.user.branchid}),h?t(g,{}):t(j,{userid:e.auth.user.id,data:a==""?c:l})]})}export{et as default};
