import{q as a,j as o,a as r}from"./app-3485f549.js";import{A as e}from"./administrator-layout-a4dda69d.js";import n from"./sidebar-branches-35cfdb76.js";import{B as p}from"./bread-crumbs-5204cfba.js";import s from"./attendance-table-8b6fe13f.js";import"./squire-icon-5c32ab22.js";import"./useDispatch-8bd9ff98.js";import"./store-icon-0b9207bd.js";import"./branches-services-61073265.js";import"./open-closed-853883de.js";import"./keyboard-86256e9b.js";import"./use-resolve-button-type-778c4baf.js";import"./iconBase-46b727f8.js";import"./loading-icon-c575185a.js";import"./calendar-icon-fc9daa10.js";import"./check-icon-b60c5526.js";import"./exclamation-icon-de346e93.js";import"./attendance-services-ce583b1e.js";function P(t){const{url:i}=a(),m=i.split("/")[2];return o(e,{children:[r(n,{}),o("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(p,{}),r(s,{branchid:t.auth.user.position=="admin"?m:t.auth.user.branchid})]})]})}export{P as default};