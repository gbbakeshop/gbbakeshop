import{r as t,q as b,u as w,j as p,a as r}from"./app-5359f92b.js";import{A as x}from"./administrator-layout-59a0dddd.js";import B from"./branch-selecta-table-c182bcf6.js";import{g}from"./selecta-services-aa709b45.js";import{S as L}from"./skeleton-loader-7a95803a.js";import{S as j}from"./search-7fd89097.js";import v from"./sidebar-branches-2e6c4a97.js";import{B as C}from"./bread-crumbs-25bf1201.js";import D from"./tab-3a503007.js";import"./squire-icon-3a22af02.js";import"./useDispatch-34b1e7b9.js";import"./store-icon-1e528df8.js";import"./branches-services-8295fb8a.js";import"./moment-1ece9ae3.js";import"./branch-selecta-remaining-form-21140ac0.js";import"./database-icon-4dc90918.js";import"./loading-icon-edda21b6.js";import"./transition-8e0cb7e9.js";import"./open-closed-b515af5c.js";import"./dialog-6b9aff71.js";import"./keyboard-db803cf3.js";import"./hidden-072e6277.js";import"./branch-selecta-edit-form-d82b96ea.js";import"./pencil-icon-6770460b.js";import"./exclamation-icon-a690f93f.js";import"./check-icon-607d66ec.js";import"./use-resolve-button-type-670a07e9.js";import"./iconBase-9fcffeb5.js";function rt(a){const[s,c]=t.useState([]),{url:n}=b(),i=n.split("/")[2],[u,l]=t.useState(!0),[f,d]=t.useState([]),[o,h]=t.useState(""),{refresh:m}=w(e=>e.app);return t.useEffect(()=>{g(i).then(e=>{c(e),l(!1)})},[m]),t.useEffect(()=>{const e=s.filter(S=>S.product_name.toLowerCase().includes(o.toLowerCase()));d(e)},[o,m]),p(x,{children:[r(v,{}),p("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(C,{}),r(j,{search:o,setSearch:h}),r(D,{branchid:i}),u?r(L,{}):r(B,{position:a.auth.user.position,userid:a.auth.user.id,data:o==""?s:f})]})]})}export{rt as default};
