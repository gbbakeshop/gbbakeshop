import{r as t,q as h,j as s,a as e}from"./app-5b6c1851.js";import{A as S}from"./administrator-layout-50a14c74.js";import w from"./branch-selecta-table-8c59e9bc.js";import{g as x}from"./selecta-services-f023835f.js";import{S as b}from"./skeleton-loader-01095351.js";import{S as g}from"./search-120929c3.js";import B from"./sidebar-branches-0c75600e.js";import{B as L}from"./bread-crumbs-17c211b1.js";import"./ReactToastify-fbf63f22.js";import"./useDispatch-6fd51528.js";import"./store-icon-8ee54e4e.js";import"./branches-services-da34c3e4.js";import"./moment-421e0019.js";import"./delete-icon-963a9f21.js";import"./open-closed-dbd61283.js";import"./keyboard-a0b48e55.js";import"./use-resolve-button-type-ee41898d.js";import"./iconBase-e6af7aff.js";function K(j){const[o,i]=t.useState([]),{url:m}=h(),c=m.split("/")[2],[n,p]=t.useState(!0),[l,f]=t.useState([]),[r,u]=t.useState("");return t.useEffect(()=>{x(c).then(a=>{i(a),p(!1)})},[]),t.useEffect(()=>{const a=o.filter(d=>d.product_name.toLowerCase().includes(r.toLowerCase()));f(a)},[r]),s(S,{children:[e(B,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(L,{}),e(g,{search:r,setSearch:u}),n?e(b,{}):e(w,{data:r==""?o:l})]})]})}export{K as default};
