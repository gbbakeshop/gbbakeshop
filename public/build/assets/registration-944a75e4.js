import{r as o,j as a,a as t,F as l}from"./app-41cc0b88.js";import{A as f}from"./administrator-layout-52b410e4.js";import{g as u}from"./account-services-fc073ead.js";import"./sweetalert2.all-9b305cf4.js";import{S as d}from"./skeleton-loader-efe0ba36.js";import g from"./sidebar-controls-cc3a9c8e.js";import h from"./account-tabs-54c96b6c.js";import S from"./register-account-form-f9f372ac.js";import"./squire-icon-3a27aa60.js";import"./useDispatch-cb55bb16.js";import"./store-icon-6351df1f.js";import"./branches-services-c82cb97c.js";import"./account-icons-a57cd32b.js";import"./database-icon-6f5852e3.js";import"./TextInput-e0b7be1c.js";import"./InputLabel-aa9217ce.js";import"./PrimaryButton-71763f3f.js";import"./move-icon-e3604fc6.js";import"./check-icon-2697b205.js";import"./transition-8fbb313c.js";import"./open-closed-e1999277.js";import"./keyboard-4c58af20.js";import"./hidden-5f273b7b.js";import"./use-resolve-button-type-8276605f.js";function O(w){const[s,i]=o.useState([]),[m,p]=o.useState(!0),[x,c]=o.useState([]),[e,L]=o.useState("");return o.useEffect(()=>{u().then(r=>{i(r),p(!1)})},[]),o.useEffect(()=>{const r=s.filter(n=>n.name.toLowerCase().includes(e.toLowerCase()));c(r)},[e]),a(f,{children:[t(g,{}),a("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t("div",{className:"mb-7",children:t(h,{})}),t("br",{}),m?t(d,{}):t(l,{children:t(S,{})})]})]})}export{O as default};