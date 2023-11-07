import{q as c,r as g,s as u,j as s,a as r,d as t,u as b}from"./app-a5f44683.js";import{S as h,a as p,L as f,T as m}from"./squire-icon-743c4ee5.js";import{S as y}from"./store-icon-5a5cb3f1.js";import{g as x}from"./branches-services-2bfde4dd.js";import{D as k}from"./database-icon-901cc323.js";import{u as v}from"./useDispatch-7d9112c0.js";function N({position:a,branchid:n}){const d=v(),{url:o}=c(),e=o.split("/")[2];o.split("/")[3],g.useEffect(()=>{x().then(l=>{d(u(l))})},[]);const i=a=="Chief Baker"||a=="Baker"||a=="Lamasador"||a=="Hornero"?route("b_bread_production"):a=="Sales Lady"||a=="Cashier"?route("b_bakers_report"):route("b_bread_production");return s("div",{className:"flex  border-r flex-col items-center w-16 h-screen py-8 space-y-8 dark:bg-gray-900 dark:border-gray-700",children:[r(t,{href:route("b_dashboard"),className:`${e=="dashboard"?"p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800":"p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"} `,children:r(y,{})}),r(t,{href:route("b_raw_materials"),className:`${e=="raw-materials"?"p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800":"p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"} `,children:r(h,{})}),r(t,{href:i,className:`${e=="bakers-production"||e=="bakers-report"||e=="bread-report"||e=="sales-report"||e=="bread-production"||e=="history"||e=="accounts"?"p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800":"p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"} `,children:r(k,{})}),r(t,{href:route("b_settings"),className:`${e=="settings"||e=="expenses"||e=="logs"?"p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800":"p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"} `,children:r(p,{})}),r(t,{method:"post",href:route("logout"),className:`${e=="logout"?"p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800":"p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"} `,children:r(f,{})})]})}function $({children:a,position:n,branchid:d}){const{setResponse:o}=b(e=>e.app);return r("div",{className:"bg-white",children:s("div",{className:"relative isolate",children:[r("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl","aria-hidden":"true",children:r("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),s("aside",{className:"flex",children:[s("div",{children:[r(N,{branchid:d,position:n}),r(m,{response:o})]}),r("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:a})]})]})})}export{$ as B};