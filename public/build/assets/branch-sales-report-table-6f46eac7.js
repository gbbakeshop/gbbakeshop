import{r as o,u as n,a as l,j as r}from"./app-f46303a7.js";import"./moment-3b5526b7.js";import p from"./branch-sales-report-edit-80b36978.js";import{A as d}from"./action-drawer-022de936.js";import{E as m}from"./edit-icon-882d0c58.js";import"./input-4b248597.js";import"./records-services-77202558.js";import"./useDispatch-3d836920.js";function w({data:a,account:i}){o.useState([]);const{isSideBar:s}=n(e=>e.app),c=[{title:"Name of Bread",total:"Total: "},{title:"Beginning",total:a.reduce((e,t)=>e+parseFloat(t.beginning),0)},{title:"New Production",total:a.reduce((e,t)=>e+parseFloat(t.new_production==null?0:t.new_production),0)},{title:"Price",total:a.reduce((e,t)=>e+parseFloat(t.price),0)},{title:"Total",total:a.reduce((e,t)=>e+parseFloat(t.total),0)},{title:"Breadout",total:a.reduce((e,t)=>e+parseFloat(t.bread_out),0)},{title:"Charges",total:a.reduce((e,t)=>e+t.charge==""?0:parseFloat(t.charge),0)},{title:"Over",total:a.reduce((e,t)=>e+parseFloat(t.overs),0)},{title:"Remaining",total:a.reduce((e,t)=>e+parseFloat(t.remaining),0)},{title:"Soldout",total:a.reduce((e,t)=>e+parseFloat(t.soldout),0)},{title:"Sales",total:a.reduce((e,t)=>e+parseFloat(t.price)*parseFloat(t.soldout),0)},{title:"Actions",total:" "}];return l("div",{className:" bg-white shadow-md rounded my-6 ",children:r("table",{className:"min-w-max w-full table-auto",children:[r("thead",{children:[l("tr",{className:" bg-red-500 text-white uppercase text-sm leading-normal",children:c.map((e,t)=>l("th",{className:"py-3 px-6 text-left",children:e.total},t))}),l("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:c.map((e,t)=>l("th",{className:"py-3 px-6 text-left",children:e.title},t))})]}),r("tbody",{className:"text-gray-600 text-sm font-light",children:[a==null?void 0:a.map((e,t)=>r("tr",{className:"border-b border-gray-200 hover:bg-gray-100",children:[l("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:l("div",{className:"flex items-center",children:e.bread_name})}),l("td",{className:"py-3 px-6 text-left",children:e.beginning}),l("td",{className:"py-3 px-6 text-left",children:e.new_production}),l("td",{className:"py-3 px-6 text-left",children:e.price}),l("td",{className:"py-3 px-6 text-left",children:e.total}),l("td",{className:"py-3 px-6 text-left",children:e.bread_out}),l("td",{className:"py-3 px-6 text-left",children:e.charge}),l("td",{className:"py-3 px-6 text-left",children:e.overs}),l("td",{className:"py-3 px-6 text-left",children:e.remaining}),l("td",{className:"py-3 px-6 text-left",children:e.soldout}),l("td",{className:"py-3 px-6 text-left",children:e.sales}),l("td",{className:"py-3 px-6 text-left",children:l("div",{className:"flex",children:l(d,{icons:l("div",{className:"w-4 mr-2 text-blue-500",children:l(m,{})}),title:"EDIT SALES REPORT",content:l(p,{account:i,data:e})})})})]},t)),l("tr",{className:" bg-red-500 text-white uppercase text-sm leading-normal",children:c.map((e,t)=>l("td",{className:"py-3 px-6 text-left",children:e.total},t))})]})]})})}export{w as default};
