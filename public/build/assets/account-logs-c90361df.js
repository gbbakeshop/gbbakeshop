import{r as o,q as f,a as r,j as u}from"./app-755926e6.js";import{B as b}from"./branch-layout-aa7c9c9c.js";import{B as x}from"./bread-crumbs-c7fb3f7b.js";import g from"./account-profile-5b56086a.js";import v from"./account-settings-tab-46329ffb.js";import{g as p}from"./history-services-2b7776b0.js";import y from"./account-history-dd48bb8d.js";import w from"./account-history2-f269a815.js";import{S as B}from"./skeleton-loader-64893bc6.js";import"./squire-icon-ec3eadb9.js";import"./useDispatch-dc0683dc.js";import"./store-icon-251e079f.js";import"./branches-services-a1d34a43.js";import"./database-icon-8a9fef99.js";import"./calendar-icon-e1db7830.js";import"./iconBase-3f81a67c.js";import"./account-services-b78e9377.js";function G(l){const{auth:t}=l,[n,c]=o.useState([]),{url:m}=f(),a=m.split("/")[4]??t.user.id,[h,i]=o.useState(!0),[e,d]=o.useState("production");return o.useEffect(()=>{i(!0),e=="selecta"?p(a,"selecta").then(s=>{c(s),i(!1)}):p(a,"production").then(s=>{c(s),i(!1)})},[e]),r(b,{position:t.user.position,branchid:t.user.branchid,children:u("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(x,{branchid:t.user.branchid}),r(g,{id:t.user.id}),r(v,{branch:t.user.branchid,id:t.user.id}),u("div",{className:"m-2 ",children:[r("button",{class:`${e=="production"?"bg-red-500 text-white":""} mr-4 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`,onClick:()=>d("production"),children:"Production History"}),r("button",{class:`${e=="selecta"?"bg-red-500 text-white":""} hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`,onClick:()=>d("selecta"),children:"Selecta History"})]}),h?r(B,{}):e=="production"?r(y,{data:n}):r(w,{data:n})]})})}export{G as default};