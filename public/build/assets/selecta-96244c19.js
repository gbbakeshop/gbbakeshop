import{r as t,q as l,j as S,a as r}from"./app-5b6c1851.js";import{B as b}from"./branch-layout-0c69f4dc.js";import g from"./branch-selecta-table-8c59e9bc.js";import{g as L}from"./selecta-services-f023835f.js";import{S as w}from"./skeleton-loader-01095351.js";import{S as x}from"./search-120929c3.js";import"./bread-crumbs-17c211b1.js";import"./iconBase-e6af7aff.js";import"./branches-services-da34c3e4.js";import"./ReactToastify-fbf63f22.js";import"./moment-421e0019.js";import"./delete-icon-963a9f21.js";function T(c){const{auth:o}=c,n=o.user.branchid,[s,i]=t.useState([]);l();const[m,u]=t.useState(!0),[p,f]=t.useState([]),[e,d]=t.useState("");return t.useEffect(()=>{L(n).then(a=>{i(a),u(!1)})},[]),t.useEffect(()=>{const a=s.filter(h=>h.product_name.toLowerCase().includes(e.toLowerCase()));f(a)},[e]),S(b,{branchid:o.user.branchid,children:[r(x,{search:e,setSearch:d}),m?r(w,{}):r(g,{data:e==""?s:p})]})}export{T as default};
