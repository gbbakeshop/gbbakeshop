import{a as l,o as u}from"./app-471bb704.js";import{S as e}from"./sweetalert2.all-33927608.js";import{d as c}from"./breads-services-eaafd33a.js";import{u as f}from"./useDispatch-2468cd42.js";function w({data:t,icons:o}){const r=f();function i(n){e.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&c(n).then(a=>{a.status=="success"?(r(u()),e.fire({icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})):e.fire({icon:"error",title:"Invalid",showConfirmButton:!1,timer:1500})})})}return l("div",{onClick:()=>i(t.id),children:o})}export{w as default};