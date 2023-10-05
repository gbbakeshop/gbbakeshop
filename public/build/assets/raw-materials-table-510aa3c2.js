import{r as f,j as a,a as e}from"./app-46232a11.js";import{m as p}from"./moment-864b3c0f.js";import{a as h}from"./index.esm-81514a8d.js";import{b as g}from"./index.esm-eaae5888.js";import{D as x}from"./drawer-3eb8cab9.js";import w from"./raw-materials-form-e70244e2.js";import y from"./raw-materials-edit-7353e658.js";import{A as n}from"./action-drawer-8d3db162.js";import N from"./raw-materials-delete-ecf57fae.js";import b from"./raw-materials-create-2b3f6361.js";import k from"./raw-materials-add-ef1d6185.js";import"./iconBase-b4a26522.js";import"./useDispatch-f35e2f52.js";import"./input-6c82e017.js";import"./ingredients-services-ac6e3043.js";import"./raw-materials-services-809441ac.js";import"./sweetalert2.all-18c37c4d.js";function $({data:l}){const[r,d]=f.useState([]);function s(t){return r.find(i=>i===t)}function c(t){if(s(t)==null)d([...r,t]);else{const o=r.filter(m=>m!==t);d(o)}}return a("div",{className:"bg-white container mx-auto mt-5 rounded-lg overflow-hidden shadow-lg p-10",children:[a("div",{className:"flex flex-row w-full",children:[e("div",{className:"flex-1",children:r.length!==0&&e(x,{title:"CREATE INGREDIENTS",content:e(w,{selected:r,data:l})})}),e("div",{className:"flex-none",children:e(x,{title:"CREATE RAW MATERIALS",content:e(b,{})})})]}),a("table",{className:"w-full ",children:[e("thead",{children:a("tr",{className:"flex flex-row border-b border-slate-300",children:[e("th",{className:"flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:e("input",{disabled:!0,type:"checkbox",className:"bg-gray-500 form-checkbox h-5 w-5 text-red-600"})}),e("th",{className:" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:"Name of Raw Materials"}),e("th",{className:" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:"Bind"}),e("th",{className:" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:"Created At"}),e("th",{className:" flex-0 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:"Add"}),e("th",{className:" flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:"Edit"}),e("th",{className:" flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:"Delete"})]})}),e("tbody",{className:"text-gray-500  font-normal",children:l==null?void 0:l.map((t,i)=>a("tr",{className:`${s(t.id)==null?" border-b border-slate-200 ":"bg-gray-100 border-l-2 border-red-500"} flex flex-row my-1`,children:[e("td",{className:"flex-none px-6 py-2 whitespace-no-wrap ",children:e("input",{onClick:()=>c(t.id),type:"checkbox",className:`${s(t.id)==null?"":"border-red-500 border bg-red-500 text-red-500"}  form-checkbox h-5 w-5`})}),e("td",{className:" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:t.raw_materials}),e("td",{className:" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:t.bind}),e("td",{className:" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:p(t.created_at).format("LL")}),e("td",{className:" flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:e(n,{icons:e(g,{className:"text-2xl text-blue-600"}),title:"ADD INGREDIENTS",content:e(k,{selectedid:t.id,data:t})})}),e("td",{className:" flex-none px-8 py-3 text-left text-sm  text-gray-600 tracking-wider",children:e(n,{icons:e(h,{className:"text-2xl text-blue-600"}),title:"EDIT RAW MATERIALS",content:e(y,{data:t})})}),e("td",{className:" flex-none px-8 py-2 text-left text-sm  text-gray-600 tracking-wider",children:e(N,{data:t})})]},i))})]})]})}export{$ as default};
