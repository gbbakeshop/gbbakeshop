import{r,j as l,a as e,i as d,l as h,g as C}from"./app-46232a11.js";import{g as b,b as x}from"./ingredients-services-ac6e3043.js";import{I as w}from"./input-6c82e017.js";import{u as y}from"./useDispatch-f35e2f52.js";function _({selectedid:c}){const o=r.useRef(),[s,u]=r.useState([]),[f,i]=r.useState(!1),a=y();r.useEffect(()=>{b().then(t=>{u(t.status)})},[]);async function m(t){t.preventDefault(),i(!0);const n=new FormData(o.current),p={raw_materials_id:c,token:n.get("token"),quantity:n.get("quantity")};setTimeout(async()=>{const g=await x(p);a(d(g)),setTimeout(()=>{i(!1),a(h(!1)),a(C()),a(d([]))},2e3)},1e3)}return l("form",{name:"form",ref:o,onSubmit:m,className:"flex flex-col h-full w-full",children:[l("div",{className:"flex-1",children:["SELECT CODE",e("select",{name:"token",required:!0,className:" appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",children:s==null?void 0:s.map((t,n)=>e("option",{value:t.selected_ingredients_token,children:t.code},n))}),e(w,{name:"quantity",title:"Quantity",placeholder:"Enter Grams",type:"number"})]}),f?e("button",{disabled:!0,className:"flex-none w-full items-center align-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:e("center",{children:l("svg",{"aria-hidden":"true",className:"align-center justify-center w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})})}):e("button",{className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"ADD INGREDIENTS"})]})}export{_ as default};
