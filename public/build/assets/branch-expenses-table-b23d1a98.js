import{a as e,j as a,v as t}from"./app-5359f92b.js";import{C as i}from"./create-expenses-8bec9d3f.js";import d from"./show-receipts-4371563e.js";import"./x-mark-icon-9a2af45e.js";import"./account-services-cdd2c9ac.js";import"./useDispatch-34b1e7b9.js";import"./transition-8e0cb7e9.js";import"./open-closed-b515af5c.js";import"./dialog-6b9aff71.js";import"./keyboard-db803cf3.js";import"./hidden-072e6277.js";function y({data:s,branchid:r}){return e("div",{className:"w-full",children:a("div",{className:"",children:[e("div",{className:"sm:flex items-center justify-between",children:e(i,{branchid:r})}),e("div",{className:"mt-7 overflow-x-auto",children:e("table",{className:"w-full whitespace-nowrap",children:a("tbody",{children:[a("tr",{tabIndex:"0",className:"focus:outline-none h-8 border border-gray-300 rounded",children:[e("td",{className:"",children:a("div",{className:"flex",children:[e("div",{className:"ml-10"}),e("div",{className:"flex items-center pl-5",children:e("p",{className:"text-base font-medium leading-none text-gray-700 mr-2",children:"Name of Supplier"})})]})}),e("td",{className:"pl-5",children:"Description (Receipt ID #)"}),e("td",{className:"pl-5",children:"Amount"}),e("td",{className:"pl-5",children:"Date"})]}),s.map((l,c)=>a("tr",{tabIndex:"0",className:"focus:outline-none h-8 border border-gray-300 rounded",children:[e("td",{className:"",children:a("div",{className:"flex",children:[e("div",{className:"ml-5",children:e("div",{className:"bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative",children:e("input",{placeholder:"checkbox",type:"checkbox",className:"focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"})})}),e("div",{className:"flex items-center pl-5",children:e("p",{className:"text-base font-medium leading-none text-gray-700 mr-2",children:l.name})})]})}),e("td",{className:"pl-5",children:e(d,{data:l})}),a("td",{className:"pl-5",children:["₱ ",l.amount]}),e("td",{className:"pl-5",children:t(l.created_at).format("LLL")})]},c))]})})})]})})}export{y as default};
