import{a as e,F as l,o as c}from"./app-12ee0023.js";import{T as f}from"./trash-icon-d64654c1.js";import{S as t}from"./sweetalert2.all-dd4dca12.js";import{d as m}from"./raw-materials-services-8f60afdb.js";import{u}from"./useDispatch-ae7a9313.js";function C({data:o}){const r=u();function i(n){t.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&m(n).then(a=>{a.status=="success"?(r(c()),t.fire({icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})):t.fire({icon:"error",title:"Invalid",showConfirmButton:!1,timer:1500})})})}return e(l,{children:e("div",{className:"relative inline-block text-left",children:e("button",{onClick:()=>i(o.id),className:"text-red-500 relative flex rounded-full text-sm",children:e(f,{})})})})}export{C as default};
