import{r as s,a as e,j as i}from"./app-78341254.js";import"./moment-e4ef00d7.js";import n from"./move-to-sales-report-form-99becf43.js";import c from"./branch-bread-report-edit-aa792199.js";import"./x-mark-icon-6f305442.js";import"./input-9e384f12.js";import"./records-services-fe504d0d.js";import"./move-icon-92559986.js";import"./useDispatch-ed1aaa2e.js";import"./transition-d6311da9.js";import"./open-closed-12574650.js";import"./dialog-524c6794.js";import"./keyboard-96d205eb.js";import"./hidden-87301ad0.js";import"./pencil-icon-a5911282.js";function R({account:l,data:r}){return s.useState([]),e("div",{className:" my-6",children:i("table",{className:"min-w-max w-full table-auto",children:[e("thead",{children:e("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:[{title:"Name of Bread"},{title:"Beginning"},{title:"New Production"},{title:"Charges"},{title:"Over"},{title:"Total"},{title:"Status"},{title:"Actions"}].map((t,a)=>e("th",{className:"py-3 px-6 text-left",children:t.title},a))})}),e("tbody",{className:"text-gray-600 text-sm font-light",children:r==null?void 0:r.map((t,a)=>i("tr",{className:"border-b border-red-200 hover:bg-red-100",children:[e("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:e("div",{className:"flex items-center",children:e("span",{className:"font-medium",children:t.bread_name})})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.beginning??0})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.new_production??0})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.charge??0})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.overs??0})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.total??0})}),e("td",{className:"py-3 px-6 text-left",children:t.new_production==0&&t.sellerid==l.id?e("span",{className:"bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs",children:"Done"}):e("span",{className:"bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs",children:"Pending"})}),e("td",{className:"py-3 px-6 text-left",children:i("div",{className:"flex",children:[e(c,{account:l,data:t}),e(n,{account:l,data:t})]})})]},a))})]})})}export{R as default};
