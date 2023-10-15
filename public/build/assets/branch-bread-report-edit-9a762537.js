import{q as p,r as i,j as s,a as e,i as d,g as b,h as w}from"./app-f46303a7.js";import{I as n}from"./input-4b248597.js";import{b as x}from"./records-services-77202558.js";import{u as C}from"./useDispatch-3d836920.js";function E({data:r}){const{url:c}=p(),[u,m]=i.useState(!1),o=i.useRef(),a=C();c.split("/")[2];async function g(f){f.preventDefault();const t=new FormData(o.current),h={id:r.id,new_production:t.get("new_production"),beginning:t.get("beginning"),charge:t.get("charge"),remarks:t.get("remarks"),overs:t.get("overs")},l=await x(h);a(d(l)),l.status=="success"&&(o.current.reset(),a(b(!1))),setTimeout(()=>{m(!1),a(w()),a(d([]))},2e3)}return s("form",{name:"form",ref:o,onSubmit:g,className:"flex flex-col h-full w-full",children:[s("div",{className:"flex-1",children:[e(n,{data:r.beginning??0,name:"beginning",title:"Beginning",placeholder:"Enter beginning",type:"number"}),e(n,{data:r.new_production??0,name:"new_production",title:"New Production",placeholder:"Enter new production",type:"number"}),e(n,{data:r.charge??0,name:"charge",title:"Charge",placeholder:"Enter charge",type:"number"}),e(n,{data:r.overs??0,name:"overs",title:"Over",placeholder:"Enter over",type:"number"}),e("label",{htmlFor:"message",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Your remarks"}),e("textarea",{name:"remarks",id:"message",rows:"4",className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500",placeholder:"Write your thoughts here..."})]}),u?e("button",{disabled:!0,className:"flex-none w-full items-center align-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:e("center",{children:s("svg",{"aria-hidden":"true",className:"align-center justify-center w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})})}):e("button",{className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"MOVE"})]})}export{E as default};
