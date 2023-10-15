import{r as f,j as i,a as e}from"./app-f46303a7.js";import{m as h}from"./moment-3b5526b7.js";import N from"./branch-bakers-report-edit-6f766b59.js";import{D as b}from"./drawer-aaa6a31f.js";import{A as s}from"./action-drawer-022de936.js";import u from"./move-to-bread-report-form-49f48773.js";import v from"./move-to-another-branch-f20314ad.js";import{E}from"./edit-icon-882d0c58.js";import{T as g}from"./transfer-icon-69edc633.js";import"./input-4b248597.js";import"./records-services-77202558.js";import"./useDispatch-3d836920.js";import"./branches-services-95ce5ec1.js";function F({data:l,branchid:n}){const[r,c]=f.useState([]);function o(t){return r.find(a=>a===t)}function d(t){if(o(t)==null)c([...r,t]);else{const p=r.filter(x=>x!==t);c(p)}}const m=[{title:"Name of Bread"},{title:"New Production"},{title:"Date Created"},{title:"Actions"}];return i("div",{className:"bg-white shadow-md rounded my-6 p-4",children:[r.length!==0&&e(b,{title:"MOVE TO ANOTHER BRANCH",content:e(v,{branchid:n,setSelected:c,selected:r})}),i("table",{className:"min-w-max w-full table-auto",children:[e("thead",{children:e("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:m.map((t,a)=>e("th",{className:"py-3 px-6 text-left",children:t.title},a))})}),e("tbody",{className:"text-gray-600 text-sm font-light",children:l==null?void 0:l.map((t,a)=>i("tr",{className:`${o(t.id)==null?" border-b border-slate-200 ":"bg-gray-100 border-l-2 border-red-500"} border-gray-200 hover:bg-gray-100`,children:[e("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:i("div",{className:"flex items-center",children:[e("div",{className:"mr-2",children:e("input",{checked:o(t.id)!=null,onClick:()=>d(t.id),type:"checkbox",className:`${o(t.id)==null?"":"border-red-500 border bg-red-500 text-red-500"}  form-checkbox`})}),e("span",{className:"font-medium",children:t.bread_name})]})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.new_production})}),e("td",{className:"py-3 px-6 text-left",children:h(t.created_at).format("LLLL")}),e("td",{className:"py-3 px-6 text-left",children:i("div",{className:"flex",children:[e(s,{icons:e("div",{className:"w-4 mr-2 text-blue-500",children:e(E,{})}),title:"EDIT NEW PRODUCTION",content:e(N,{className:"text-2xl text-blue-600",data:t})}),e(s,{icons:e("div",{className:"w-4 mr-2 text-green-500",children:e(g,{})}),title:"TRANSFER TO BREAD REPORT",content:e(u,{branchid:n,data:t})})]})})]}))})]})]})}export{F as default};
