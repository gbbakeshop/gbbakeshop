import{r as m,a as e,j as i}from"./app-471bb704.js";import s from"./create-production-form-a4fc5182.js";import"./x-mark-icon-2b3a3df3.js";import"./plus-icon-557c1c64.js";import"./ingredients-services-08a778b4.js";import"./records-services-77202558.js";import"./input-60c4323a.js";import"./useDispatch-2468cd42.js";import"./transition-d2abeff0.js";import"./open-closed-cd31899c.js";import"./dialog-ed4b2db6.js";import"./keyboard-27505bb6.js";import"./hidden-400fb523.js";function C({data:l,branchid:d,account:n,data2:c}){return m.useState([]),e("div",{className:" my-6",children:i("table",{className:"min-w-max w-full table-auto",children:[e("thead",{children:e("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:[{title:"Name of Breads"},{title:"Target"},{title:"Warning"},{title:"Actions"}].map((t,r)=>e("th",{className:"py-3 px-6 text-left",children:t.title},r))})}),e("tbody",{className:"text-gray-600 text-sm font-light",children:l==null?void 0:l.map((t,r)=>i("tr",{className:"border-b border-gray-200 hover:bg-gray-100",children:[e("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:e("div",{className:"flex items-center",children:e("div",{className:"grid grid-rows-2 grid-flow-col gap-1",children:t==null?void 0:t.selected_breads.map((a,o)=>e("div",{className:"flex-auto  text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-red-50 border border-red-50 text-red-500 rounded",children:a==null?void 0:a.bread_name},o))})})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.target??0})}),e("td",{className:"py-3 px-6 text-left",children:(t==null?void 0:t.selected_ingredients.length)===0?e("span",{className:"bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs",children:"No Ingredients"}):e("span",{className:"bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs",children:"Good"})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex",children:e(s,{branchid:d,account:n,data:t,data2:c})})})]},r))})]})})}export{C as default};