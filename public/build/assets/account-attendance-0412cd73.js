import{r as o,q as c,a as t,j as n}from"./app-439bd4e4.js";import{B as m}from"./bread-crumbs-eaf8b415.js";import"./squire-icon-469d41ab.js";import u from"./account-profile-f066b99a.js";import{B as p}from"./branch-layout-0b080b06.js";import d from"./attendance-table-693041c4.js";import l from"./account-settings-tab-457ca16b.js";import"./iconBase-91a5c3ab.js";import"./branches-services-7dd5a948.js";import"./useDispatch-3338ceec.js";import"./account-services-13cc3a0f.js";import"./store-icon-330df8fd.js";import"./database-icon-4b4783e7.js";import"./check-icon-c3db5f8d.js";import"./exclamation-icon-e1195478.js";import"./loading-icon-0145f98c.js";import"./sweetalert2.all-f665d82e.js";function N(e){const{auth:r}=e;o.useState([]);const{url:i}=c();o.useState("production"),o.useState(!0);const a=i.split("/")[4]??r.user.id,s=(i.split("/")[4],r.user.branchid);return t(p,{children:n("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(m,{branchid:r.user.branchid}),t(u,{id:r.user.id}),t(l,{branch:r.user.branchid,id:r.user.id}),t(d,{branchid:s,userid:a})]})})}export{N as default};
