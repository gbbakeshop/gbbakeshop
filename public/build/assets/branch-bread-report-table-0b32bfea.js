import{r as s,a as e,j as i}from"./app-5b6c1851.js";import"./moment-421e0019.js";import n from"./move-to-sales-report-form-14d10bf6.js";import c from"./branch-bread-report-edit-bb36ddc6.js";import"./x-mark-icon-20d09fcc.js";import"./input-6c97c166.js";import"./records-services-77202558.js";import"./move-icon-89c7866d.js";import"./useDispatch-6fd51528.js";import"./transition-846f6a8a.js";import"./open-closed-dbd61283.js";import"./dialog-37d6869e.js";import"./keyboard-a0b48e55.js";import"./hidden-4b95b1e7.js";import"./pencil-icon-a127ba93.js";function R({account:l,data:a}){return s.useState([]),e("div",{className:" my-6",children:i("table",{className:"min-w-max w-full table-auto",children:[e("thead",{children:e("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:[{title:"Name of Bread"},{title:"Beginning"},{title:"New Production"},{title:"Charges"},{title:"Over"},{title:"Total"},{title:"Status"},{title:"Actions"}].map((t,r)=>e("th",{className:"py-3 px-6 text-left",children:t.title},r))})}),e("tbody",{className:"text-gray-600 text-sm font-light",children:a==null?void 0:a.map((t,r)=>i("tr",{className:"border-b border-red-200 hover:bg-red-100",children:[e("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:e("div",{className:"flex items-center",children:e("span",{className:"font-medium",children:t.bread_name})})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.beginning??0})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.new_production??0})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.charge??0})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.overs??0})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.total??0})}),e("td",{className:"py-3 px-6 text-left",children:t.new_production==0&&t.sellerid==l.id?e("span",{className:"bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs",children:"Done"}):e("span",{className:"bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs",children:"Pending"})}),e("td",{className:"py-3 px-6 text-left",children:i("div",{className:"flex",children:[e(c,{account:l,data:t}),e(n,{account:l,data:t})]})})]},r))})]})})}export{R as default};