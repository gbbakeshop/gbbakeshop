import{r as t,q as S,u as w,j as s,a}from"./app-5d8b0e1d.js";import{A as x}from"./administrator-layout-791277db.js";import b from"./branch-raw-materials-table-60c3676c.js";import{g}from"./raw-materials-services-ef55a005.js";import{S as B}from"./skeleton-loader-b307029f.js";import{S as L}from"./search-826a4c11.js";import _ from"./sidebar-branches-94a96ec0.js";import{B as j}from"./bread-crumbs-f7ce63bb.js";import"./ReactToastify-0f1a55c0.js";import"./useDispatch-b811ceb1.js";import"./store-icon-4418cdb0.js";import"./branches-services-28dca217.js";import"./moment-f74ed1a8.js";import"./branch-raw-materials-update-form-44d29c02.js";import"./x-mark-icon-b8b9acc3.js";import"./input-4d8d9b7e.js";import"./pencil-icon-94509901.js";import"./transition-067056f0.js";import"./open-closed-fb35e395.js";import"./dialog-4172430c.js";import"./keyboard-32dc41d4.js";import"./hidden-849c18f6.js";import"./use-resolve-button-type-5a715e38.js";import"./iconBase-3338f8d5.js";function X(v){const[o,i]=t.useState([]),[m,p]=t.useState(!0),{url:c}=S(),n=c.split("/")[2],{refresh:l}=w(r=>r.app),[f,u]=t.useState([]),[e,d]=t.useState("");return t.useEffect(()=>{const r=o.filter(h=>h.raw_materials.toLowerCase().includes(e.toLowerCase()));u(r)},[e]),t.useEffect(()=>{g(n).then(r=>{i(r),p(!1)})},[l]),s(x,{children:[a(_,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[a(j,{}),a(L,{search:e,setSearch:d}),m?a(B,{}):a(b,{data:e==""?o:f})]})]})}export{X as default};
