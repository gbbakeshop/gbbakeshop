import{r as t,u as d,j as a,a as o}from"./app-1c369c91.js";import{A as S}from"./administrator-layout-98b6e9cf.js";import{g}from"./ingredients-services-f15e276e.js";import h from"./ingredients-table-575b9ac8.js";import{S as w}from"./skeleton-loader-2d5dbac9.js";import x from"./ingredients-tabs-2cab40c8.js";import{S as C}from"./search-f76b9aee.js";import L from"./sidebar-controls-d07f4c07.js";import"./squire-icon-cb60f684.js";import"./useDispatch-615f4d2a.js";import"./store-icon-6a2c6493.js";import"./branches-services-b9410dcb.js";import"./ingredients-show-ceaffe75.js";import"./x-mark-icon-643dcf46.js";import"./eyes-icon-89f826de.js";import"./transition-f4441d24.js";import"./open-closed-9458169d.js";import"./dialog-a14cea3c.js";import"./keyboard-8934977f.js";import"./hidden-f15b4249.js";import"./ingredients-edit-334efaf2.js";import"./pencil-icon-4f6ad5ca.js";import"./trash-icon-6820fbbe.js";import"./input-1fe27915.js";import"./raw-materials-services-47ee2e1d.js";import"./sweetalert2.all-4bfb422a.js";import"./ingredients-delete-a2623162.js";import"./index.esm-5592160c.js";import"./iconBase-9b20d7f1.js";import"./index.esm-edac5429.js";import"./account-icons-7cbedd89.js";function tt(b){const[s,i]=t.useState([]),[m,p]=t.useState(!0),{refresh:n}=d(r=>r.app),[c,f]=t.useState([]),[e,l]=t.useState("");return t.useEffect(()=>{g().then(r=>{i(r.status),p(!1)})},[n]),t.useEffect(()=>{const r=s.filter(u=>u.code.toLowerCase().includes(e.toLowerCase()));f(r)},[e]),a(S,{children:[o(L,{}),a("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[o(x,{}),o("br",{}),o(C,{search:e,setSearch:l}),m?o(w,{}):o(h,{data:e==""?s:c})]})]})}export{tt as default};