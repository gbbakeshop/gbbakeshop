import{a as e,F as c,h as u}from"./app-f46303a7.js";import{S as t}from"./sweetalert2.all-693101fa.js";import{d as f}from"./ingredients-services-2f208ade.js";import{u as d}from"./useDispatch-3d836920.js";function x({data:o,icons:n}){const i=d();function r(s){t.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(l=>{l.isConfirmed&&f(s).then(a=>{a.status=="success"?(i(u()),t.fire({icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})):t.fire({icon:"error",title:"Invalid",showConfirmButton:!1,timer:1500})})})}return e(c,{children:e("div",{className:"relative inline-block text-left",children:e("button",{onClick:()=>r(o.id),type:"button",className:" relative flex rounded-full text-sm",children:n})})})}export{x as default};
