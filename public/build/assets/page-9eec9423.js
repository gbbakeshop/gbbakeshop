import{r as t,q as S,u as w,j as s,a as e}from"./app-471bb704.js";import{A as x}from"./administrator-layout-69e59bc1.js";import g from"./branch-raw-materials-table-e8f28d45.js";import{g as L}from"./raw-materials-services-0f0c6253.js";import{S as b}from"./skeleton-loader-80ca7b3f.js";import{S as _}from"./search-6b32677d.js";import j from"./sidebar-branches-639fbdfd.js";import"./ReactToastify-3a845d54.js";import"./useDispatch-2468cd42.js";import"./store-icon-8d6effd5.js";import"./branches-services-4d776545.js";import"./moment-bb3be199.js";import"./branch-raw-materials-update-93297333.js";import"./branch-raw-materials-update-form-d59d4c84.js";import"./input-60c4323a.js";import"./edit-icon-dab3b61e.js";import"./open-closed-cd31899c.js";import"./keyboard-27505bb6.js";import"./use-resolve-button-type-a2477459.js";function K(v){const[o,i]=t.useState([]),[m,n]=t.useState(!0),{url:p}=S(),c=p.split("/")[2],{refresh:l}=w(r=>r.app),[f,u]=t.useState([]),[a,d]=t.useState("");return t.useEffect(()=>{const r=o.filter(h=>h.raw_materials.toLowerCase().includes(a.toLowerCase()));u(r)},[a]),t.useEffect(()=>{L(c).then(r=>{i(r),n(!1)})},[l]),s(x,{children:[e(j,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(_,{search:a,setSearch:d}),m?e(b,{}):e(g,{data:a==""?o:f})]})]})}export{K as default};