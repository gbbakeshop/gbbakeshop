import{r as t,u as d,j as s,a as o}from"./app-a5f44683.js";import{A as S}from"./administrator-layout-fa848870.js";import h from"./bread-table-37491281.js";import{g as w}from"./breads-services-93594e20.js";import{S as x}from"./skeleton-loader-2519a0e2.js";import{S as b}from"./search-02de32ae.js";import g from"./sidebar-controls-449dc4a7.js";import"./squire-icon-743c4ee5.js";import"./useDispatch-7d9112c0.js";import"./store-icon-5a5cb3f1.js";import"./branches-services-2bfde4dd.js";import"./moment-f45994c4.js";import"./bread-create-form-88e47084.js";import"./x-mark-icon-52290eb2.js";import"./input-f2077ca3.js";import"./transition-4743fbc4.js";import"./open-closed-9b60def7.js";import"./dialog-2886340a.js";import"./keyboard-18eb2dfc.js";import"./hidden-2f38d50d.js";import"./bread-edit-form-f35d79b5.js";import"./pencil-icon-39da1f20.js";import"./bread-delete-96069cd9.js";import"./sweetalert2.all-eb156652.js";import"./recipes-services-e1109b8c.js";import"./trash-icon-a4a961e7.js";import"./account-icons-e4cc0d82.js";function W(L){const[a,i]=t.useState([]),[m,p]=t.useState([]),[e,n]=t.useState(""),{refresh:l}=d(r=>r.app),[c,f]=t.useState(!0);return t.useEffect(()=>{w().then(r=>{i(r),f(!1)})},[l]),t.useEffect(()=>{const r=a.filter(u=>u.bread_name.toLowerCase().includes(e.toLowerCase()));p(r)},[e]),s(S,{children:[o(g,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[o(b,{search:e,setSearch:n}),o("br",{}),c?o(x,{}):o(h,{data:e==""?a:m})]})]})}export{W as default};
