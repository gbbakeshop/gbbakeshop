import{r as o,q as f,a as r,j as u}from"./app-41cc0b88.js";import{B as b}from"./branch-layout-64ca66b9.js";import{B as x}from"./bread-crumbs-fcf137bf.js";import g from"./account-profile-8e1228c5.js";import v from"./account-settings-tab-8109ea91.js";import{g as l}from"./history-services-2b7776b0.js";import y from"./account-history-2049fbb2.js";import w from"./account-history2-02bc7f9d.js";import{S as B}from"./skeleton-loader-efe0ba36.js";import"./squire-icon-3a27aa60.js";import"./useDispatch-cb55bb16.js";import"./store-icon-6351df1f.js";import"./branches-services-c82cb97c.js";import"./database-icon-6f5852e3.js";import"./iconBase-94d31c31.js";import"./account-services-fc073ead.js";function z(p){const{auth:t}=p,[n,c]=o.useState([]),{url:m}=f(),a=m.split("/")[4]??t.user.id,[h,i]=o.useState(!0),[e,d]=o.useState("production");return o.useEffect(()=>{i(!0),e=="selecta"?l(a,"selecta").then(s=>{c(s),i(!1)}):l(a,"production").then(s=>{c(s),i(!1)})},[e]),r(b,{position:t.user.position,branchid:t.user.branchid,children:u("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(x,{branchid:t.user.branchid}),r(g,{id:t.user.id}),r(v,{branch:t.user.branchid,id:t.user.id}),u("div",{className:"m-2 ",children:[r("button",{class:`${e=="production"?"bg-red-500 text-white":""} mr-4 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`,onClick:()=>d("production"),children:"Production History"}),r("button",{class:`${e=="selecta"?"bg-red-500 text-white":""} hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`,onClick:()=>d("selecta"),children:"Selecta History"})]}),h?r(B,{}):e=="production"?r(y,{data:n}):r(w,{data:n})]})})}export{z as default};