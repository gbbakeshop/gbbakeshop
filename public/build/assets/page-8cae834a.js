import{r as t,u as d,j as l,a as o}from"./app-f46303a7.js";import{A as S}from"./administrator-layout-8f515e17.js";import{g}from"./ingredients-services-2f208ade.js";import h from"./ingredients-table-6975c05b.js";import{S as L}from"./skeleton-loader-7838592d.js";import w from"./ingredients-tabs-0f9a115a.js";import{S as x}from"./search-ae99f021.js";import"./toast-notification-8eea7f11.js";import"./iconBase-ff4ab028.js";import"./branches-services-95ce5ec1.js";import"./index.esm-0bc1fcdd.js";import"./useDispatch-3d836920.js";import"./index.esm-6edd22ca.js";import"./index.esm-ed8fbac6.js";import"./ingredients-show-c2b0db4d.js";import"./action-drawer-022de936.js";import"./ingredients-edit-7b96b544.js";import"./input-4b248597.js";import"./raw-materials-services-7ccf248f.js";import"./sweetalert2.all-693101fa.js";import"./ingredients-delete-3de03e33.js";import"./view-icon-d899b0ac.js";import"./edit-icon-882d0c58.js";import"./delete-icon-32abce04.js";import"./index.esm-afdfae5f.js";function U(C){const[s,a]=t.useState([]),[i,m]=t.useState(!0),{refresh:p}=d(e=>e.app),[n,c]=t.useState([]),[r,f]=t.useState("");return t.useEffect(()=>{g().then(e=>{a(e.status),m(!1)})},[p]),t.useEffect(()=>{const e=s.filter(u=>u.code.toLowerCase().includes(r.toLowerCase()));c(e)},[r]),l(S,{children:[o(w,{}),o("br",{}),o(x,{search:r,setSearch:f}),i?o(L,{}):o(h,{data:r==""?s:n})]})}export{U as default};
