import{r as a,j as t,F as w,a as e,c,p as C,i as N}from"./app-1c369c91.js";import{X as F}from"./x-mark-icon-643dcf46.js";import{P as T}from"./plus-icon-f9df200b.js";import{b as D}from"./ingredients-services-f15e276e.js";import{I as k}from"./input-1fe27915.js";import{u as R}from"./useDispatch-615f4d2a.js";import{t as s}from"./transition-f4441d24.js";import{_ as d}from"./dialog-a14cea3c.js";import"./open-closed-9458169d.js";import"./keyboard-8934977f.js";import"./hidden-f15b4249.js";function G({selectedid:p,data:h,ingredients:i}){const[x,r]=a.useState(!1),m=a.useRef(),[g,u]=a.useState(!1),n=R();function v(){return{status:"loading",message:"Loading..."}}async function y(o){o.preventDefault(),u(!0),n(c(v()));const l=new FormData(m.current),b={raw_materials_id:p,token:l.get("token"),quantity:l.get("quantity")};setTimeout(async()=>{const f=await D(b);n(c(f)),console.log("create",f),r(!1),setTimeout(()=>{u(!1),n(C(!1)),n(N()),n(c([]))},2e3)},1e3)}return t(w,{children:[e("button",{className:"text-green-500 mr-6",onClick:()=>r(!0),children:e(T,{})}),e(s.Root,{show:x,as:a.Fragment,children:t(d,{as:"div",className:"relative z-10",onClose:r,children:[e(s.Child,{as:a.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e("div",{className:"fixed inset-0 overflow-hidden",children:e("div",{className:"absolute inset-0 overflow-hidden",children:e("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e(s.Child,{as:a.Fragment,enter:"transform transition ease-in-out duration-500 sm:duration-700",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:t(d.Panel,{className:"pointer-events-auto relative w-screen max-w-md",children:[e(s.Child,{as:a.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4",children:t("button",{type:"button",className:"relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",onClick:()=>r(!1),children:[e("span",{className:"absolute -inset-2.5"}),e("span",{className:"sr-only",children:"Close panel"}),e(F,{className:"h-6 w-6","aria-hidden":"true"})]})})}),t("div",{className:"flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl",children:[e("div",{className:"px-4 sm:px-6",children:t(d.Title,{className:"text-base font-semibold leading-6 text-gray-900",children:["ADD RAW MATERIALS (",h.raw_materials,")"]})}),e("div",{className:"relative mt-6 flex-1 px-4 sm:px-6",children:t("form",{name:"form",ref:m,onSubmit:y,className:"flex flex-col h-full w-full",children:[t("div",{className:"flex-1",children:["SELECT CODE",e("select",{name:"token",required:!0,className:" appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",children:i==null?void 0:i.map((o,l)=>e("option",{value:o.selected_ingredients_token,children:o.code},l))}),e(k,{name:"quantity",title:"Quantity",placeholder:"Enter Grams",type:"number"})]}),g?e("button",{disabled:!0,className:"flex-none w-full items-center align-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:e("center",{children:t("svg",{"aria-hidden":"true",className:"align-center justify-center w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})})}):e("button",{className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"ADD INGREDIENTS"})]})})]})]})})})})})]})})]})}export{G as default};
