import{r as o,q as S,u as c,v as B,j as p,a as t}from"./app-1c369c91.js";import{A as w}from"./administrator-layout-98b6e9cf.js";import x from"./branch-history-tabs-bd0560ef.js";import{S as y}from"./skeleton-loader-2d5dbac9.js";import L from"./sidebar-branches-bc7b9eec.js";import{B as g}from"./bread-crumbs-7994908e.js";import H from"./branch-history-table-0d632a67.js";import{g as b}from"./history-services-0cadec75.js";import{h as v}from"./moment-fbc5633a.js";import k from"./branch-search-history-62877974.js";import{u as C}from"./useDispatch-615f4d2a.js";import"./squire-icon-cb60f684.js";import"./store-icon-6a2c6493.js";import"./branches-services-b9410dcb.js";import"./clock-icon-deb661f7.js";import"./iconBase-9b20d7f1.js";import"./index.esm-edac5429.js";import"./open-closed-9458169d.js";import"./keyboard-8934977f.js";import"./use-resolve-button-type-17614efd.js";function Y(D){const n=C(),[f,l]=o.useState(!0),{url:u}=S();u.split("/")[2];const{refresh:i}=c(r=>r.app),{history:e}=c(r=>r.branchHistory),[h,d]=o.useState([]),[s,E]=o.useState("");return o.useEffect(()=>{b(v().format("L")).then(r=>{n(B(r)),l(!1)})},[i]),o.useEffect(()=>{const r=e==null?void 0:e.filter(a=>{var m;return(m=a==null?void 0:a.bread_name)==null?void 0:m.toLowerCase().includes(s.toLowerCase())});d(r)},[s,i]),p(w,{children:[t(L,{}),p("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(g,{}),t(x,{}),t("br",{}),t(k,{}),f?t(y,{}):t(H,{data:s==""?e:h})]})]})}export{Y as default};
