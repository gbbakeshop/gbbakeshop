import{q as i,u as n,a as e,j as a,p as c}from"./app-78341254.js";import d from"./create-charge-credit-26ab302d.js";import"./x-mark-icon-6f305442.js";import"./account-services-8d2922ec.js";import"./credits-services-a81581b3.js";import"./useDispatch-ed1aaa2e.js";import"./transition-d6311da9.js";import"./open-closed-12574650.js";import"./dialog-524c6794.js";import"./keyboard-96d205eb.js";import"./hidden-87301ad0.js";function v({data:t}){const{url:s}=i();return s.split("/")[2],n(l=>l.app),e("div",{className:"w-full",children:a("div",{className:"",children:[e("div",{className:"sm:flex items-center justify-between",children:e(d,{})}),e("div",{className:"mt-7 overflow-x-auto",children:e("table",{className:"w-full whitespace-nowrap",children:a("tbody",{children:[a("tr",{tabIndex:"0",className:"focus:outline-none h-8 border border-gray-300 rounded",children:[e("td",{className:"",children:a("div",{className:"flex",children:[e("div",{className:"ml-10"}),e("div",{className:"flex items-center pl-5",children:e("p",{className:"text-base font-medium leading-none text-gray-700 mr-2",children:"Name"})})]})}),e("td",{className:"pl-5",children:"Description"}),e("td",{className:"pl-5",children:"Amount"}),e("td",{className:"pl-5",children:"Status"}),e("td",{className:"pl-5",children:"Type"}),e("td",{className:"pl-5",children:"Date"})]}),t.map((l,r)=>a("tr",{tabIndex:"0",className:"focus:outline-none h-8 border border-gray-300 rounded",children:[e("td",{className:"",children:a("div",{className:"flex",children:[e("div",{className:"ml-5",children:e("div",{className:"bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative",children:e("input",{placeholder:"checkbox",type:"checkbox",className:"focus:opacity-100 checkbox opacity-0 absolute cursor-pointer w-full h-full"})})}),e("div",{className:"flex items-center pl-5",children:e("p",{className:"text-base font-medium leading-none text-gray-700 mr-2",children:l.user.name})})]})}),e("td",{className:"pl-5",children:l.discription}),a("td",{className:"pl-5",children:["₱ ",l.amount]}),e("td",{className:"pl-5",children:l.status?e("span",{className:"inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20",children:l.status}):e("span",{className:"inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10",children:"Unpaid"})}),e("td",{className:"pl-5",children:l.type}),e("td",{className:"pl-5",children:c(l.created_at).format("LLL")})]},r))]})})})]})})}export{v as default};
