import{r as l,u as b,j as o,a as e,i,k as x,l as g}from"./app-76f8ddb2.js";import{I as d}from"./input-9eb0c910.js";import{u as w}from"./breads-services-9b50c749.js";import{u as y}from"./useDispatch-19ea45d4.js";function D({data:a}){const r=l.useRef(),{isReset:c}=b(n=>n.app),t=y(),[f,u]=l.useState(!1);function p(){return{status:"loading"}}l.useEffect(()=>{c||r.current.reset()},[c]);function h(n){n.preventDefault(),u(!0);const s=new FormData(r.current);t(i(p()));const C={id:s.get("id"),bread_name:s.get("bread_name").toUpperCase(),price:s.get("price")};setTimeout(async()=>{const m=await w(C);t(i(m)),m.status=="success"&&(r.current.reset(),t(x(!1))),setTimeout(()=>{u(!1),t(g()),t(i([]))},2e3)},1e3)}return o("form",{name:"form",ref:r,onSubmit:h,className:"flex flex-col h-full w-full",children:[o("div",{className:"flex-1",children:[e(d,{name:"id",data:a.id,title:null,placeholder:"Enter name of bread",type:"hidden"}),e(d,{name:"bread_name",data:a.bread_name,title:"Name of Bread",placeholder:"Enter name of bread",type:"text"}),e(d,{name:"price",data:a.price,title:"Price",placeholder:"Enter Price",type:"number"})]}),e("div",{className:"flex-none",children:f?e("button",{disabled:!0,className:"flex-none w-full items-center align-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:e("center",{children:o("svg",{"aria-hidden":"true",className:"align-center justify-center w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})})}):e("button",{className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"UPDATE"})})]})}export{D as default};