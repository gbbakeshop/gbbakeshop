import{r as t,q as l,j as S,a as r}from"./app-f46303a7.js";import{B as b}from"./branch-layout-2cc28e34.js";import g from"./branch-selecta-table-30ede2b6.js";import{g as L}from"./selecta-services-f1adb0ea.js";import{S as w}from"./skeleton-loader-7838592d.js";import{S as x}from"./search-ae99f021.js";import"./toast-notification-8eea7f11.js";import"./iconBase-ff4ab028.js";import"./branches-services-95ce5ec1.js";import"./moment-3b5526b7.js";import"./view-icon-d899b0ac.js";import"./edit-icon-882d0c58.js";import"./delete-icon-32abce04.js";function z(c){const{auth:o}=c,n=o.user.branchid,[s,i]=t.useState([]);l();const[m,p]=t.useState(!0),[u,f]=t.useState([]),[e,d]=t.useState("");return t.useEffect(()=>{L(n).then(a=>{i(a),p(!1)})},[]),t.useEffect(()=>{const a=s.filter(h=>h.product_name.toLowerCase().includes(e.toLowerCase()));f(a)},[e]),S(b,{branchid:o.user.branchid,children:[r(x,{search:e,setSearch:d}),m?r(w,{}):r(g,{data:e==""?s:u})]})}export{z as default};