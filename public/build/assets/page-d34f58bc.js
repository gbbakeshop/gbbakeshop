import{r as t,q as p,j as c,a as r}from"./app-46232a11.js";import{A as d,S as u}from"./administrator-layout-f17f1b44.js";import f from"./bread-table-6f51ffc3.js";import{g as l}from"./raw-materials-services-809441ac.js";import h from"./branch-bakers-production-tabs-9581eef0.js";import"./iconBase-b4a26522.js";import"./index.esm-d0729178.js";import"./index.esm-8bdc4c6e.js";import"./index.esm-81514a8d.js";import"./index.esm-eaae5888.js";import"./moment-864b3c0f.js";import"./index.esm-5b800e5c.js";import"./index.esm-0ff4750c.js";import"./index.esm-04b24264.js";import"./index.esm-7bbee3da.js";function y(B){const[o,a]=t.useState([]),[e,i]=t.useState(!0),{url:s}=p(),n=s.split("/")[2];return t.useEffect(()=>{l(n).then(m=>{a(m),i(!1)})},[]),c(d,{children:[r(h,{}),e?r(u,{}):r(f,{data:o})]})}export{y as default};