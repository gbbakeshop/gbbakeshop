import{r as t,u as y,j as a,F as w,a as e,i as c,n as N,o as F}from"./app-471bb704.js";import{X as T}from"./x-mark-icon-2b3a3df3.js";import{P as E}from"./pencil-icon-607cca7f.js";import{I as m}from"./input-60c4323a.js";import{u as D}from"./breads-services-eaafd33a.js";import{u as R}from"./useDispatch-2468cd42.js";import{t as l}from"./transition-d2abeff0.js";import{_ as u}from"./dialog-ed4b2db6.js";import"./open-closed-cd31899c.js";import"./keyboard-27505bb6.js";import"./hidden-400fb523.js";function U({data:o}){const[x,i]=t.useState(!1),r=t.useRef(),{isReset:p}=y(n=>n.app),s=R(),[v,f]=t.useState(!1);function g(){return{status:"loading",message:"Loading..."}}t.useEffect(()=>{var n;p||(n=r==null?void 0:r.current)==null||n.reset()},[p]);function b(n){n.preventDefault(),f(!0);const d=new FormData(r.current);s(c(g()));const C={id:d.get("id"),bread_name:d.get("bread_name").toUpperCase(),price:d.get("price")};setTimeout(async()=>{const h=await D(C);s(c(h)),h.status=="success"&&(r.current.reset(),i(!1),s(N(!1))),setTimeout(()=>{f(!1),s(F()),s(c([]))},2e3)},1e3)}return a(w,{children:[e("button",{onClick:()=>i(!0),children:e(E,{})}),e(l.Root,{show:x,as:t.Fragment,children:a(u,{as:"div",className:"relative z-10",onClose:i,children:[e(l.Child,{as:t.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e("div",{className:"fixed inset-0 overflow-hidden",children:e("div",{className:"absolute inset-0 overflow-hidden",children:e("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e(l.Child,{as:t.Fragment,enter:"transform transition ease-in-out duration-500 sm:duration-700",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:a(u.Panel,{className:"pointer-events-auto relative w-screen max-w-md",children:[e(l.Child,{as:t.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4",children:a("button",{type:"button",className:"relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",onClick:()=>i(!1),children:[e("span",{className:"absolute -inset-2.5"}),e("span",{className:"sr-only",children:"Close panel"}),e(T,{className:"h-6 w-6","aria-hidden":"true"})]})})}),a("div",{className:"flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl",children:[e("div",{className:"px-4 sm:px-6",children:e(u.Title,{className:"text-base font-semibold leading-6 text-gray-900",children:"EDIT BREAD"})}),e("div",{className:"relative mt-6 flex-1 px-4 sm:px-6",children:a("form",{name:"form",ref:r,onSubmit:b,className:"flex flex-col h-full w-full",children:[a("div",{className:"flex-1",children:[e(m,{name:"id",data:o.id,title:null,placeholder:"Enter name of bread",type:"hidden"}),e(m,{name:"bread_name",data:o.bread_name,title:"Name of Bread",placeholder:"Enter name of bread",type:"text"}),e(m,{name:"price",data:o.price,title:"Price",placeholder:"Enter Price",type:"number"})]}),e("div",{className:"flex-none",children:v?e("button",{disabled:!0,className:"flex-none w-full items-center align-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:e("center",{children:a("svg",{"aria-hidden":"true",className:"align-center justify-center w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})})}):e("button",{className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"UPDATE"})})]})})]})]})})})})})]})})]})}export{U as default};
