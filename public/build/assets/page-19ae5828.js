import{r,q as L,u as C,j as p,a as e}from"./app-755926e6.js";import{A as D}from"./administrator-layout-f86fa75a.js";import P from"./bread-table-3002b260.js";import{g as v}from"./recipes-services-9f5f71e3.js";import E from"./branch-bakers-production-tabs-bf7c1bb5.js";import{S as k}from"./skeleton-loader-64893bc6.js";import{g as A}from"./raw-materials-services-6e30eaf9.js";import{S as N}from"./search-29c1ff63.js";import T from"./sidebar-branches-ac0e45f5.js";import{B as q}from"./bread-crumbs-c7fb3f7b.js";import"./squire-icon-ec3eadb9.js";import"./useDispatch-dc0683dc.js";import"./store-icon-251e079f.js";import"./branches-services-a1d34a43.js";import"./create-production-form-71b540d3.js";import"./x-mark-icon-42d2a16d.js";import"./plus-icon-9f53b897.js";import"./ingredients-services-65a5cd35.js";import"./records-services-8c083049.js";import"./transition-e9d8e3c7.js";import"./open-closed-a18f8bb1.js";import"./dialog-09580682.js";import"./keyboard-e0fd5332.js";import"./hidden-0056d141.js";import"./clock-icon-98e0bd35.js";import"./iconBase-3f81a67c.js";import"./index.esm-85ca18bb.js";import"./use-resolve-button-type-5daf695a.js";function ct(u){const{auth:l}=u,[o,d]=r.useState([]),[f,h]=r.useState([]),[S,B]=r.useState(!0),{url:_}=L(),c=_.split("/")[2],{refresh:g}=C(t=>t.app),[w,b]=r.useState([]),[s,x]=r.useState("");return r.useEffect(()=>{v().then(t=>{d(t),B(!1)}),A(c).then(t=>{h(t)})},[g]),r.useEffect(()=>{const t=o==null?void 0:o.map(a=>{var m;return(m=a==null?void 0:a.selected_breads)==null?void 0:m.filter(i=>{var n;return(n=i==null?void 0:i.bread_name)==null?void 0:n.toLowerCase().includes(s.toLowerCase())})});b(o.map((a,m)=>({...a,selected_breads:t[m]})))},[s,o]),p(D,{children:[e(T,{}),p("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(q,{}),e(E,{}),e("br",{}),e(N,{search:s,setSearch:x}),S?e(k,{}):e(P,{account:l.user,branchid:c,data2:f,data:s==""?o:w})]})]})}export{ct as default};