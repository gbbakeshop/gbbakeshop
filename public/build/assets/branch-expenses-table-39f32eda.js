import{a as e,j as a,p as c}from"./app-78341254.js";import{C as t}from"./create-expenses-aae7cf7f.js";import i from"./show-receipts-2577ab26.js";import"./x-mark-icon-6f305442.js";import"./account-services-8d2922ec.js";import"./useDispatch-ed1aaa2e.js";import"./transition-d6311da9.js";import"./open-closed-12574650.js";import"./dialog-524c6794.js";import"./keyboard-96d205eb.js";import"./hidden-87301ad0.js";function v({data:s}){return e("div",{className:"w-full",children:a("div",{className:"",children:[e("div",{className:"sm:flex items-center justify-between",children:e(t,{})}),e("div",{className:"mt-7 overflow-x-auto",children:e("table",{className:"w-full whitespace-nowrap",children:a("tbody",{children:[a("tr",{tabIndex:"0",className:"focus:outline-none h-8 border border-gray-300 rounded",children:[e("td",{className:"",children:a("div",{className:"flex",children:[e("div",{className:"ml-10"}),e("div",{className:"flex items-center pl-5",children:e("p",{className:"text-base font-medium leading-none text-gray-700 mr-2",children:"Name of Supplier"})})]})}),e("td",{className:"pl-5",children:"Description (Receipt ID #)"}),e("td",{className:"pl-5",children:"Amount"}),e("td",{className:"pl-5",children:"Date"})]}),s.map((l,r)=>a("tr",{tabIndex:"0",className:"focus:outline-none h-8 border border-gray-300 rounded",children:[e("td",{className:"",children:a("div",{className:"flex",children:[e("div",{className:"ml-5",children:e("div",{className:"bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative",children:e("input",{placeholder:"checkbox",type:"checkbox",className:"focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"})})}),e("div",{className:"flex items-center pl-5",children:e("p",{className:"text-base font-medium leading-none text-gray-700 mr-2",children:l.name})})]})}),e("td",{className:"pl-5",children:e(i,{data:l})}),a("td",{className:"pl-5",children:["₱ ",l.amount]}),e("td",{className:"pl-5",children:c(l.created_at).format("LLL")})]},r))]})})})]})})}export{v as default};
