import{r as i,a as t,j as r}from"./app-2ef5853a.js";import{m as s}from"./moment-076a636f.js";import m from"./branch-raw-materials-update-form-3daae603.js";import"./x-mark-icon-1d06a67f.js";import"./input-2a23fd1e.js";import"./raw-materials-services-22e7269b.js";import"./pencil-icon-c7619bb7.js";import"./useDispatch-54a27983.js";import"./transition-5e6ac3bb.js";import"./open-closed-0a1c49eb.js";import"./dialog-1e6fe237.js";import"./keyboard-b23630b0.js";import"./hidden-b0c1fc86.js";function L({data:a}){return i.useState([]),t("div",{className:"my-6",children:r("table",{className:"min-w-max w-full table-auto",children:[t("thead",{children:t("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:[{title:"Name of Raw Materials"},{title:"Bind"},{title:"Quantity"},{title:"Status"},{title:"Created At"},{title:"Actions"}].map((e,l)=>t("th",{className:"py-3 px-6 text-left",children:e.title},l))})}),t("tbody",{className:"text-gray-600 text-sm font-light",children:a==null?void 0:a.map((e,l)=>r("tr",{className:"border-b border-gray-200 hover:bg-gray-100",children:[t("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:t("div",{className:"flex items-center",children:e.raw_materials})}),t("td",{className:"py-3 px-6 text-left",children:e.bind}),r("td",{className:"py-3 px-6 text-left",children:[e.quantity,"kg"]}),t("td",{className:"py-3 px-6 text-left",children:e.warning<e.quantity?t("span",{className:"bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs",children:"Good"}):t("span",{className:"bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs",children:"Low Supplies"})}),t("td",{className:"py-3 px-6 text-left",children:s(e.created_at).format("LLLL")}),t("td",{className:"py-3 px-6 text-left",children:t("div",{className:"flex",children:t(m,{data:e})})})]},l))})]})})}export{L as default};
