import{r as e,u as w,j as c,a as o}from"./app-471bb704.js";import{A as x}from"./administrator-layout-69e59bc1.js";import{g}from"./recipes-services-851ee5c3.js";import C from"./recipes-table-efb7c2cb.js";import{S as L}from"./skeleton-loader-80ca7b3f.js";import _ from"./recipes-tabs-8bf24e95.js";import{S as b}from"./search-6b32677d.js";import v from"./sidebar-controls-cc14ba34.js";import"./ReactToastify-3a845d54.js";import"./useDispatch-2468cd42.js";import"./store-icon-8d6effd5.js";import"./branches-services-4d776545.js";import"./recipes-add-ingredients-e15cb0c4.js";import"./ingredients-services-08a778b4.js";import"./x-mark-icon-2b3a3df3.js";import"./pencil-icon-607cca7f.js";import"./transition-d2abeff0.js";import"./open-closed-cd31899c.js";import"./dialog-ed4b2db6.js";import"./keyboard-27505bb6.js";import"./hidden-400fb523.js";import"./recipes-show-ingredients-33e98e8e.js";import"./eyes-icon-e0af2ab3.js";import"./index.esm-6ff0b6bd.js";import"./iconBase-2480812f.js";import"./index.esm-31de157e.js";import"./account-icons-bfe41637.js";function j(D){const[t,n]=e.useState([]),[l,f]=e.useState(!0),[u,d]=e.useState([]),[s,S]=e.useState(""),{refresh:h}=w(r=>r.app);return e.useEffect(()=>{g().then(r=>{n(r),f(!1)})},[h]),e.useEffect(()=>{const r=t==null?void 0:t.map(a=>{var i;return(i=a==null?void 0:a.selected_breads)==null?void 0:i.filter(m=>{var p;return(p=m==null?void 0:m.bread_name)==null?void 0:p.toLowerCase().includes(s.toLowerCase())})});d(t.map((a,i)=>({...a,selected_breads:r[i]})))},[s,t]),c(x,{children:[o(v,{}),c("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[o(_,{}),o("br",{}),o(b,{search:s,setSearch:S}),l?o(L,{}):o(C,{data:s==""?t:u})]})]})}export{j as default};
