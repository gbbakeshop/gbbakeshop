import{r as m,j as a,a as e,F as C,i as g}from"./app-46232a11.js";import{m as N}from"./moment-864b3c0f.js";import{a as k}from"./index.esm-81514a8d.js";import{D as E}from"./drawer-3eb8cab9.js";import v from"./bread-create-form-e0d843a1.js";import B from"./bread-edit-form-920b8298.js";import{A as F}from"./action-drawer-8d3db162.js";import D from"./bread-delete-c6f2816b.js";import{c as A}from"./recipes-services-c35d12ac.js";import{u as R}from"./useDispatch-f35e2f52.js";import"./iconBase-b4a26522.js";import"./input-6c82e017.js";import"./breads-services-561938ac.js";import"./sweetalert2.all-18c37c4d.js";function J({data:d}){const[l,n]=m.useState([]),[c,s]=m.useState([]),[b,f]=m.useState(!1),p=R();function i(t){return l.find(r=>r===t)}function y(t,r){if(i(t)==null)n([...l,t]),s([...c,r]);else{const o=l.filter(x=>x!==t),u=c.filter(x=>x!==r);n(o),s(u)}}async function w(){f(!0);const t=l.map((h,o)=>({bread_id:h,bread_name:c[o]})),r=await A({data:t});p(g(r)),setTimeout(()=>{p(g([])),f(!1),n([]),s([])},2e3)}return a("div",{className:"bg-white container mx-auto mt-5 rounded-lg overflow-hidden shadow-lg p-10",children:[a("div",{className:"flex flex-row w-full",children:[e("div",{className:"flex-1",children:l.length!==0&&e(C,{children:b?e("button",{disabled:!0,className:"bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",children:e("center",{children:a("svg",{"aria-hidden":"true",className:"align-center justify-center w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})})}):e("button",{onClick:w,className:"border-2 border-red-500 hover:border-red-600 text-red-500 font-bold py-2 px-4 rounded",children:"CREATE RECIPES"})})}),e("div",{className:"flex-none",children:e(E,{title:"CREATE BREAD",content:e(v,{})})})]}),a("table",{className:"w-full ",children:[e("thead",{children:a("tr",{className:"flex flex-row border-b border-slate-300",children:[e("th",{className:"flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:e("input",{disabled:!0,type:"checkbox",className:"bg-gray-500 form-checkbox h-5 w-5 text-red-600"})}),e("th",{className:" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:"Name of Bread"}),e("th",{className:" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:"Price"}),e("th",{className:" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:"Created At"}),e("th",{className:" flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:"Edit"}),e("th",{className:" flex-none px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:"Delete"})]})}),e("tbody",{className:"text-gray-500  font-normal",children:d==null?void 0:d.map((t,r)=>a("tr",{className:`${i(t.id)==null?" border-b border-slate-200 ":"bg-gray-100 border-l-2 border-red-500"} flex flex-row my-1`,children:[e("td",{className:"flex-none px-6 py-2 whitespace-no-wrap ",children:e("input",{checked:i(t.id)!==void 0,onChange:()=>y(t.id,t.bread_name),type:"checkbox",className:`${i(t.id)==null?"":"border-red-500 border bg-red-500 text-red-500"}  form-checkbox h-5 w-5`})}),e("td",{className:" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:t.bread_name}),e("td",{className:" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:t.price}),e("td",{className:" flex-1 px-6 py-3 text-left text-sm  text-gray-600 tracking-wider",children:N(t.created_at).format("LL")}),e("td",{className:" flex-none px-8 py-3 text-left text-sm  text-gray-600 tracking-wider",children:e(F,{content:e(B,{data:t}),title:"Edit Form",icons:e(k,{className:"text-xl text-blue-600"})})}),e("td",{className:" flex-none px-8 py-3 text-left text-sm  text-gray-600 tracking-wider",children:e(D,{data:t})})]},r))})]})]})}export{J as default};
