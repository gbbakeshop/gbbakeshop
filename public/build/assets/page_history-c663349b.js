import{q as x,r,u as l,v,C as y,j as i,a as e}from"./app-5359f92b.js";import{A as B}from"./administrator-layout-59a0dddd.js";import{b as w}from"./selecta-services-aa709b45.js";import{S as L}from"./skeleton-loader-7a95803a.js";import g from"./sidebar-branches-2e6c4a97.js";import{B as N}from"./bread-crumbs-25bf1201.js";import C from"./tab-3a503007.js";import D from"./branch-selecta-history-table-5b9a7917.js";import H from"./branch-selecta-search-date-history-cc6309fe.js";import{u as j}from"./useDispatch-34b1e7b9.js";import"./squire-icon-3a22af02.js";import"./store-icon-1e528df8.js";import"./branches-services-8295fb8a.js";import"./open-closed-b515af5c.js";import"./keyboard-db803cf3.js";import"./use-resolve-button-type-670a07e9.js";import"./iconBase-9fcffeb5.js";import"./moment-1ece9ae3.js";function W(s){const{url:u}=x(),o=s.auth.user.position=="admin"?u.split("/")[2]:s.auth.user.branchid,[f,h]=r.useState(!0),[p,d]=r.useState([]),[a,E]=r.useState(""),{refresh:c}=l(t=>t.app),{history:n}=l(t=>t.branchSelecta),S=j();return r.useEffect(()=>{w({date:v().format("L"),branchid:o}).then(t=>{S(y(t)),h(!1)})},[c]),r.useEffect(()=>{const t=n.filter(b=>{var m;return(m=b.user.name)==null?void 0:m.toLowerCase().includes(a==null?void 0:a.toLowerCase())});d(t)},[a,c]),i(B,{children:[e(g,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(N,{}),i("div",{className:"flex gap-4",children:[e("div",{className:"flex-none",children:e(H,{branchid:o})}),e("div",{className:"flex-1"})]}),e(C,{branchid:o}),f?e(L,{}):e(D,{userid:s.auth.user.id,data:a==""?n:p})]})]})}export{W as default};
