import{a as e,F as l,i as c}from"./app-5359f92b.js";import{T as f}from"./trash-icon-83118dbc.js";import{f as u}from"./selecta-services-aa709b45.js";import{S as t}from"./sweetalert2.all-33c6ce9a.js";import{u as m}from"./useDispatch-34b1e7b9.js";function B({id:o}){const r=m();function n(i){t.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&u(i).then(a=>{a.status=="success"?(r(c()),t.fire({icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})):t.fire({icon:"error",title:"Invalid",showConfirmButton:!1,timer:1500})})})}return e(l,{children:e("button",{onClick:()=>n(o),children:e(f,{})})})}export{B as default};
