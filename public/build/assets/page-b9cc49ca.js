import{r as t,u as d,j as a,a as o}from"./app-5d8b0e1d.js";import{A as S}from"./administrator-layout-791277db.js";import{g}from"./ingredients-services-7ae1a239.js";import h from"./ingredients-table-9ce712f1.js";import{S as w}from"./skeleton-loader-b307029f.js";import x from"./ingredients-tabs-1330475c.js";import{S as C}from"./search-826a4c11.js";import L from"./sidebar-controls-72e86c85.js";import"./ReactToastify-0f1a55c0.js";import"./useDispatch-b811ceb1.js";import"./store-icon-4418cdb0.js";import"./branches-services-28dca217.js";import"./ingredients-show-4f3ac41f.js";import"./x-mark-icon-b8b9acc3.js";import"./eyes-icon-b8d138fe.js";import"./transition-067056f0.js";import"./open-closed-fb35e395.js";import"./dialog-4172430c.js";import"./keyboard-32dc41d4.js";import"./hidden-849c18f6.js";import"./ingredients-edit-f85071e8.js";import"./pencil-icon-94509901.js";import"./trash-icon-b560490f.js";import"./input-4d8d9b7e.js";import"./raw-materials-services-ef55a005.js";import"./sweetalert2.all-cbfd8770.js";import"./ingredients-delete-4a5aaeca.js";import"./index.esm-76c29bdd.js";import"./iconBase-3338f8d5.js";import"./index.esm-ab88ab9f.js";import"./account-icons-8ff61e08.js";function tt(b){const[s,i]=t.useState([]),[m,p]=t.useState(!0),{refresh:n}=d(r=>r.app),[c,f]=t.useState([]),[e,l]=t.useState("");return t.useEffect(()=>{g().then(r=>{i(r.status),p(!1)})},[n]),t.useEffect(()=>{const r=s.filter(u=>u.code.toLowerCase().includes(e.toLowerCase()));f(r)},[e]),a(S,{children:[o(L,{}),a("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[o(x,{}),o("br",{}),o(C,{search:e,setSearch:l}),m?o(w,{}):o(h,{data:e==""?s:c})]})]})}export{tt as default};
