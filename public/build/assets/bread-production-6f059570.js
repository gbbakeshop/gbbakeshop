import{r as o,q as l,u as f,j as b,a}from"./app-1c369c91.js";import{B as g}from"./branch-layout-92c24378.js";import S from"./bread-table-5c985da7.js";import{g as B}from"./recipes-services-b67c6d23.js";import _ from"./production-tabs-0e3c4c3f.js";import{S as x}from"./skeleton-loader-2d5dbac9.js";import{g as P}from"./raw-materials-services-47ee2e1d.js";import"./squire-icon-cb60f684.js";import"./useDispatch-615f4d2a.js";import"./store-icon-6a2c6493.js";import"./branches-services-b9410dcb.js";import"./database-icon-78e4a785.js";import"./create-production-form-75246758.js";import"./x-mark-icon-643dcf46.js";import"./plus-icon-f9df200b.js";import"./ingredients-services-f15e276e.js";import"./records-services-bd55174c.js";import"./moment-fbc5633a.js";import"./transition-f4441d24.js";import"./open-closed-9458169d.js";import"./dialog-a14cea3c.js";import"./keyboard-8934977f.js";import"./hidden-f15b4249.js";import"./clock-icon-deb661f7.js";import"./iconBase-9b20d7f1.js";import"./index.esm-edac5429.js";function W(m){const{auth:r}=m,[e,p]=o.useState([]),[n,c]=o.useState([]),[u,d]=o.useState(!0),{url:i}=l(),s=i.split("/")[2]=="bread-production"?r.user.branchid:i.split("/")[2],{refresh:h}=f(t=>t.app);return o.useEffect(()=>{B().then(t=>{p(t),d(!1)}),P(s).then(t=>{c(t)})},[h]),b(g,{branchid:r.user.branchid,children:[a(_,{branchid:r.user.branchid}),u?a(x,{}):a(S,{account:r.user,branchid:s,data2:n,data:e.length==0?[]:e})]})}export{W as default};
