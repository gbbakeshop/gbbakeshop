import{r as t,u as d,j as i,a as r}from"./app-3485f549.js";import{A as S}from"./administrator-layout-a4dda69d.js";import{i as h}from"./selecta-services-c6713371.js";import w from"./selecta-table-b0469da1.js";import{S as x}from"./skeleton-loader-dc2d9fbc.js";import{S as L}from"./search-f9d79d70.js";import g from"./sidebar-controls-cc1e6c58.js";import"./squire-icon-5c32ab22.js";import"./useDispatch-8bd9ff98.js";import"./store-icon-0b9207bd.js";import"./branches-services-61073265.js";import"./moment-917393ec.js";import"./create-selecta-form-6343efc4.js";import"./x-mark-icon-e0965a25.js";import"./input-d1ca341d.js";import"./loading-icon-529630bb.js";import"./transition-55e28017.js";import"./open-closed-853883de.js";import"./dialog-e8766f85.js";import"./keyboard-86256e9b.js";import"./hidden-f590cb14.js";import"./delete-selecta-1410398d.js";import"./trash-icon-b3cc12c5.js";import"./sweetalert2.all-70eb5f49.js";import"./update-select-form-0c414aca.js";import"./pencil-icon-effbf598.js";import"./account-icons-b70c22ca.js";function W(C){const[a,m]=t.useState([]),[p,c]=t.useState(!0),[l,n]=t.useState([]),[e,f]=t.useState(""),{refresh:s}=d(o=>o.app);return t.useEffect(()=>{h().then(o=>{m(o),c(!1)})},[s]),t.useEffect(()=>{const o=a.filter(u=>u.product_name.toLowerCase().includes(e.toLowerCase()));n(o)},[e,s]),i(S,{children:[r(g,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(L,{search:e,setSearch:f}),p?r(x,{}):r(w,{data:e==""?a:l})]})]})}export{W as default};
