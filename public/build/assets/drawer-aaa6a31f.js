import{r as s,g as d,j as t,a as r}from"./app-f46303a7.js";import{u as l}from"./useDispatch-3d836920.js";function g({content:n,title:a}){const[e,o]=s.useState(!1),i=l();return s.useEffect(()=>{i(d(e))},[e]),t("div",{children:[r("button",{onClick:()=>o(!e),className:"bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",children:a}),t("div",{id:"drawer-right-example",className:`${e?"flex flex-col":"hidden"} shadow-2xl fixed top-0 right-0 z-40 h-[100vh] p-4 overflow-y-auto transition-transform bg-white w-96 dark:bg-gray-800`,children:[r("h5",{id:"drawer-right-label",className:" mb-4 text-base font-semibold text-gray-500 dark:text-gray-400",children:a}),t("button",{onClick:()=>o(!e),type:"button","data-drawer-hide":"drawer-right-example","aria-controls":"drawer-right-example",className:"border border-red-500 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white",children:[r("svg",{className:"w-3 h-3 text-red-600","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:r("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),r("span",{className:"sr-only",children:"Close menu"})]}),n]})]})}export{g as D};