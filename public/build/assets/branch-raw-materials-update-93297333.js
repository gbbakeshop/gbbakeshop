import{r as i,u as p,n as g,j as n,a as e,F as f}from"./app-471bb704.js";import{u}from"./useDispatch-2468cd42.js";import x from"./branch-raw-materials-update-form-d59d4c84.js";import"./input-60c4323a.js";import"./raw-materials-services-0f0c6253.js";function w({data:o,content:t,title:d,icons:l,width:h}){const[r,a]=i.useState(!1),{isReset:s}=p(m=>m.app),c=u();return i.useEffect(()=>{c(g(r))},[r]),i.useEffect(()=>{s||a(!1)},[s]),n("div",{children:[e("div",{onClick:()=>a(!r),children:l}),r&&n("div",{id:"drawer-right-example",className:`${r?"flex flex-col":"hidden"} ${h??"w-96"}  shadow-2xl fixed top-0 right-0 z-40 h-[100vh] p-4 overflow-y-auto transition-transform bg-white  dark:bg-gray-800`,children:[e("h5",{id:"drawer-right-label",className:" mb-4 text-base font-semibold text-gray-500 dark:text-gray-400",children:d}),e("button",{onClick:()=>a(!r),type:"button","data-drawer-hide":"drawer-right-example","aria-controls":"drawer-right-example",className:"border border-red-500 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white",children:e("svg",{className:"w-3 h-3 text-red-600","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})})}),r&&t]})]})}function M({data:o,icons:t}){return e(f,{children:e(w,{content:e(x,{data:o}),title:"Edit Raw Materials",icons:t})})}export{M as default};