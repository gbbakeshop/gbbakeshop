import{r as o,q as l,u as f,j as b,a}from"./app-471bb704.js";import{B as g}from"./branch-layout-d5d51770.js";import S from"./bread-table-12dc8531.js";import{g as B}from"./recipes-services-851ee5c3.js";import _ from"./production-tabs-e4bd161d.js";import{S as x}from"./skeleton-loader-80ca7b3f.js";import{g as P}from"./raw-materials-services-0f0c6253.js";import"./iconBase-2480812f.js";import"./branches-services-4d776545.js";import"./ReactToastify-3a845d54.js";import"./create-production-form-a4fc5182.js";import"./x-mark-icon-2b3a3df3.js";import"./plus-icon-557c1c64.js";import"./ingredients-services-08a778b4.js";import"./records-services-77202558.js";import"./input-60c4323a.js";import"./useDispatch-2468cd42.js";import"./transition-d2abeff0.js";import"./open-closed-cd31899c.js";import"./dialog-ed4b2db6.js";import"./keyboard-27505bb6.js";import"./hidden-400fb523.js";import"./index.esm-67fcce9b.js";import"./index.esm-31de157e.js";function U(n){const{auth:r}=n,[e,m]=o.useState([]),[p,c]=o.useState([]),[u,d]=o.useState(!0),{url:i}=l(),s=i.split("/")[2]=="bread-production"?r.user.branchid:i.split("/")[2],{refresh:h}=f(t=>t.app);return o.useEffect(()=>{B().then(t=>{m(t),d(!1)}),P(s).then(t=>{c(t)})},[h]),b(g,{branchid:r.user.branchid,children:[a(_,{branchid:r.user.branchid}),u?a(x,{}):a(S,{account:r.user,branchid:s,data2:p,data:e.length==0?[]:e})]})}export{U as default};
