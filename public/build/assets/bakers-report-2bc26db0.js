import{r as t,q as b,u as g,j as k,a as e}from"./app-a5f44683.js";import{B}from"./branch-layout-332515bd.js";import L from"./branch-bakers-report-table-6baa0e8e.js";import w from"./production-tabs-1fc58945.js";import{S as x}from"./skeleton-loader-2519a0e2.js";import{g as C}from"./records-services-fe504d0d.js";import{S as j}from"./search-02de32ae.js";import"./squire-icon-743c4ee5.js";import"./useDispatch-7d9112c0.js";import"./store-icon-5a5cb3f1.js";import"./branches-services-2bfde4dd.js";import"./database-icon-901cc323.js";import"./moment-f45994c4.js";import"./branch-bakers-report-edit-c2862a25.js";import"./x-mark-icon-52290eb2.js";import"./input-f2077ca3.js";import"./pencil-icon-39da1f20.js";import"./transition-4743fbc4.js";import"./open-closed-9b60def7.js";import"./dialog-2886340a.js";import"./keyboard-18eb2dfc.js";import"./hidden-2f38d50d.js";import"./move-to-bread-report-form-42cc7437.js";import"./move-icon-e43a7992.js";import"./move-to-another-branch-fde6de12.js";import"./clock-icon-1c6fdbb9.js";import"./iconBase-ceb5f103.js";import"./index.esm-13ec0457.js";function tt(m){const{auth:r}=m,[a,n]=t.useState([]);t.useState([]);const[c,u]=t.useState(!0),{url:i}=b(),p=i.split("/")[2]=="bakers-report"?r.user.branchid:i.split("/")[2],{refresh:f}=g(o=>o.app),[d,h]=t.useState([]),[s,l]=t.useState("");return t.useEffect(()=>{C({branchid:p,params:"bakers"}).then(o=>{n(o.status),u(!1)})},[f]),t.useEffect(()=>{const o=a.filter(S=>S.bread_name.toLowerCase().includes(s.toLowerCase()));h(o)},[s]),k(B,{position:r.user.position,branchid:r.user.branchid,children:[e(w,{position:r.user.position}),e("br",{}),e(j,{search:s,setSearch:l}),c?e(x,{}):e(L,{account:r.user,branchid:p,data:s==""?a:d})]})}export{tt as default};