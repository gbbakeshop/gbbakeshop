import{r as s,a as e,j as a}from"./app-5b6c1851.js";import m from"./recipes-add-ingredients-93aaa4b5.js";import c from"./recipes-show-ingredients-04525834.js";import"./ingredients-services-4877acb3.js";import"./x-mark-icon-20d09fcc.js";import"./pencil-icon-a127ba93.js";import"./useDispatch-6fd51528.js";import"./transition-846f6a8a.js";import"./open-closed-dbd61283.js";import"./dialog-37d6869e.js";import"./keyboard-a0b48e55.js";import"./hidden-4b95b1e7.js";import"./eyes-icon-b2c62d6e.js";function S({data:r}){return s.useState([]),e("div",{className:" my-6",children:a("table",{className:"min-w-max w-full table-auto",children:[e("thead",{children:e("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:[{title:"Name of Bread"},{title:"Target"},{title:"Status"},{title:"Actions"}].map((t,l)=>e("th",{className:"py-3 px-6 text-left",children:t.title},l))})}),e("tbody",{className:"text-gray-600 text-sm font-light",children:r==null?void 0:r.map((t,l)=>a("tr",{className:"border-b border-red-200 hover:bg-red-100",children:[e("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:e("div",{className:"flex items-center",children:e("div",{className:"grid grid-rows-2 grid-flow-col gap-1",children:t==null?void 0:t.selected_breads.map((i,d)=>e("div",{className:"flex-auto text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-red-50 border border-red-50 text-red-500 rounded",children:i.bread_name},d))})})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.target??0})}),e("td",{className:"py-3 px-6 text-left",children:e("span",{className:"bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs",children:"Baker"})}),e("td",{className:"py-3 px-6 text-left",children:a("div",{className:"flex",children:[e("div",{className:"w-4 mr-6 ",children:t.raw_materials==null?e(c,{data:t}):"YES RM"}),e("div",{className:"w-4 mr-2  ",children:e(m,{data:t})})]})})]},l))})]})})}export{S as default};