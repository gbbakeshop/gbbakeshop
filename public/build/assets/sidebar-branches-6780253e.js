import{r as o,R as v,u as H,q,a as l,j as y,F as K,d as S}from"./app-12ee0023.js";import{S as z}from"./store-icon-8b607bbf.js";import{l as O,S as M,D as E,y as C,T as Q,o as k,c as V,u as T,d as I,X as $,C as W}from"./open-closed-50b612ea.js";import{I as F,e as X,o as w,r as Y}from"./keyboard-886e0771.js";function L(e){var t;if(e.type)return e.type;let r=(t=e.as)!=null?t:"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function Z(e,t){let[r,s]=o.useState(()=>L(e));return O(()=>{s(L(e))},[e.type,e.as]),O(()=>{r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&s("button")},[r,t]),r}var A;let G=(A=v.startTransition)!=null?A:function(e){e()};var J=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(J||{}),ee=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(ee||{});let te={0:e=>({...e,disclosureState:T(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,t){return e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId}},3(e,t){return e.panelId===t.panelId?e:{...e,panelId:t.panelId}}},R=o.createContext(null);R.displayName="DisclosureContext";function j(e){let t=o.useContext(R);if(t===null){let r=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,j),r}return t}let _=o.createContext(null);_.displayName="DisclosureAPIContext";function U(e){let t=o.useContext(_);if(t===null){let r=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,U),r}return t}let B=o.createContext(null);B.displayName="DisclosurePanelContext";function re(){return o.useContext(B)}function ne(e,t){return T(t.type,te,e,t)}let le=o.Fragment;function se(e,t){let{defaultOpen:r=!1,...s}=e,n=o.useRef(null),a=C(t,Q(p=>{n.current=p},e.as===void 0||e.as===o.Fragment)),i=o.useRef(null),b=o.useRef(null),c=o.useReducer(ne,{disclosureState:r?0:1,linkedPanel:!1,buttonRef:b,panelRef:i,buttonId:null,panelId:null}),[{disclosureState:d,buttonId:f},g]=c,m=k(p=>{g({type:1});let u=X(n);if(!u||!f)return;let h=(()=>p?p instanceof HTMLElement?p:p.current instanceof HTMLElement?p.current:u.getElementById(f):u.getElementById(f))();h==null||h.focus()}),x=o.useMemo(()=>({close:m}),[m]),N=o.useMemo(()=>({open:d===0,close:m}),[d,m]),P={ref:a};return v.createElement(R.Provider,{value:c},v.createElement(_.Provider,{value:x},v.createElement(V,{value:T(d,{0:I.Open,1:I.Closed})},$({ourProps:P,theirProps:s,slot:N,defaultTag:le,name:"Disclosure"}))))}let ae="button";function oe(e,t){let r=F(),{id:s=`headlessui-disclosure-button-${r}`,...n}=e,[a,i]=j("Disclosure.Button"),b=re(),c=b===null?!1:b===a.panelId,d=o.useRef(null),f=C(d,t,c?null:a.buttonRef);o.useEffect(()=>{if(!c)return i({type:2,buttonId:s}),()=>{i({type:2,buttonId:null})}},[s,i,c]);let g=k(u=>{var h;if(c){if(a.disclosureState===1)return;switch(u.key){case w.Space:case w.Enter:u.preventDefault(),u.stopPropagation(),i({type:0}),(h=a.buttonRef.current)==null||h.focus();break}}else switch(u.key){case w.Space:case w.Enter:u.preventDefault(),u.stopPropagation(),i({type:0});break}}),m=k(u=>{switch(u.key){case w.Space:u.preventDefault();break}}),x=k(u=>{var h;Y(u.currentTarget)||e.disabled||(c?(i({type:0}),(h=a.buttonRef.current)==null||h.focus()):i({type:0}))}),N=o.useMemo(()=>({open:a.disclosureState===0}),[a]),P=Z(e,d),p=c?{ref:f,type:P,onKeyDown:g,onClick:x}:{ref:f,id:s,type:P,"aria-expanded":a.disclosureState===0,"aria-controls":a.linkedPanel?a.panelId:void 0,onKeyDown:g,onKeyUp:m,onClick:x};return $({ourProps:p,theirProps:n,slot:N,defaultTag:ae,name:"Disclosure.Button"})}let ie="div",ue=M.RenderStrategy|M.Static;function ce(e,t){let r=F(),{id:s=`headlessui-disclosure-panel-${r}`,...n}=e,[a,i]=j("Disclosure.Panel"),{close:b}=U("Disclosure.Panel"),c=C(t,a.panelRef,x=>{G(()=>i({type:x?4:5}))});o.useEffect(()=>(i({type:3,panelId:s}),()=>{i({type:3,panelId:null})}),[s,i]);let d=W(),f=(()=>d!==null?(d&I.Open)===I.Open:a.disclosureState===0)(),g=o.useMemo(()=>({open:a.disclosureState===0,close:b}),[a,b]),m={ref:c,id:s};return v.createElement(B.Provider,{value:a.panelId},$({ourProps:m,theirProps:n,slot:g,defaultTag:ie,features:ue,visible:f,name:"Disclosure.Panel"}))}let de=E(se),pe=E(oe),fe=E(ce),D=Object.assign(de,{Button:pe,Panel:fe});function xe(){const{branches:e}=H(n=>n.app),{url:t}=q(),r=t.split("/")[2],s=t.split("/")[3];return l("div",{children:y("div",{className:"h-screen py-8 overflow-y-auto bg-white border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-700",children:[l("h2",{className:"px-5 text-lg font-medium text-gray-800 dark:text-white",children:"Branches"}),e==null?void 0:e.map((n,a)=>l(D,{defaultOpen:r==n.id,as:"div",className:"border-b border-gray-200",children:({open:i})=>y(K,{children:[l("h3",{className:"flow-root",children:l(D.Button,{className:"flex w-full items-center justify-between bg-white  text-sm text-gray-400 hover:text-gray-500",children:y("button",{className:"flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none",children:[l("div",{className:"text-red-500",children:l(z,{})}),y("div",{className:"text-left rtl:text-right",children:[l("h1",{className:"text-sm font-medium text-gray-700 capitalize dark:text-white",children:n.branch_name}),l("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"11.2 Followers"})]})]})})}),l(D.Panel,{children:y("div",{className:"space-y-2 p-2",children:[l(S,{className:`${r==n.id&&s=="raw_materials"?"bg-red-600 text-white rounded-lg p-2 flex w-full justify-between cursor-pointer items-center":"bg-red-50 text-red-500 rounded-lg p-2 flex w-full justify-between cursor-pointer items-center"}`,href:route("branch_raw_materials",n.id),children:l("div",{className:"flex items-center focus:outline-none focus:ring-2 focus:ring-white",children:l("span",{className:"text-sm ml-2",children:"RAW MATERIALS"})})}),l(S,{className:`${r==n.id&&s=="bakers_production"||r==n.id&&s=="bakers_report"||r==n.id&&s=="bread_report"||r==n.id&&s=="sales_report"?"bg-red-600 text-white rounded-lg p-2 flex w-full justify-between cursor-pointer items-center":"bg-red-50 text-red-500 rounded-lg p-2 flex w-full justify-between cursor-pointer items-center"}`,href:route("branch_bakers_production",n.id),children:l("div",{className:"flex items-center focus:outline-none focus:ring-2 focus:ring-white",children:l("span",{className:"text-sm ml-2",children:"PRODUCTION"})})}),l(S,{className:`${r==n.id&&s=="selecta"?"bg-red-600 text-white rounded-lg p-2 flex w-full justify-between cursor-pointer items-center":"bg-red-50 text-red-500 rounded-lg p-2 flex w-full justify-between cursor-pointer items-center"}`,href:route("branch_selecta",n.id),children:l("div",{className:"flex items-center focus:outline-none focus:ring-2 focus:ring-white",children:l("span",{className:"text-sm ml-2",children:"SELECTA"})})}),l(S,{className:`${r==n.id&&s=="accounts"?"bg-red-600 text-white rounded-lg p-2 flex w-full justify-between cursor-pointer items-center":"bg-red-50 text-red-500 rounded-lg p-2 flex w-full justify-between cursor-pointer items-center"}`,href:route("branch_accounts",n.id),children:l("div",{className:"flex items-center focus:outline-none focus:ring-2 focus:ring-white",children:l("span",{className:"text-sm ml-2",children:"ACCOUNTS"})})})]})})]})},a))]})})}export{xe as default};
