import{r as t,u as d,j as i,a as r}from"./app-1c369c91.js";import{A as w}from"./administrator-layout-98b6e9cf.js";import{a as S}from"./raw-materials-services-47ee2e1d.js";import h from"./raw-materials-table-a8105d10.js";import{S as x}from"./skeleton-loader-2d5dbac9.js";import C from"./raw-materials-tabs-cf2ad30a.js";import{S as L}from"./search-f76b9aee.js";import g from"./sidebar-controls-d07f4c07.js";import"./squire-icon-cb60f684.js";import"./useDispatch-615f4d2a.js";import"./store-icon-6a2c6493.js";import"./branches-services-b9410dcb.js";import"./moment-83dbe819.js";import"./raw-materials-form-2549ae89.js";import"./x-mark-icon-643dcf46.js";import"./input-1fe27915.js";import"./ingredients-services-f15e276e.js";import"./transition-f4441d24.js";import"./open-closed-9458169d.js";import"./dialog-a14cea3c.js";import"./keyboard-8934977f.js";import"./hidden-f15b4249.js";import"./raw-materials-edit-b951adf7.js";import"./pencil-icon-4f6ad5ca.js";import"./raw-materials-delete-88ed5588.js";import"./trash-icon-6820fbbe.js";import"./sweetalert2.all-4bfb422a.js";import"./raw-materials-create-b4e7288a.js";import"./raw-materials-add-6d58570b.js";import"./plus-icon-f9df200b.js";import"./index.esm-5592160c.js";import"./iconBase-9b20d7f1.js";import"./index.esm-edac5429.js";import"./account-icons-7cbedd89.js";function at(_){const[e,m]=t.useState([]),[s,p]=t.useState(!0),{refresh:l}=d(o=>o.app),[n,f]=t.useState([]),[a,c]=t.useState("");return t.useEffect(()=>{const o=e.filter(u=>u.raw_materials.toLowerCase().includes(a.toLowerCase()));f(o)},[a]),t.useEffect(()=>{S().then(o=>{m(o),p(!1)})},[l]),i(w,{children:[r(g,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(C,{}),r("br",{}),r(L,{search:a,setSearch:c}),s?r(x,{}):r(h,{data:a==""?e:n})]})]})}export{at as default};