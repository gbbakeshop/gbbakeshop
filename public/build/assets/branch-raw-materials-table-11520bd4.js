import{r as i,a as t,j as r}from"./app-f46303a7.js";import{m as s}from"./moment-3b5526b7.js";import n from"./branch-raw-materials-update-17ca4e05.js";import{E as m}from"./edit-icon-882d0c58.js";import"./action-drawer-022de936.js";import"./useDispatch-3d836920.js";import"./branch-raw-materials-update-form-8b93ee5f.js";import"./input-4b248597.js";import"./raw-materials-services-7ccf248f.js";function b({data:a}){return i.useState([]),t("div",{className:"bg-white shadow-md rounded my-6",children:r("table",{className:"min-w-max w-full table-auto",children:[t("thead",{children:t("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:[{title:"Name of Raw Materials"},{title:"Bind"},{title:"Quantity"},{title:"Status"},{title:"Created At"},{title:"Actions"}].map((e,l)=>t("th",{className:"py-3 px-6 text-left",children:e.title},l))})}),t("tbody",{className:"text-gray-600 text-sm font-light",children:a==null?void 0:a.map((e,l)=>r("tr",{className:"border-b border-gray-200 hover:bg-gray-100",children:[t("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:t("div",{className:"flex items-center",children:e.raw_materials})}),t("td",{className:"py-3 px-6 text-left",children:e.bind}),t("td",{className:"py-3 px-6 text-left",children:e.quantity}),t("td",{className:"py-3 px-6 text-left",children:e.warning<e.quantity?t("span",{className:"bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs",children:"Good"}):t("span",{className:"bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs",children:"Low Supplies"})}),t("td",{className:"py-3 px-6 text-left",children:s(e.created_at).format("LLLL")}),t("td",{className:"py-3 px-6 text-left",children:t("div",{className:"flex",children:t(n,{icons:t("div",{className:"w-4 mr-2 text-blue-500",children:t(m,{})}),data:e})})})]},l))})]})})}export{b as default};
