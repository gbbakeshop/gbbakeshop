import{r as t,q as S,u as w,j as s,a as e}from"./app-bb52e482.js";import{A as x}from"./administrator-layout-b8cdb933.js";import g from"./branch-raw-materials-table-2c25cdf9.js";import{g as L}from"./raw-materials-services-c52ec842.js";import{S as b}from"./skeleton-loader-1d73eace.js";import{S as _}from"./search-b48fe1fb.js";import j from"./sidebar-branches-451b4ec1.js";import"./ReactToastify-3617c5b7.js";import"./useDispatch-3a9ed006.js";import"./store-icon-6acd80dc.js";import"./moment-141cb4c5.js";import"./branch-raw-materials-update-ae7b9bdb.js";import"./action-drawer-03e12801.js";import"./branch-raw-materials-update-form-a1120eb0.js";import"./input-f1edcf29.js";import"./edit-icon-3e9e1d7b.js";import"./branches-services-592b8022.js";import"./open-closed-bf0a30ca.js";import"./keyboard-d925fd65.js";function K(B){const[o,i]=t.useState([]),[m,p]=t.useState(!0),{url:n}=S(),c=n.split("/")[2],{refresh:l}=w(a=>a.app),[f,u]=t.useState([]),[r,d]=t.useState("");return t.useEffect(()=>{const a=o.filter(h=>h.raw_materials.toLowerCase().includes(r.toLowerCase()));u(a)},[r]),t.useEffect(()=>{L(c).then(a=>{i(a),p(!1)})},[l]),s(x,{children:[e(j,{}),s("div",{className:"flex flex-col w-full h-full p-4",children:[e(_,{search:r,setSearch:d}),m?e(b,{}):e(g,{data:r==""?o:f})]})]})}export{K as default};