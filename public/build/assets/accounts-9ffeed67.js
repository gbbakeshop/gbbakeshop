import{u as d,r as e,j as s,a as t}from"./app-41cc0b88.js";import{A as S}from"./administrator-layout-52b410e4.js";import{g as h}from"./account-services-fc073ead.js";import w from"./accounts-table-c7347327.js";import{S as x}from"./skeleton-loader-efe0ba36.js";import{S as b}from"./search-0e3c4a69.js";import g from"./sidebar-controls-cc3a9c8e.js";import A from"./account-tabs-54c96b6c.js";import"./squire-icon-3a27aa60.js";import"./useDispatch-cb55bb16.js";import"./store-icon-6351df1f.js";import"./branches-services-c82cb97c.js";import"./eyes-icon-301cd51b.js";import"./delete-account-7ca9a64f.js";import"./trash-icon-6dc9e5cb.js";import"./sweetalert2.all-9b305cf4.js";import"./account-icons-a57cd32b.js";import"./database-icon-6f5852e3.js";function J(L){const{refresh:m}=d(o=>o.app),[a,i]=e.useState([]),[c,n]=e.useState(!0),[p,l]=e.useState([]),[r,f]=e.useState("");return e.useEffect(()=>{h().then(o=>{i(o),n(!1)})},[m]),e.useEffect(()=>{const o=a.filter(u=>u.name.toLowerCase().includes(r.toLowerCase()));l(o)},[r]),s(S,{children:[t(g,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t("div",{className:"mb-7",children:t(A,{})}),t(b,{search:r,setSearch:f}),t("br",{}),c?t(x,{}):t(w,{data:r==""?a:p})]})]})}export{J as default};
