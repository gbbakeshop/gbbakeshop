import{r as h,m as r,a as e,F as a,j as m}from"./app-755926e6.js";import{L as c}from"./loading-icon-e15b51e2.js";import{C as i}from"./calendar-icon-e1db7830.js";import{C as d}from"./check-icon-f91b710f.js";import{E as o}from"./exclamation-icon-80116cfb.js";import{a as b}from"./attendance-services-9473d538.js";function k({branchid:u}){const[x,f]=h.useState([]),[n,s]=h.useState(!1);h.useEffect(()=>{s(!0),b({branchid:u,date:r().format("L")}).then(t=>{console.log(t),s(!1),f(t)})},[]);function l(t){alert("unauthorized")}return e(a,{children:e("div",{class:"relative shadow-md sm:rounded-lg mt-5",children:m("table",{class:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400",children:m("tr",{children:[e("th",{class:"px-2 py-2 text-center border-x-2 ",children:"FULLNAME"}),e("th",{class:"px-2 py-2 text-center border-x-2 ",children:"POSITION"}),e("th",{colspan:"2",class:"px-2 py-2 text-center border-x-2 ",children:"AM"}),e("th",{colspan:"2",class:"px-2 py-2 text-center border-x-2",children:"PM"}),e("th",{colspan:"2",class:"px-2 py-2 text-center border-x-2",children:"AM"}),e("th",{colspan:"2",class:"px-2 py-2 text-center border-x-2",children:"PM"}),e("th",{class:"px-2 py-2 text-center",children:"TOTAL HOURS"})]})}),m("tbody",{children:[m("tr",{class:"bg-white border-b ",children:[e("td",{class:"px-2 py-2 text-center border-r-2"}),e("td",{class:"px-2 py-2 text-center border-r-2"}),e("td",{class:"px-2 py-2 text-center border-r-2",children:"IN"}),e("td",{class:"px-2 py-2 text-center border-r-2",children:"Out"}),e("td",{class:"px-2 py-2 text-center border-r-2",children:"IN"}),e("td",{class:"px-2 py-2 text-center border-r-2",children:"OUT"}),e("td",{class:"px-2 py-2 text-center border-r-2",children:"IN"}),e("td",{class:"px-2 py-2 text-center border-r-2",children:"OUT"}),e("td",{class:"px-2 py-2 text-center border-r-2",children:"IN"}),e("td",{class:"px-2 py-2 text-center border-r-2",children:"OUT"}),e("td",{class:"px-2 py-2 text-center border-r-2"}),e("td",{class:"px-2 py-2 text-center border-r-2"})]}),x==null?void 0:x.map((t,g)=>{var p,L;return m("tr",{class:"bg-white border-b ",children:[e("td",{class:"px-6 py-4 text-center border-r-2",children:(p=t.user)==null?void 0:p.name}),e("td",{class:"px-6 py-4 text-center border-r-2",children:(L=t.user)==null?void 0:L.position}),e("td",{class:"px-6 py-4 text-center border-r-2",children:e("center",{children:r(t.date3).format("LL")!==r().format("LL")&&t.am_in==null?e("div",{className:"text-red-500",children:e(o,{})}):r(t.date3).format("LL")==r().format("LL")&&t.am_in!==null?e("div",{className:"text-green-500",children:e(d,{})}):r(t.date3).format("LL")==r().format("LL")&&t.am_in==null?e("button",{onClick:()=>l(t.id),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:n?e(c,{}):" Time In"}):e("div",{className:"text-green-500",children:e(d,{})})})}),e("td",{class:"px-6 py-4 text-center border-r-2",children:e("center",{children:r(t.date3).format("LL")!==r().format("LL")&&t.am_out==null?e("div",{className:"text-red-500",children:e(o,{})}):r(t.date3).format("LL")==r().format("LL")&&t.am_out!==null?e("div",{className:"text-green-500",children:e(d,{})}):r(t.date3).format("LL")==r().format("LL")&&t.am_out==null?e(a,{children:t.am_in==null?e("div",{className:"text-orange-500",children:e(i,{})}):e("button",{onClick:()=>l(t.id),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:n?e(c,{}):" Time Out"})}):e("div",{className:"text-green-500",children:e(CheckIcoe,{})})})}),e("td",{class:"px-6 py-4 text-center border-r-2",children:e("center",{children:r(t.date3).format("LL")!==r().format("LL")&&t.pm_in==null?e("div",{className:"text-red-500",children:e(o,{})}):r(t.date3).format("LL")==r().format("LL")&&t.pm_in!==null?e("div",{className:"text-green-500",children:e(d,{})}):r(t.date3).format("LL")==r().format("LL")&&t.pm_in==null?e(a,{children:t.am_out==null?e("div",{className:"text-orange-500",children:e(i,{})}):e("button",{onClick:()=>l(t.id),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:n?e(c,{}):" Time In"})}):e("div",{className:"text-green-500",children:e(d,{})})})}),e("td",{class:"px-6 py-4 text-center border-r-2",children:e("center",{children:r(t.date3).format("LL")!==r().format("LL")&&t.pm_out==null?e("div",{className:"text-red-500",children:e(o,{})}):r(t.date3).format("LL")==r().format("LL")&&t.pm_out!==null?e("div",{className:"text-green-500",children:e(d,{})}):r(t.date3).format("LL")==r().format("LL")&&t.pm_out==null?e(a,{children:t.pm_in==null?e("div",{className:"text-orange-500",children:e(i,{})}):e("button",{onClick:()=>l(t.id),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:n?e(c,{}):" Time Out"})}):e("div",{className:"text-green-500",children:e(d,{})})})}),e("td",{class:"px-6 py-4 text-center border-r-2",children:e("center",{children:r(t.date3).format("LL")!==r().format("LL")&&t.am2_in==null?e("div",{className:"text-red-500",children:e(o,{})}):r(t.date3).format("LL")==r().format("LL")&&t.am2_in!==null?e("div",{className:"text-green-500",children:e(d,{})}):r(t.date3).format("LL")==r().format("LL")&&t.am2_in==null?e(a,{children:t.pm_out==null?e("div",{className:"text-orange-500",children:e(i,{})}):e("button",{onClick:()=>l(t.id),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:n?e(c,{}):" Time In"})}):e("div",{className:"text-green-500",children:e(d,{})})})}),e("td",{class:"px-6 py-4 text-center border-r-2",children:e("center",{children:r(t.date3).format("LL")!==r().format("LL")&&t.am2_out==null?e("div",{className:"text-red-500",children:e(o,{})}):r(t.date3).format("LL")==r().format("LL")&&t.am2_out!==null?e("div",{className:"text-green-500",children:e(d,{})}):r(t.date3).format("LL")==r().format("LL")&&t.am2_out==null?e(a,{children:t.am2_in==null?e("div",{className:"text-orange-500",children:e(i,{})}):e("button",{onClick:()=>l(t.id),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:n?e(c,{}):" Time Out"})}):e("div",{className:"text-green-500",children:e(d,{})})})}),e("td",{class:"px-6 py-4 text-center border-r-2",children:e("center",{children:r(t.date3).format("LL")!==r().format("LL")&&t.pm2_in==null?e("div",{className:"text-red-500",children:e(o,{})}):r(t.date3).format("LL")==r().format("LL")&&t.pm2_in!==null?e("div",{className:"text-green-500",children:e(d,{})}):r(t.date3).format("LL")==r().format("LL")&&t.pm2_in==null?e(a,{children:t.am2_out==null?e("div",{className:"text-orange-500",children:e(i,{})}):e("button",{onClick:()=>l(t.id),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:n?e(c,{}):" Time In"})}):e("div",{className:"text-green-500",children:e(d,{})})})}),e("td",{class:"px-6 py-4 text-center border-r-2",children:e("center",{children:r(t.date3).format("LL")!==r().format("LL")&&t.pm2_out==null?e("div",{className:"text-red-500",children:e(o,{})}):r(t.date3).format("LL")==r().format("LL")&&t.pm2_out!==null?e("div",{className:"text-green-500",children:e(d,{})}):r(t.date3).format("LL")==r().format("LL")&&t.pm2_out==null?e(a,{children:t.pm2_in==null?e("div",{className:"text-orange-500",children:e(i,{})}):e("button",{onClick:()=>l(t.id),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:n?e(c,{}):" Time Out"})}):e("div",{className:"text-green-500",children:e(d,{})})})}),e("td",{className:"px-6 py-4 text-center border-r-2",children:t.total}),e("td",{class:"px-6 py-4 text-center",children:r(t.date3).format("LL")})]})})]})]})})})}export{k as default};
