import{r as e,u as w,j as c,a as o}from"./app-755926e6.js";import{A as x}from"./administrator-layout-f86fa75a.js";import{g}from"./recipes-services-9f5f71e3.js";import C from"./recipes-table-263dc4ab.js";import{S as L}from"./skeleton-loader-64893bc6.js";import _ from"./recipes-tabs-ff618ab6.js";import{S as b}from"./search-29c1ff63.js";import v from"./sidebar-controls-3b8164fe.js";import"./squire-icon-ec3eadb9.js";import"./useDispatch-dc0683dc.js";import"./store-icon-251e079f.js";import"./branches-services-a1d34a43.js";import"./recipes-add-ingredients-71c97be5.js";import"./ingredients-services-65a5cd35.js";import"./x-mark-icon-42d2a16d.js";import"./pencil-icon-3adfbf1c.js";import"./transition-e9d8e3c7.js";import"./open-closed-a18f8bb1.js";import"./dialog-09580682.js";import"./keyboard-e0fd5332.js";import"./hidden-0056d141.js";import"./recipes-show-ingredients-bdd7c4e3.js";import"./eyes-icon-619ab53f.js";import"./index.esm-2776822f.js";import"./iconBase-3f81a67c.js";import"./index.esm-85ca18bb.js";import"./account-icons-f154fe5e.js";function j(D){const[t,n]=e.useState([]),[l,f]=e.useState(!0),[u,d]=e.useState([]),[s,S]=e.useState(""),{refresh:h}=w(r=>r.app);return e.useEffect(()=>{g().then(r=>{n(r),f(!1)})},[h]),e.useEffect(()=>{const r=t==null?void 0:t.map(a=>{var i;return(i=a==null?void 0:a.selected_breads)==null?void 0:i.filter(m=>{var p;return(p=m==null?void 0:m.bread_name)==null?void 0:p.toLowerCase().includes(s.toLowerCase())})});d(t.map((a,i)=>({...a,selected_breads:r[i]})))},[s,t]),c(x,{children:[o(v,{}),c("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[o(_,{}),o("br",{}),o(b,{search:s,setSearch:S}),l?o(L,{}):o(C,{data:s==""?t:u})]})]})}export{j as default};
