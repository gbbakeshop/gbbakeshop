import{r as t,u as d,j as s,a as e}from"./app-12ee0023.js";import{A as S}from"./administrator-layout-8da19b3b.js";import h from"./bread-table-1f318c8a.js";import{g as w}from"./breads-services-ba365c1d.js";import{S as x}from"./skeleton-loader-ec86af29.js";import{S as b}from"./search-b66cba15.js";import g from"./sidebar-controls-74c16657.js";import"./ReactToastify-8a4afb8e.js";import"./useDispatch-ae7a9313.js";import"./store-icon-8b607bbf.js";import"./branches-services-2a953425.js";import"./moment-9a7adb90.js";import"./bread-create-form-a21b640b.js";import"./x-mark-icon-ec6a3a39.js";import"./input-a948e152.js";import"./transition-26b02c88.js";import"./open-closed-50b612ea.js";import"./dialog-743a8223.js";import"./keyboard-886e0771.js";import"./bread-edit-form-8c2eeb5a.js";import"./pencil-icon-ba785fe0.js";import"./bread-delete-3720ca32.js";import"./sweetalert2.all-dd4dca12.js";import"./recipes-services-b3fad4ee.js";import"./trash-icon-d64654c1.js";function U(L){const[a,i]=t.useState([]),[m,p]=t.useState([]),[o,n]=t.useState(""),{refresh:l}=d(r=>r.app),[c,f]=t.useState(!0);return t.useEffect(()=>{w().then(r=>{i(r),f(!1)})},[l]),t.useEffect(()=>{const r=a.filter(u=>u.bread_name.toLowerCase().includes(o.toLowerCase()));p(r)},[o]),s(S,{children:[e(g,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(b,{search:o,setSearch:n}),e("br",{}),c?e(x,{}):e(h,{data:o==""?a:m})]})]})}export{U as default};
