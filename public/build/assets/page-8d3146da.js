import{r as t,q as S,u as w,j as s,a}from"./app-1c369c91.js";import{A as x}from"./administrator-layout-98b6e9cf.js";import b from"./branch-raw-materials-table-92f28aec.js";import{g}from"./raw-materials-services-47ee2e1d.js";import{S as B}from"./skeleton-loader-2d5dbac9.js";import{S as L}from"./search-f76b9aee.js";import _ from"./sidebar-branches-bc7b9eec.js";import{B as j}from"./bread-crumbs-7994908e.js";import"./squire-icon-cb60f684.js";import"./useDispatch-615f4d2a.js";import"./store-icon-6a2c6493.js";import"./branches-services-b9410dcb.js";import"./moment-83dbe819.js";import"./branch-raw-materials-update-form-358f5731.js";import"./x-mark-icon-643dcf46.js";import"./input-1fe27915.js";import"./pencil-icon-4f6ad5ca.js";import"./transition-f4441d24.js";import"./open-closed-9458169d.js";import"./dialog-a14cea3c.js";import"./keyboard-8934977f.js";import"./hidden-f15b4249.js";import"./use-resolve-button-type-17614efd.js";import"./iconBase-9b20d7f1.js";function X(v){const[o,i]=t.useState([]),[m,p]=t.useState(!0),{url:c}=S(),n=c.split("/")[2],{refresh:l}=w(r=>r.app),[f,u]=t.useState([]),[e,d]=t.useState("");return t.useEffect(()=>{const r=o.filter(h=>h.raw_materials.toLowerCase().includes(e.toLowerCase()));u(r)},[e]),t.useEffect(()=>{g(n).then(r=>{i(r),p(!1)})},[l]),s(x,{children:[a(_,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[a(j,{}),a(L,{search:e,setSearch:d}),m?a(B,{}):a(b,{data:e==""?o:f})]})]})}export{X as default};
