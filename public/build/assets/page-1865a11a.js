import{r as e,u as w,j as c,a as o}from"./app-3485f549.js";import{A as x}from"./administrator-layout-a4dda69d.js";import{g}from"./recipes-services-4bf5c8d2.js";import C from"./recipes-table-700e39a0.js";import{S as L}from"./skeleton-loader-dc2d9fbc.js";import _ from"./recipes-tabs-21d5fb1c.js";import{S as b}from"./search-f9d79d70.js";import v from"./sidebar-controls-cc1e6c58.js";import"./squire-icon-5c32ab22.js";import"./useDispatch-8bd9ff98.js";import"./store-icon-0b9207bd.js";import"./branches-services-61073265.js";import"./recipes-add-ingredients-a7fa8520.js";import"./ingredients-services-b7b1940e.js";import"./x-mark-icon-e0965a25.js";import"./pencil-icon-effbf598.js";import"./transition-55e28017.js";import"./open-closed-853883de.js";import"./dialog-e8766f85.js";import"./keyboard-86256e9b.js";import"./hidden-f590cb14.js";import"./recipes-show-ingredients-728c0b37.js";import"./eyes-icon-bdd7eb55.js";import"./index.esm-f9f3c97a.js";import"./iconBase-46b727f8.js";import"./index.esm-53cbef27.js";import"./account-icons-b70c22ca.js";function j(D){const[t,n]=e.useState([]),[l,f]=e.useState(!0),[u,d]=e.useState([]),[s,S]=e.useState(""),{refresh:h}=w(r=>r.app);return e.useEffect(()=>{g().then(r=>{n(r),f(!1)})},[h]),e.useEffect(()=>{const r=t==null?void 0:t.map(a=>{var i;return(i=a==null?void 0:a.selected_breads)==null?void 0:i.filter(m=>{var p;return(p=m==null?void 0:m.bread_name)==null?void 0:p.toLowerCase().includes(s.toLowerCase())})});d(t.map((a,i)=>({...a,selected_breads:r[i]})))},[s,t]),c(x,{children:[o(v,{}),c("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[o(_,{}),o("br",{}),o(b,{search:s,setSearch:S}),l?o(L,{}):o(C,{data:s==""?t:u})]})]})}export{j as default};
