import{q as x,r,u as l,m as y,C as B,j as i,a as e}from"./app-439bd4e4.js";import{A as v}from"./administrator-layout-323b050b.js";import{b as w}from"./selecta-services-9dffa43f.js";import{S as L}from"./skeleton-loader-cb02462d.js";import g from"./sidebar-branches-7d358b5b.js";import{B as N}from"./bread-crumbs-eaf8b415.js";import C from"./tab-dfb40364.js";import D from"./branch-selecta-history-table-b9146e45.js";import H from"./branch-selecta-search-date-history-bab6ed71.js";import{u as j}from"./useDispatch-3338ceec.js";import"./squire-icon-469d41ab.js";import"./store-icon-330df8fd.js";import"./branches-services-7dd5a948.js";import"./open-closed-8292dd2d.js";import"./keyboard-23378de6.js";import"./use-resolve-button-type-81bb4e53.js";import"./iconBase-91a5c3ab.js";import"./moment-c511fdcc.js";function W(s){const{url:u}=x(),o=s.auth.user.position=="admin"?u.split("/")[2]:s.auth.user.branchid,[f,h]=r.useState(!0),[p,d]=r.useState([]),[a,E]=r.useState(""),{refresh:c}=l(t=>t.app),{history:n}=l(t=>t.branchSelecta),S=j();return r.useEffect(()=>{w({date:y().format("L"),branchid:o}).then(t=>{S(B(t)),h(!1)})},[c]),r.useEffect(()=>{const t=n.filter(b=>{var m;return(m=b.user.name)==null?void 0:m.toLowerCase().includes(a==null?void 0:a.toLowerCase())});d(t)},[a,c]),i(v,{children:[e(g,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(N,{}),i("div",{className:"flex gap-4",children:[e("div",{className:"flex-none",children:e(H,{branchid:o})}),e("div",{className:"flex-1"})]}),e(C,{branchid:o}),f?e(L,{}):e(D,{userid:s.auth.user.id,data:a==""?n:p})]})]})}export{W as default};
