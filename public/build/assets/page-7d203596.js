import{r as o,q as p,j as e,a as r}from"./app-41cc0b88.js";import{A as c}from"./administrator-layout-52b410e4.js";import n from"./sidebar-branches-55280ff1.js";import{B as u}from"./bread-crumbs-fcf137bf.js";import d from"./account-tabs-36d68ded.js";import l from"./account-profile-8e1228c5.js";import f from"./attendance-table-fe045f43.js";import"./squire-icon-3a27aa60.js";import"./useDispatch-cb55bb16.js";import"./store-icon-6351df1f.js";import"./branches-services-c82cb97c.js";import"./open-closed-e1999277.js";import"./keyboard-4c58af20.js";import"./use-resolve-button-type-8276605f.js";import"./iconBase-94d31c31.js";import"./account-services-fc073ead.js";import"./attendance-services-af0f906c.js";import"./check-icon-2697b205.js";import"./exclamation-icon-01d9f900.js";import"./loading-icon-cb83ab3c.js";import"./sweetalert2.all-9b305cf4.js";function F(m){const{auth:t}=m;o.useState([]);const{url:i}=p();o.useState("production"),o.useState(!0);const s=i.split("/")[4]??t.user.id,a=t.user.position=="admin"?i.split("/")[2]:t.user.branchid;return e(c,{children:[r(n,{}),e("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(u,{}),r(l,{}),r(d,{}),r(f,{branchid:a,userid:s})]})]})}export{F as default};