import{r,q as b,u as w,j as i,a as t}from"./app-41cc0b88.js";import{A as x}from"./administrator-layout-52b410e4.js";import k from"./branch-bakers-report-table-855436d1.js";import{a as L}from"./records-services-8c083049.js";import g from"./branch-bakers-report-tabs-ad295c62.js";import{S as C}from"./skeleton-loader-efe0ba36.js";import{S as j}from"./search-0e3c4a69.js";import v from"./sidebar-branches-55280ff1.js";import{B as D}from"./bread-crumbs-fcf137bf.js";import"./squire-icon-3a27aa60.js";import"./useDispatch-cb55bb16.js";import"./store-icon-6351df1f.js";import"./branches-services-c82cb97c.js";import"./moment-854efd96.js";import"./branch-bakers-report-edit-b010b065.js";import"./x-mark-icon-74cd7f9d.js";import"./input-e7403343.js";import"./pencil-icon-3de4c194.js";import"./transition-8fbb313c.js";import"./open-closed-e1999277.js";import"./dialog-ad4f0c03.js";import"./keyboard-4c58af20.js";import"./hidden-5f273b7b.js";import"./move-to-bread-report-form-7c460d1e.js";import"./move-icon-e3604fc6.js";import"./move-to-another-branch-f848f9aa.js";import"./clock-icon-af8cab06.js";import"./iconBase-94d31c31.js";import"./index.esm-cf821160.js";import"./use-resolve-button-type-8276605f.js";function at(p){const[a,n]=r.useState([]),[c,u]=r.useState(!0),{url:f}=b(),s=f.split("/")[2],{refresh:m}=w(o=>o.app),[l,d]=r.useState([]),[e,h]=r.useState(""),{auth:S}=p;return r.useEffect(()=>{L({branchid:s,params:"bakers"}).then(o=>{n(o.status),u(!1)})},[m]),r.useEffect(()=>{const o=a.filter(B=>B.bread_name.toLowerCase().includes(e.toLowerCase()));d(o)},[e,m]),i(x,{children:[t(v,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(D,{}),t(g,{}),t("br",{}),t(j,{search:e,setSearch:h}),c?t(C,{}):t(k,{account:S.user,branchid:s,data:e==""?a:l})]})]})}export{at as default};