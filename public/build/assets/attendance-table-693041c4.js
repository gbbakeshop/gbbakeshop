import{a as t,k as _,r as u,m as n,F as d,j as h}from"./app-439bd4e4.js";import{C as l}from"./check-icon-c3db5f8d.js";import{E as c}from"./exclamation-icon-e1195478.js";import{L as o}from"./loading-icon-0145f98c.js";import{S as O}from"./sweetalert2.all-f665d82e.js";function i(){return t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:t("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})})}async function D(m){return(await _.post("/api/get_account_attendance",m)).data.status}async function S(m){return(await _.post("/api/check_attendance",m)).data}function B({userid:m,branchid:p}){const[L,v]=u.useState([]),[N,w]=u.useState(0),[r,f]=u.useState(!1);function k(e,s){const T=new Date(e,s+1,0).getDate(),y=[];for(let x=1;x<=T;x++){const A=new Date(e,s,x);y.push({date:A,dayOfMonth:x})}return y}const b=new Date,C=b.getFullYear(),I=b.getMonth(),g=k(C,I);console.log(g),u.useEffect(()=>{D({data:g,userid:m,branchid:p,date2:n().format("M Y")}).then(e=>{v(e)})},[N]);function a(e,s){f(!0),S({id:e,userid:m,branchid:p,updateWhere:s,date:n().format()}).then(M=>{w(Math.random()),O.fire({position:"top-end",icon:"success",title:"Attendance Checked",showConfirmButton:!1,timer:1500}),f(!1)})}return t(d,{children:t("div",{class:"relative shadow-md sm:rounded-lg mt-5",children:h("table",{class:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400",children:h("tr",{children:[t("th",{colspan:"2",class:"px-6 py-3 text-center border-x-2 ",children:"AM"}),t("th",{colspan:"2",class:"px-6 py-3 text-center border-x-2",children:"PM"}),t("th",{colspan:"2",class:"px-6 py-3 text-center border-x-2",children:"AM"}),t("th",{colspan:"2",class:"px-6 py-3 text-center border-x-2",children:"PM"}),t("th",{class:"px-6 py-3 text-center",children:"TOTAL HOURS"}),t("th",{class:"px-6 py-3 text-center",children:"DATE"})]})}),h("tbody",{children:[h("tr",{class:"bg-white border-b ",children:[t("td",{class:"px-6 py-4 text-center",children:"IN"}),t("td",{class:"px-6 py-4 text-center border-r-2",children:"Out"}),t("td",{class:"px-6 py-4 text-center border-r-2",children:"IN"}),t("td",{class:"px-6 py-4 text-center border-r-2",children:"OUT"}),t("td",{class:"px-6 py-4 text-center border-r-2",children:"IN"}),t("td",{class:"px-6 py-4 text-center border-r-2",children:"OUT"}),t("td",{class:"px-6 py-4 text-center border-r-2",children:"IN"}),t("td",{class:"px-6 py-4 text-center border-r-2",children:"OUT"}),t("td",{class:"px-6 py-4 text-center border-r-2"}),t("td",{class:"px-6 py-4 text-center border-r-2"})]}),L==null?void 0:L.map((e,s)=>h("tr",{class:"bg-white border-b ",children:[t("td",{class:"px-6 py-4 text-center border-r-2",children:t("center",{children:n(e.date3).format("LL")!==n().format("LL")&&e.am_in==null?t("div",{className:"text-red-500",children:t(c,{})}):n(e.date3).format("LL")==n().format("LL")&&e.am_in!==null?t("div",{className:"text-green-500",children:t(l,{})}):n(e.date3).format("LL")==n().format("LL")&&e.am_in==null?t("button",{onClick:()=>a(e.id,"am_in"),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:r?t(o,{}):" Time In"}):""})}),t("td",{class:"px-6 py-4 text-center border-r-2",children:t("center",{children:n(e.date3).format("LL")!==n().format("LL")&&e.am_out==null?t("div",{className:"text-red-500",children:t(c,{})}):n(e.date3).format("LL")==n().format("LL")&&e.am_out!==null?t("div",{className:"text-green-500",children:t(l,{})}):n(e.date3).format("LL")==n().format("LL")&&e.am_out==null?t(d,{children:e.am_in==null?t("div",{className:"text-orange-500",children:t(i,{})}):t("button",{onClick:()=>a(e.id,"am_out"),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:r?t(o,{}):" Time Out"})}):""})}),t("td",{class:"px-6 py-4 text-center border-r-2",children:t("center",{children:n(e.date3).format("LL")!==n().format("LL")&&e.pm_in==null?t("div",{className:"text-red-500",children:t(c,{})}):n(e.date3).format("LL")==n().format("LL")&&e.pm_in!==null?t("div",{className:"text-green-500",children:t(l,{})}):n(e.date3).format("LL")==n().format("LL")&&e.pm_in==null?t(d,{children:e.am_out==null?t("div",{className:"text-orange-500",children:t(i,{})}):t("button",{onClick:()=>a(e.id,"pm_in"),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:r?t(o,{}):" Time In"})}):""})}),t("td",{class:"px-6 py-4 text-center border-r-2",children:t("center",{children:n(e.date3).format("LL")!==n().format("LL")&&e.pm_out==null?t("div",{className:"text-red-500",children:t(c,{})}):n(e.date3).format("LL")==n().format("LL")&&e.pm_out!==null?t("div",{className:"text-green-500",children:t(l,{})}):n(e.date3).format("LL")==n().format("LL")&&e.pm_out==null?t(d,{children:e.pm_in==null?t("div",{className:"text-orange-500",children:t(i,{})}):t("button",{onClick:()=>a(e.id,"pm_out"),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:r?t(o,{}):" Time Out"})}):""})}),t("td",{class:"px-6 py-4 text-center border-r-2",children:t("center",{children:n(e.date3).format("LL")!==n().format("LL")&&e.am2_in==null?t("div",{className:"text-red-500",children:t(c,{})}):n(e.date3).format("LL")==n().format("LL")&&e.am2_in!==null?t("div",{className:"text-green-500",children:t(l,{})}):n(e.date3).format("LL")==n().format("LL")&&e.am2_in==null?t(d,{children:e.pm_out==null?t("div",{className:"text-orange-500",children:t(i,{})}):t("button",{onClick:()=>a(e.id,"am2_in"),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:r?t(o,{}):" Time In"})}):""})}),t("td",{class:"px-6 py-4 text-center border-r-2",children:t("center",{children:n(e.date3).format("LL")!==n().format("LL")&&e.am2_out==null?t("div",{className:"text-red-500",children:t(c,{})}):n(e.date3).format("LL")==n().format("LL")&&e.am2_out!==null?t("div",{className:"text-green-500",children:t(l,{})}):n(e.date3).format("LL")==n().format("LL")&&e.am2_out==null?t(d,{children:e.am2_in==null?t("div",{className:"text-orange-500",children:t(i,{})}):t("button",{onClick:()=>a(e.id,"am2_out"),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:r?t(o,{}):" Time Out"})}):""})}),t("td",{class:"px-6 py-4 text-center border-r-2",children:t("center",{children:n(e.date3).format("LL")!==n().format("LL")&&e.pm2_in==null?t("div",{className:"text-red-500",children:t(c,{})}):n(e.date3).format("LL")==n().format("LL")&&e.pm2_in!==null?t("div",{className:"text-green-500",children:t(l,{})}):n(e.date3).format("LL")==n().format("LL")&&e.pm2_in==null?t(d,{children:e.am2_out==null?t("div",{className:"text-orange-500",children:t(i,{})}):t("button",{onClick:()=>a(e.id,"pm2_in"),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:r?t(o,{}):" Time In"})}):""})}),t("td",{class:"px-6 py-4 text-center border-r-2",children:t("center",{children:n(e.date3).format("LL")!==n().format("LL")&&e.pm2_out==null?t("div",{className:"text-red-500",children:t(c,{})}):n(e.date3).format("LL")==n().format("LL")&&e.pm2_out!==null?t("div",{className:"text-green-500",children:t(l,{})}):n(e.date3).format("LL")==n().format("LL")&&e.pm2_out==null?t(d,{children:e.pm2_in==null?t("div",{className:"text-orange-500",children:t(i,{})}):t("button",{onClick:()=>a(e.id,"pm2_out"),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:r?t(o,{}):" Time Out"})}):""})}),t("td",{className:"px-6 py-4 text-center border-r-2",children:e.total}),t("td",{class:"px-6 py-4 text-center",children:n(e.date3).format("LL")})]}))]})]})})})}export{B as default};
