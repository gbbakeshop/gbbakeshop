import{r as d,j as t,a as e,d as i,q as g,R as b,F as v,u as y,b as w}from"./app-76f8ddb2.js";import{G as N}from"./iconBase-10c7e9e0.js";import{g as k}from"./branches-services-70c13135.js";import{Q as p,k as L}from"./ReactToastify-8573b083.js";function H(){const[a,r]=d.useState(!1);return t("div",{className:"relative inline-block text-left",children:[t("button",{onClick:()=>r(!a),type:"button",className:" mt-1 relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",id:"user-menu-button","aria-expanded":"false","aria-haspopup":"true",children:[e("span",{className:"absolute -inset-1.5"}),e("span",{className:"sr-only",children:"Open user menu"}),e("img",{className:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""})]}),e("div",{className:`${a?"":"hidden"} absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`,role:"menu",children:t("div",{className:"py-1",children:[e(i,{href:route("profile.edit"),className:"text-gray-700 block px-4 py-2 text-sm",children:"Account settings"}),e("a",{href:"#",className:"text-gray-700 block px-4 py-2 text-sm",children:"Support"}),e("a",{href:"#",className:"text-gray-700 block px-4 py-2 text-sm",children:"License"}),e(i,{method:"post",href:route("logout"),className:"text-gray-700 block w-full px-4 py-2 text-left text-sm",children:"Sign out"})]})})]})}function V(a){return N({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M2.8 1L2.74967 0.99997C2.52122 0.999752 2.32429 0.999564 2.14983 1.04145C1.60136 1.17312 1.17312 1.60136 1.04145 2.14983C0.999564 2.32429 0.999752 2.52122 0.99997 2.74967L1 2.8V5.2L0.99997 5.25033C0.999752 5.47878 0.999564 5.67572 1.04145 5.85017C1.17312 6.39864 1.60136 6.82688 2.14983 6.95856C2.32429 7.00044 2.52122 7.00025 2.74967 7.00003L2.8 7H5.2L5.25033 7.00003C5.47878 7.00025 5.67572 7.00044 5.85017 6.95856C6.39864 6.82688 6.82688 6.39864 6.95856 5.85017C7.00044 5.67572 7.00025 5.47878 7.00003 5.25033L7 5.2V2.8L7.00003 2.74967C7.00025 2.52122 7.00044 2.32429 6.95856 2.14983C6.82688 1.60136 6.39864 1.17312 5.85017 1.04145C5.67572 0.999564 5.47878 0.999752 5.25033 0.99997L5.2 1H2.8ZM2.38328 2.01382C2.42632 2.00348 2.49222 2 2.8 2H5.2C5.50779 2 5.57369 2.00348 5.61672 2.01382C5.79955 2.05771 5.94229 2.20045 5.98619 2.38328C5.99652 2.42632 6 2.49222 6 2.8V5.2C6 5.50779 5.99652 5.57369 5.98619 5.61672C5.94229 5.79955 5.79955 5.94229 5.61672 5.98619C5.57369 5.99652 5.50779 6 5.2 6H2.8C2.49222 6 2.42632 5.99652 2.38328 5.98619C2.20045 5.94229 2.05771 5.79955 2.01382 5.61672C2.00348 5.57369 2 5.50779 2 5.2V2.8C2 2.49222 2.00348 2.42632 2.01382 2.38328C2.05771 2.20045 2.20045 2.05771 2.38328 2.01382ZM9.8 1L9.74967 0.99997C9.52122 0.999752 9.32429 0.999564 9.14983 1.04145C8.60136 1.17312 8.17312 1.60136 8.04145 2.14983C7.99956 2.32429 7.99975 2.52122 7.99997 2.74967L8 2.8V5.2L7.99997 5.25033C7.99975 5.47878 7.99956 5.67572 8.04145 5.85017C8.17312 6.39864 8.60136 6.82688 9.14983 6.95856C9.32429 7.00044 9.52122 7.00025 9.74967 7.00003L9.8 7H12.2L12.2503 7.00003C12.4788 7.00025 12.6757 7.00044 12.8502 6.95856C13.3986 6.82688 13.8269 6.39864 13.9586 5.85017C14.0004 5.67572 14.0003 5.47878 14 5.25033L14 5.2V2.8L14 2.74967C14.0003 2.52122 14.0004 2.32429 13.9586 2.14983C13.8269 1.60136 13.3986 1.17312 12.8502 1.04145C12.6757 0.999564 12.4788 0.999752 12.2503 0.99997L12.2 1H9.8ZM9.38328 2.01382C9.42632 2.00348 9.49222 2 9.8 2H12.2C12.5078 2 12.5737 2.00348 12.6167 2.01382C12.7995 2.05771 12.9423 2.20045 12.9862 2.38328C12.9965 2.42632 13 2.49222 13 2.8V5.2C13 5.50779 12.9965 5.57369 12.9862 5.61672C12.9423 5.79955 12.7995 5.94229 12.6167 5.98619C12.5737 5.99652 12.5078 6 12.2 6H9.8C9.49222 6 9.42632 5.99652 9.38328 5.98619C9.20045 5.94229 9.05771 5.79955 9.01382 5.61672C9.00348 5.57369 9 5.50779 9 5.2V2.8C9 2.49222 9.00348 2.42632 9.01382 2.38328C9.05771 2.20045 9.20045 2.05771 9.38328 2.01382ZM2.74967 7.99997L2.8 8H5.2L5.25033 7.99997C5.47878 7.99975 5.67572 7.99956 5.85017 8.04145C6.39864 8.17312 6.82688 8.60136 6.95856 9.14983C7.00044 9.32429 7.00025 9.52122 7.00003 9.74967L7 9.8V12.2L7.00003 12.2503C7.00025 12.4788 7.00044 12.6757 6.95856 12.8502C6.82688 13.3986 6.39864 13.8269 5.85017 13.9586C5.67572 14.0004 5.47878 14.0003 5.25033 14L5.2 14H2.8L2.74967 14C2.52122 14.0003 2.32429 14.0004 2.14983 13.9586C1.60136 13.8269 1.17312 13.3986 1.04145 12.8502C0.999564 12.6757 0.999752 12.4788 0.99997 12.2503L1 12.2V9.8L0.99997 9.74967C0.999752 9.52122 0.999564 9.32429 1.04145 9.14983C1.17312 8.60136 1.60136 8.17312 2.14983 8.04145C2.32429 7.99956 2.52122 7.99975 2.74967 7.99997ZM2.8 9C2.49222 9 2.42632 9.00348 2.38328 9.01382C2.20045 9.05771 2.05771 9.20045 2.01382 9.38328C2.00348 9.42632 2 9.49222 2 9.8V12.2C2 12.5078 2.00348 12.5737 2.01382 12.6167C2.05771 12.7995 2.20045 12.9423 2.38328 12.9862C2.42632 12.9965 2.49222 13 2.8 13H5.2C5.50779 13 5.57369 12.9965 5.61672 12.9862C5.79955 12.9423 5.94229 12.7995 5.98619 12.6167C5.99652 12.5737 6 12.5078 6 12.2V9.8C6 9.49222 5.99652 9.42632 5.98619 9.38328C5.94229 9.20045 5.79955 9.05771 5.61672 9.01382C5.57369 9.00348 5.50779 9 5.2 9H2.8ZM9.8 8L9.74967 7.99997C9.52122 7.99975 9.32429 7.99956 9.14983 8.04145C8.60136 8.17312 8.17312 8.60136 8.04145 9.14983C7.99956 9.32429 7.99975 9.52122 7.99997 9.74967L8 9.8V12.2L7.99997 12.2503C7.99975 12.4788 7.99956 12.6757 8.04145 12.8502C8.17312 13.3986 8.60136 13.8269 9.14983 13.9586C9.32429 14.0004 9.52122 14.0003 9.74967 14L9.8 14H12.2L12.2503 14C12.4788 14.0003 12.6757 14.0004 12.8502 13.9586C13.3986 13.8269 13.8269 13.3986 13.9586 12.8502C14.0004 12.6757 14.0003 12.4788 14 12.2503L14 12.2V9.8L14 9.74967C14.0003 9.52122 14.0004 9.32429 13.9586 9.14983C13.8269 8.60136 13.3986 8.17312 12.8502 8.04145C12.6757 7.99956 12.4788 7.99975 12.2503 7.99997L12.2 8H9.8ZM9.38328 9.01382C9.42632 9.00348 9.49222 9 9.8 9H12.2C12.5078 9 12.5737 9.00348 12.6167 9.01382C12.7995 9.05771 12.9423 9.20045 12.9862 9.38328C12.9965 9.42632 13 9.49222 13 9.8V12.2C13 12.5078 12.9965 12.5737 12.9862 12.6167C12.9423 12.7995 12.7995 12.9423 12.6167 12.9862C12.5737 12.9965 12.5078 13 12.2 13H9.8C9.49222 13 9.42632 12.9965 9.38328 12.9862C9.20045 12.9423 9.05771 12.7995 9.01382 12.6167C9.00348 12.5737 9 12.5078 9 12.2V9.8C9 9.49222 9.00348 9.42632 9.01382 9.38328C9.05771 9.20045 9.20045 9.05771 9.38328 9.01382Z",fill:"currentColor"}}]})(a)}function B({branchid:a}){var u,f,x;const[r,s]=d.useState([]),{url:n}=g(),o=n.split("/")[1],l=n.split("/")[2],c=n.split("/")[3];d.useEffect(()=>{k().then(h=>{s(h)})},[]);function m(h){return r.find(C=>C.id==h)}return e("nav",{className:"mb-5 shadow-sm capitalize flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700","aria-label":"Breadcrumb",children:t("ol",{className:"inline-flex items-center space-x-1 md:space-x-3",children:[e("li",{className:"inline-flex items-center",children:t("a",{href:"#",className:"inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 dark:text-gray-400 dark:hover:text-white",children:[e(V,{className:"w-4 h-4 mr-2.5"}),(u=m(a))==null?void 0:u.branch_name,"-(",o,")"]})}),e("li",{children:t("div",{className:"flex items-center",children:[e("svg",{className:"w-3 h-3 mx-1 text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeidth:"2",d:"m1 9 4-4-4-4"})}),e("a",{href:"#",className:"ml-1 text-sm font-medium text-gray-700 hover:text-red-600 md:ml-2 dark:text-gray-400 dark:hover:text-white",children:((f=m(l))==null?void 0:f.branch_name)==null?l:(x=m(l))==null?void 0:x.branch_name})]})}),e("li",{"aria-current":"page",children:t("div",{className:"flex items-center",children:[e("svg",{className:"w-3 h-3 mx-1 text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeidth:"2",d:"m1 9 4-4-4-4"})}),e("span",{className:"ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400",children:c==null?void 0:c.replace(/_/g," ")})]})})]})})}function M({response:a}){b.useRef(null),d.useEffect(()=>{a&&a.then(s=>{console.log("res.status",s.status),s.status==="loading"?r("Loading ...","loading"):s.status==="success"?r(s.message,"success"):s.status==="exist"?r(s.message,"warning"):r("Error 404","error")})},[a]);function r(s,n){const o=p.loading("Loading ...",{toastId:"id",position:"top-center"});n!=="loading"&&setTimeout(()=>{p.update(o,{render:s,autoClose:1e3,type:n,isLoading:!1})},1e3)}return e(v,{children:e(L,{})})}function j(){const{url:a}=g(),r=a.split("/")[2];return t("nav",{className:"bg-white shadow-lg",children:[e("div",{className:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8",children:t("div",{className:"relative flex h-16 items-center justify-between",children:[e("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:t("button",{type:"button",className:"relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false",children:[e("span",{className:"absolute -inset-0.5"}),e("span",{className:"sr-only",children:"Open main menu"}),e("svg",{className:"block h-6 w-6",fill:"none",viewBox:"0 0 24 24","strokeWidth":"1.5",stroke:"currentColor","aria-hidden":"true",children:e("path",{"strokeLinecap":"round","strokeLinejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})}),e("svg",{className:"hidden h-6 w-6",fill:"none",viewBox:"0 0 24 24","strokeWidth":"1.5",stroke:"currentColor","aria-hidden":"true",children:e("path",{"strokeLinecap":"round","strokeLinejoin":"round",d:"M6 18L18 6M6 6l12 12"})})]})}),t("div",{className:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-start",children:[e("div",{className:"flex flex-shrink-0 items-center",children:e("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500",alt:"Your Company"})}),e("div",{className:"hidden sm:ml-6 sm:block",children:t("div",{className:"flex space-x-4",children:[e(i,{href:route("b_dashboard"),className:`${r=="dashboard"?"bg-red-500 text-white rounded-md px-3 py-2 text-sm font-medium":"text-gray-900 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"} `,"aria-current":"page",children:"DASHBOARD"}),e(i,{href:route("b_raw_materials"),className:`${r=="raw-materials"?"bg-red-500 text-white rounded-md px-3 py-2 text-sm font-medium":"text-gray-900 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"} `,children:"RAW MATERIALS"}),e(i,{href:route("b_bread_production"),className:`${r=="bread-production"?"bg-red-500 text-white rounded-md px-3 py-2 text-sm font-medium":"text-gray-900 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"} `,children:"PRODUCTION"}),e(i,{href:route("b_selecta"),className:`${r=="selecta"?"bg-red-500 text-white rounded-md px-3 py-2 text-sm font-medium":"text-gray-900 hover:bg-gray-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"} `,children:"SELECTA"})]})})]}),t("div",{className:"absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:[t("button",{type:"button",className:"relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",children:[e("span",{className:"absolute -inset-1.5"}),e("span",{className:"sr-only",children:"View notifications"}),e("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24","strokeWidth":"1.5",stroke:"currentColor","aria-hidden":"true",children:e("path",{"strokeLinecap":"round","strokeLinejoin":"round",d:"M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"})})]}),e("div",{className:"relative ml-3",children:e(H,{})})]})]})}),e("div",{className:"sm:hidden",id:"mobile-menu",children:t("div",{className:"space-y-1 px-2 pb-3 pt-2",children:[e("a",{href:"#",className:"bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium","aria-current":"page",children:"Dashboard"}),e("a",{href:"#",className:"text-gray-900 hover:bg-gray-400 hover:text-white block rounded-md px-3 py-2 text-base font-medium",children:"Team"}),e("a",{href:"#",className:"text-gray-900 hover:bg-gray-400 hover:text-white block rounded-md px-3 py-2 text-base font-medium",children:"Projects"}),e("a",{href:"#",className:"text-gray-900 hover:bg-gray-400 hover:text-white block rounded-md px-3 py-2 text-base font-medium",children:"Calendar"})]})})]})}function S({children:a,branchid:r}){const{response:s,isSideBar:n}=y(l=>l.app);async function o(){return await s}return t("div",{className:"flex",children:[e(w,{title:"GB Bakeshop"}),e("div",{className:"flex flex-row h-screen w-screen",children:e("div",{className:"flex-1",children:t("div",{className:"flex flex-col h-full w-full",children:[e("div",{className:"flex-none",children:e(j,{})}),e("div",{className:"flex-1",children:t("main",{className:"h-[90vh] p-3 flex-1 overflow-auto",children:[s.length!==0&&e(M,{response:o()}),e(B,{branchid:r}),a]})})]})})})]})}export{S as B};
