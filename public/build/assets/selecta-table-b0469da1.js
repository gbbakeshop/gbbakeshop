import{r as o,j as a,a as e}from"./app-3485f549.js";import{m as c}from"./moment-917393ec.js";import d from"./create-selecta-form-6343efc4.js";import s from"./delete-selecta-1410398d.js";import n from"./update-select-form-0c414aca.js";import"./x-mark-icon-e0965a25.js";import"./input-d1ca341d.js";import"./loading-icon-529630bb.js";import"./selecta-services-c6713371.js";import"./useDispatch-8bd9ff98.js";import"./transition-55e28017.js";import"./open-closed-853883de.js";import"./dialog-e8766f85.js";import"./keyboard-86256e9b.js";import"./hidden-f590cb14.js";import"./trash-icon-b3cc12c5.js";import"./sweetalert2.all-70eb5f49.js";import"./pencil-icon-effbf598.js";function D({data:l}){const[i,p]=o.useState([]);function m(t){return i.find(r=>r===t)}return a("div",{className:"my-6 p-4",children:[e(d,{}),a("table",{className:"min-w-max w-full table-auto",children:[e("thead",{children:e("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:[{title:"Name of Product"},{title:"Price"},{title:"Created At"},{title:"Actions"}].map((t,r)=>e("th",{className:"py-3 px-6 text-left",children:t.title},r))})}),e("tbody",{className:"text-gray-600 text-sm font-light",children:l.map((t,r)=>a("tr",{className:`${m(t.id)==null?" border-b border-slate-200 ":"bg-red-100 border-l-2 border-red-500"} border-red-200 hover:bg-red-100`,children:[e("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:e("div",{className:"flex items-center",children:e("span",{className:"font-medium",children:t.product_name})})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.price})}),e("td",{className:"py-3 px-6 text-left",children:c(t.created_at).format("LLLL")}),e("td",{className:"py-3 px-6 text-left",children:a("div",{className:"flex",children:[e("div",{className:"text-blue-500 w-4 mr-6 transform hover:text-blue-500 hover:scale-110",children:e(n,{data:t})}),e("div",{className:"text-red-500 w-4 mr-2 transform hover:text-red-500 hover:scale-110",children:e(s,{id:t.id})})]})})]},r))})]})]})}export{D as default};