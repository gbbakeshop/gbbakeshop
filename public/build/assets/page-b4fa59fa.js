import{r as t,j as o,a as r}from"./app-5b6c1851.js";import{A as p}from"./administrator-layout-50a14c74.js";import n from"./account-table-df5cea89.js";import{S as f}from"./search-120929c3.js";import u from"./sidebar-branches-0c75600e.js";import{B as l}from"./bread-crumbs-17c211b1.js";import"./ReactToastify-fbf63f22.js";import"./useDispatch-6fd51528.js";import"./store-icon-8ee54e4e.js";import"./branches-services-da34c3e4.js";import"./delete-icon-963a9f21.js";import"./open-closed-dbd61283.js";import"./keyboard-a0b48e55.js";import"./use-resolve-button-type-ee41898d.js";import"./iconBase-e6af7aff.js";function T(d){const[a,h]=t.useState([]),[S,s]=t.useState([]),[e,m]=t.useState("");return t.useEffect(()=>{const i=a.filter(c=>c.name.toLowerCase().includes(e.toLowerCase()));s(i)},[e]),o(p,{children:[r(u,{}),o("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(l,{}),r(f,{search:e,setSearch:m}),r(n,{})]})]})}export{T as default};