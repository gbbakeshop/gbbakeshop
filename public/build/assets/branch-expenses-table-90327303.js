import{a as e,j as a,m as t}from"./app-755926e6.js";import{C as i}from"./create-expenses-c87812bc.js";import d from"./show-receipts-5f53d928.js";import"./x-mark-icon-42d2a16d.js";import"./account-services-b78e9377.js";import"./useDispatch-dc0683dc.js";import"./transition-e9d8e3c7.js";import"./open-closed-a18f8bb1.js";import"./dialog-09580682.js";import"./keyboard-e0fd5332.js";import"./hidden-0056d141.js";function y({data:s,branchid:r}){return e("div",{className:"w-full",children:a("div",{className:"",children:[e("div",{className:"sm:flex items-center justify-between",children:e(i,{branchid:r})}),e("div",{className:"mt-7 overflow-x-auto",children:e("table",{className:"w-full whitespace-nowrap",children:a("tbody",{children:[a("tr",{tabIndex:"0",className:"focus:outline-none h-8 border border-gray-300 rounded",children:[e("td",{className:"",children:a("div",{className:"flex",children:[e("div",{className:"ml-10"}),e("div",{className:"flex items-center pl-5",children:e("p",{className:"text-base font-medium leading-none text-gray-700 mr-2",children:"Name of Supplier"})})]})}),e("td",{className:"pl-5",children:"Description (Receipt ID #)"}),e("td",{className:"pl-5",children:"Amount"}),e("td",{className:"pl-5",children:"Date"})]}),s.map((l,c)=>a("tr",{tabIndex:"0",className:"focus:outline-none h-8 border border-gray-300 rounded",children:[e("td",{className:"",children:a("div",{className:"flex",children:[e("div",{className:"ml-5",children:e("div",{className:"bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative",children:e("input",{placeholder:"checkbox",type:"checkbox",className:"focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"})})}),e("div",{className:"flex items-center pl-5",children:e("p",{className:"text-base font-medium leading-none text-gray-700 mr-2",children:l.name})})]})}),e("td",{className:"pl-5",children:e(d,{data:l})}),a("td",{className:"pl-5",children:["₱ ",l.amount]}),e("td",{className:"pl-5",children:t(l.created_at).format("LLL")})]},c))]})})})]})})}export{y as default};