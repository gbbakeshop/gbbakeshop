import{r as s,a as e,j as l}from"./app-12ee0023.js";import m from"./recipes-add-ingredients-d6fe9001.js";import c from"./recipes-show-ingredients-fb4b78b0.js";import"./ingredients-services-2bf3497b.js";import"./x-mark-icon-ec6a3a39.js";import"./pencil-icon-ba785fe0.js";import"./useDispatch-ae7a9313.js";import"./transition-26b02c88.js";import"./open-closed-50b612ea.js";import"./dialog-743a8223.js";import"./keyboard-886e0771.js";import"./eyes-icon-13262a2c.js";function R({data:r}){return s.useState([]),e("div",{className:"bg-white shadow-md rounded my-6",children:l("table",{className:"min-w-max w-full table-auto",children:[e("thead",{children:e("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:[{title:"Name of Bread"},{title:"Target"},{title:"Status"},{title:"Actions"}].map((t,a)=>e("th",{className:"py-3 px-6 text-left",children:t.title},a))})}),e("tbody",{className:"text-gray-600 text-sm font-light",children:r==null?void 0:r.map((t,a)=>l("tr",{className:"border-b border-gray-200 hover:bg-gray-100",children:[e("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:e("div",{className:"flex items-center",children:e("div",{className:"grid grid-rows-2 grid-flow-col gap-1",children:t==null?void 0:t.selected_breads.map((i,d)=>e("div",{className:"flex-auto text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-red-50 border border-red-50 text-red-500 rounded",children:i.bread_name},d))})})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.target??0})}),e("td",{className:"py-3 px-6 text-left",children:e("span",{className:"bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs",children:"Baker"})}),e("td",{className:"py-3 px-6 text-left",children:l("div",{className:"flex",children:[e("div",{className:"w-4 mr-6 ",children:t.raw_materials==null?e(c,{data:t}):"YES RM"}),e("div",{className:"w-4 mr-2  ",children:e(m,{data:t})})]})})]},a))})]})})}export{R as default};
