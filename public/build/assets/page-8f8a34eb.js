import{r as t,q as S,u as w,j as s,a as e}from"./app-76f8ddb2.js";import{A as x}from"./administrator-layout-a5c343a9.js";import g from"./branch-raw-materials-table-9d5f5807.js";import{g as L}from"./raw-materials-services-595e6292.js";import{S as b}from"./skeleton-loader-4fa3478a.js";import{S as _}from"./search-230be232.js";import j from"./sidebar-branches-ba803f68.js";import"./ReactToastify-8573b083.js";import"./store-icon-da55fe9d.js";import"./moment-929438eb.js";import"./branch-raw-materials-update-9444f576.js";import"./action-drawer-e0560051.js";import"./useDispatch-19ea45d4.js";import"./branch-raw-materials-update-form-9f25c310.js";import"./input-9eb0c910.js";import"./edit-icon-1bda16ad.js";import"./branches-services-70c13135.js";import"./open-closed-100a0d60.js";import"./keyboard-2aea3a31.js";function K(B){const[o,i]=t.useState([]),[m,p]=t.useState(!0),{url:n}=S(),c=n.split("/")[2],{refresh:l}=w(a=>a.app),[f,u]=t.useState([]),[r,d]=t.useState("");return t.useEffect(()=>{const a=o.filter(h=>h.raw_materials.toLowerCase().includes(r.toLowerCase()));u(a)},[r]),t.useEffect(()=>{L(c).then(a=>{i(a),p(!1)})},[l]),s(x,{children:[e(j,{}),s("div",{className:"flex flex-col w-full h-full p-4",children:[e(_,{search:r,setSearch:d}),m?e(b,{}):e(g,{data:r==""?o:f})]})]})}export{K as default};