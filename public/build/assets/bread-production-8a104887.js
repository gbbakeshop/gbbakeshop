import{r as o,q as l,u as f,j as b,a}from"./app-12ee0023.js";import{B as g}from"./branch-layout-82b8db31.js";import S from"./bread-table-1d210bc5.js";import{g as B}from"./recipes-services-b3fad4ee.js";import _ from"./production-tabs-d6fc9971.js";import{S as x}from"./skeleton-loader-ec86af29.js";import{g as P}from"./raw-materials-services-8f60afdb.js";import"./iconBase-53c13a17.js";import"./branches-services-2a953425.js";import"./ReactToastify-8a4afb8e.js";import"./create-production-form-1c84eb72.js";import"./x-mark-icon-ec6a3a39.js";import"./plus-icon-449326d2.js";import"./ingredients-services-2bf3497b.js";import"./records-services-77202558.js";import"./input-a948e152.js";import"./useDispatch-ae7a9313.js";import"./transition-26b02c88.js";import"./open-closed-50b612ea.js";import"./dialog-743a8223.js";import"./keyboard-886e0771.js";import"./index.esm-b460d28a.js";import"./index.esm-c44c7658.js";function R(n){const{auth:r}=n,[e,m]=o.useState([]),[p,c]=o.useState([]),[u,d]=o.useState(!0),{url:i}=l(),s=i.split("/")[2]=="bread-production"?r.user.branchid:i.split("/")[2],{refresh:h}=f(t=>t.app);return o.useEffect(()=>{B().then(t=>{m(t),d(!1)}),P(s).then(t=>{c(t)})},[h]),b(g,{branchid:r.user.branchid,children:[a(_,{branchid:r.user.branchid}),u?a(x,{}):a(S,{account:r.user,branchid:s,data2:p,data:e.length==0?[]:e})]})}export{R as default};
