import{r as m,j as F,a as b,d as ae,q as me,R as C,F as fe}from"./app-f46303a7.js";import{G as pe}from"./iconBase-ff4ab028.js";import{g as ge}from"./branches-services-95ce5ec1.js";function we(){const[e,t]=m.useState(!1);return F("div",{className:"relative inline-block text-left",children:[F("button",{onClick:()=>t(!e),type:"button",className:" mt-1 relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",id:"user-menu-button","aria-expanded":"false","aria-haspopup":"true",children:[b("span",{className:"absolute -inset-1.5"}),b("span",{className:"sr-only",children:"Open user menu"}),b("img",{className:"h-8 w-8 rounded-full",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",alt:""})]}),b("div",{className:`${e?"":"hidden"} absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`,role:"menu",children:F("div",{className:"py-1",children:[b(ae,{href:route("profile.edit"),className:"text-gray-700 block px-4 py-2 text-sm",children:"Account settings"}),b("a",{href:"#",className:"text-gray-700 block px-4 py-2 text-sm",children:"Support"}),b("a",{href:"#",className:"text-gray-700 block px-4 py-2 text-sm",children:"License"}),b(ae,{method:"post",href:route("logout"),className:"text-gray-700 block w-full px-4 py-2 text-left text-sm",children:"Sign out"})]})})]})}function he(e){return pe({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M2.8 1L2.74967 0.99997C2.52122 0.999752 2.32429 0.999564 2.14983 1.04145C1.60136 1.17312 1.17312 1.60136 1.04145 2.14983C0.999564 2.32429 0.999752 2.52122 0.99997 2.74967L1 2.8V5.2L0.99997 5.25033C0.999752 5.47878 0.999564 5.67572 1.04145 5.85017C1.17312 6.39864 1.60136 6.82688 2.14983 6.95856C2.32429 7.00044 2.52122 7.00025 2.74967 7.00003L2.8 7H5.2L5.25033 7.00003C5.47878 7.00025 5.67572 7.00044 5.85017 6.95856C6.39864 6.82688 6.82688 6.39864 6.95856 5.85017C7.00044 5.67572 7.00025 5.47878 7.00003 5.25033L7 5.2V2.8L7.00003 2.74967C7.00025 2.52122 7.00044 2.32429 6.95856 2.14983C6.82688 1.60136 6.39864 1.17312 5.85017 1.04145C5.67572 0.999564 5.47878 0.999752 5.25033 0.99997L5.2 1H2.8ZM2.38328 2.01382C2.42632 2.00348 2.49222 2 2.8 2H5.2C5.50779 2 5.57369 2.00348 5.61672 2.01382C5.79955 2.05771 5.94229 2.20045 5.98619 2.38328C5.99652 2.42632 6 2.49222 6 2.8V5.2C6 5.50779 5.99652 5.57369 5.98619 5.61672C5.94229 5.79955 5.79955 5.94229 5.61672 5.98619C5.57369 5.99652 5.50779 6 5.2 6H2.8C2.49222 6 2.42632 5.99652 2.38328 5.98619C2.20045 5.94229 2.05771 5.79955 2.01382 5.61672C2.00348 5.57369 2 5.50779 2 5.2V2.8C2 2.49222 2.00348 2.42632 2.01382 2.38328C2.05771 2.20045 2.20045 2.05771 2.38328 2.01382ZM9.8 1L9.74967 0.99997C9.52122 0.999752 9.32429 0.999564 9.14983 1.04145C8.60136 1.17312 8.17312 1.60136 8.04145 2.14983C7.99956 2.32429 7.99975 2.52122 7.99997 2.74967L8 2.8V5.2L7.99997 5.25033C7.99975 5.47878 7.99956 5.67572 8.04145 5.85017C8.17312 6.39864 8.60136 6.82688 9.14983 6.95856C9.32429 7.00044 9.52122 7.00025 9.74967 7.00003L9.8 7H12.2L12.2503 7.00003C12.4788 7.00025 12.6757 7.00044 12.8502 6.95856C13.3986 6.82688 13.8269 6.39864 13.9586 5.85017C14.0004 5.67572 14.0003 5.47878 14 5.25033L14 5.2V2.8L14 2.74967C14.0003 2.52122 14.0004 2.32429 13.9586 2.14983C13.8269 1.60136 13.3986 1.17312 12.8502 1.04145C12.6757 0.999564 12.4788 0.999752 12.2503 0.99997L12.2 1H9.8ZM9.38328 2.01382C9.42632 2.00348 9.49222 2 9.8 2H12.2C12.5078 2 12.5737 2.00348 12.6167 2.01382C12.7995 2.05771 12.9423 2.20045 12.9862 2.38328C12.9965 2.42632 13 2.49222 13 2.8V5.2C13 5.50779 12.9965 5.57369 12.9862 5.61672C12.9423 5.79955 12.7995 5.94229 12.6167 5.98619C12.5737 5.99652 12.5078 6 12.2 6H9.8C9.49222 6 9.42632 5.99652 9.38328 5.98619C9.20045 5.94229 9.05771 5.79955 9.01382 5.61672C9.00348 5.57369 9 5.50779 9 5.2V2.8C9 2.49222 9.00348 2.42632 9.01382 2.38328C9.05771 2.20045 9.20045 2.05771 9.38328 2.01382ZM2.74967 7.99997L2.8 8H5.2L5.25033 7.99997C5.47878 7.99975 5.67572 7.99956 5.85017 8.04145C6.39864 8.17312 6.82688 8.60136 6.95856 9.14983C7.00044 9.32429 7.00025 9.52122 7.00003 9.74967L7 9.8V12.2L7.00003 12.2503C7.00025 12.4788 7.00044 12.6757 6.95856 12.8502C6.82688 13.3986 6.39864 13.8269 5.85017 13.9586C5.67572 14.0004 5.47878 14.0003 5.25033 14L5.2 14H2.8L2.74967 14C2.52122 14.0003 2.32429 14.0004 2.14983 13.9586C1.60136 13.8269 1.17312 13.3986 1.04145 12.8502C0.999564 12.6757 0.999752 12.4788 0.99997 12.2503L1 12.2V9.8L0.99997 9.74967C0.999752 9.52122 0.999564 9.32429 1.04145 9.14983C1.17312 8.60136 1.60136 8.17312 2.14983 8.04145C2.32429 7.99956 2.52122 7.99975 2.74967 7.99997ZM2.8 9C2.49222 9 2.42632 9.00348 2.38328 9.01382C2.20045 9.05771 2.05771 9.20045 2.01382 9.38328C2.00348 9.42632 2 9.49222 2 9.8V12.2C2 12.5078 2.00348 12.5737 2.01382 12.6167C2.05771 12.7995 2.20045 12.9423 2.38328 12.9862C2.42632 12.9965 2.49222 13 2.8 13H5.2C5.50779 13 5.57369 12.9965 5.61672 12.9862C5.79955 12.9423 5.94229 12.7995 5.98619 12.6167C5.99652 12.5737 6 12.5078 6 12.2V9.8C6 9.49222 5.99652 9.42632 5.98619 9.38328C5.94229 9.20045 5.79955 9.05771 5.61672 9.01382C5.57369 9.00348 5.50779 9 5.2 9H2.8ZM9.8 8L9.74967 7.99997C9.52122 7.99975 9.32429 7.99956 9.14983 8.04145C8.60136 8.17312 8.17312 8.60136 8.04145 9.14983C7.99956 9.32429 7.99975 9.52122 7.99997 9.74967L8 9.8V12.2L7.99997 12.2503C7.99975 12.4788 7.99956 12.6757 8.04145 12.8502C8.17312 13.3986 8.60136 13.8269 9.14983 13.9586C9.32429 14.0004 9.52122 14.0003 9.74967 14L9.8 14H12.2L12.2503 14C12.4788 14.0003 12.6757 14.0004 12.8502 13.9586C13.3986 13.8269 13.8269 13.3986 13.9586 12.8502C14.0004 12.6757 14.0003 12.4788 14 12.2503L14 12.2V9.8L14 9.74967C14.0003 9.52122 14.0004 9.32429 13.9586 9.14983C13.8269 8.60136 13.3986 8.17312 12.8502 8.04145C12.6757 7.99956 12.4788 7.99975 12.2503 7.99997L12.2 8H9.8ZM9.38328 9.01382C9.42632 9.00348 9.49222 9 9.8 9H12.2C12.5078 9 12.5737 9.00348 12.6167 9.01382C12.7995 9.05771 12.9423 9.20045 12.9862 9.38328C12.9965 9.42632 13 9.49222 13 9.8V12.2C13 12.5078 12.9965 12.5737 12.9862 12.6167C12.9423 12.7995 12.7995 12.9423 12.6167 12.9862C12.5737 12.9965 12.5078 13 12.2 13H9.8C9.49222 13 9.42632 12.9965 9.38328 12.9862C9.20045 12.9423 9.05771 12.7995 9.01382 12.6167C9.00348 12.5737 9 12.5078 9 12.2V9.8C9 9.49222 9.00348 9.42632 9.01382 9.38328C9.05771 9.20045 9.20045 9.05771 9.38328 9.01382Z",fill:"currentColor"}}]})(e)}function ke({branchid:e}){var E,y,h;const[t,o]=m.useState([]),{url:s}=me(),c=s.split("/")[1],i=s.split("/")[2],n=s.split("/")[3];m.useEffect(()=>{ge().then(p=>{o(p)})},[]);function a(p){return t.find(x=>x.id==p)}return b("nav",{className:"mb-5 shadow-sm capitalize flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700","aria-label":"Breadcrumb",children:F("ol",{className:"inline-flex items-center space-x-1 md:space-x-3",children:[b("li",{className:"inline-flex items-center",children:F("a",{href:"#",className:"inline-flex items-center text-sm font-medium text-red-600 hover:text-red-700 dark:text-gray-400 dark:hover:text-white",children:[b(he,{className:"w-4 h-4 mr-2.5"}),(E=a(e))==null?void 0:E.branch_name,"-(",c,")"]})}),b("li",{children:F("div",{className:"flex items-center",children:[b("svg",{className:"w-3 h-3 mx-1 text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:b("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeidth:"2",d:"m1 9 4-4-4-4"})}),b("a",{href:"#",className:"ml-1 text-sm font-medium text-gray-700 hover:text-red-600 md:ml-2 dark:text-gray-400 dark:hover:text-white",children:((y=a(i))==null?void 0:y.branch_name)==null?i:(h=a(i))==null?void 0:h.branch_name})]})}),b("li",{"aria-current":"page",children:F("div",{className:"flex items-center",children:[b("svg",{className:"w-3 h-3 mx-1 text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10",children:b("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeidth:"2",d:"m1 9 4-4-4-4"})}),b("span",{className:"ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400",children:n==null?void 0:n.replace(/_/g," ")})]})})]})})}function ce(e){var t,o,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(o=ce(e[t]))&&(s&&(s+=" "),s+=o);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function $(){for(var e,t,o=0,s="";o<arguments.length;)(e=arguments[o++])&&(t=ce(e))&&(s&&(s+=" "),s+=t);return s}const Z=e=>typeof e=="number"&&!isNaN(e),q=e=>typeof e=="string",I=e=>typeof e=="function",Y=e=>q(e)||I(e)?e:null,te=e=>m.isValidElement(e)||q(e)||I(e)||Z(e);function Ce(e,t,o){o===void 0&&(o=300);const{scrollHeight:s,style:c}=e;requestAnimationFrame(()=>{c.minHeight="initial",c.height=s+"px",c.transition=`all ${o}ms`,requestAnimationFrame(()=>{c.height="0",c.padding="0",c.margin="0",setTimeout(t,o)})})}function J(e){let{enter:t,exit:o,appendPosition:s=!1,collapse:c=!0,collapseDuration:i=300}=e;return function(n){let{children:a,position:E,preventExitTransition:y,done:h,nodeRef:p,isIn:x}=n;const l=s?`${t}--${E}`:t,d=s?`${o}--${E}`:o,f=m.useRef(0);return m.useLayoutEffect(()=>{const r=p.current,u=l.split(" "),L=_=>{_.target===p.current&&(r.dispatchEvent(new Event("d")),r.removeEventListener("animationend",L),r.removeEventListener("animationcancel",L),f.current===0&&_.type!=="animationcancel"&&r.classList.remove(...u))};r.classList.add(...u),r.addEventListener("animationend",L),r.addEventListener("animationcancel",L)},[]),m.useEffect(()=>{const r=p.current,u=()=>{r.removeEventListener("animationend",u),c?Ce(r,h,i):h()};x||(y?u():(f.current=1,r.className+=` ${d}`,r.addEventListener("animationend",u)))},[x]),C.createElement(C.Fragment,null,a)}}function re(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const O={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const o=this.list.get(e).filter(s=>s!==t);return this.list.set(e,o),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const o=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(o)})}},U=e=>{let{theme:t,type:o,...s}=e;return C.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${o})`,...s})},ne={info:function(e){return C.createElement(U,{...e},C.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return C.createElement(U,{...e},C.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return C.createElement(U,{...e},C.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return C.createElement(U,{...e},C.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return C.createElement("div",{className:"Toastify__spinner"})}};function ye(e){const[,t]=m.useReducer(l=>l+1,0),[o,s]=m.useState([]),c=m.useRef(null),i=m.useRef(new Map).current,n=l=>o.indexOf(l)!==-1,a=m.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:n,getToast:l=>i.get(l)}).current;function E(l){let{containerId:d}=l;const{limit:f}=a.props;!f||d&&a.containerId!==d||(a.count-=a.queue.length,a.queue=[])}function y(l){s(d=>l==null?[]:d.filter(f=>f!==l))}function h(){const{toastContent:l,toastProps:d,staleId:f}=a.queue.shift();x(l,d,f)}function p(l,d){let{delay:f,staleId:r,...u}=d;if(!te(l)||function(R){return!c.current||a.props.enableMultiContainer&&R.containerId!==a.props.containerId||i.has(R.toastId)&&R.updateId==null}(u))return;const{toastId:L,updateId:_,data:g}=u,{props:v}=a,H=()=>y(L),D=_==null;D&&a.count++;const N={...v,style:v.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(u).filter(R=>{let[M,w]=R;return w!=null})),toastId:L,updateId:_,data:g,closeToast:H,isIn:!1,className:Y(u.className||v.toastClassName),bodyClassName:Y(u.bodyClassName||v.bodyClassName),progressClassName:Y(u.progressClassName||v.progressClassName),autoClose:!u.isLoading&&(P=u.autoClose,Q=v.autoClose,P===!1||Z(P)&&P>0?P:Q),deleteToast(){const R=re(i.get(L),"removed");i.delete(L),O.emit(4,R);const M=a.queue.length;if(a.count=L==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),M>0){const w=L==null?a.props.limit:1;if(M===1||w===1)a.displayedToast++,h();else{const V=w>M?M:w;a.displayedToast=V;for(let k=0;k<V;k++)h()}}else t()}};var P,Q;N.iconOut=function(R){let{theme:M,type:w,isLoading:V,icon:k}=R,B=null;const z={theme:M,type:w};return k===!1||(I(k)?B=k(z):m.isValidElement(k)?B=m.cloneElement(k,z):q(k)||Z(k)?B=k:V?B=ne.spinner():(W=>W in ne)(w)&&(B=ne[w](z))),B}(N),I(u.onOpen)&&(N.onOpen=u.onOpen),I(u.onClose)&&(N.onClose=u.onClose),N.closeButton=v.closeButton,u.closeButton===!1||te(u.closeButton)?N.closeButton=u.closeButton:u.closeButton===!0&&(N.closeButton=!te(v.closeButton)||v.closeButton);let A=l;m.isValidElement(l)&&!q(l.type)?A=m.cloneElement(l,{closeToast:H,toastProps:N,data:g}):I(l)&&(A=l({closeToast:H,toastProps:N,data:g})),v.limit&&v.limit>0&&a.count>v.limit&&D?a.queue.push({toastContent:A,toastProps:N,staleId:r}):Z(f)?setTimeout(()=>{x(A,N,r)},f):x(A,N,r)}function x(l,d,f){const{toastId:r}=d;f&&i.delete(f);const u={content:l,props:d};i.set(r,u),s(L=>[...L,r].filter(_=>_!==f)),O.emit(4,re(u,u.props.updateId==null?"added":"updated"))}return m.useEffect(()=>(a.containerId=e.containerId,O.cancelEmit(3).on(0,p).on(1,l=>c.current&&y(l)).on(5,E).emit(2,a),()=>{i.clear(),O.emit(3,a)}),[]),m.useEffect(()=>{a.props=e,a.isToastActive=n,a.displayedToast=o.length}),{getToastToRender:function(l){const d=new Map,f=Array.from(i.values());return e.newestOnTop&&f.reverse(),f.forEach(r=>{const{position:u}=r.props;d.has(u)||d.set(u,[]),d.get(u).push(r)}),Array.from(d,r=>l(r[0],r[1]))},containerRef:c,isToastActive:n}}function ie(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function le(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function ve(e){const[t,o]=m.useState(!1),[s,c]=m.useState(!1),i=m.useRef(null),n=m.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=m.useRef(e),{autoClose:E,pauseOnHover:y,closeToast:h,onClick:p,closeOnClick:x}=e;function l(g){if(e.draggable){g.nativeEvent.type==="touchstart"&&g.nativeEvent.preventDefault(),n.didMove=!1,document.addEventListener("mousemove",u),document.addEventListener("mouseup",L),document.addEventListener("touchmove",u),document.addEventListener("touchend",L);const v=i.current;n.canCloseOnClick=!0,n.canDrag=!0,n.boundingRect=v.getBoundingClientRect(),v.style.transition="",n.x=ie(g.nativeEvent),n.y=le(g.nativeEvent),e.draggableDirection==="x"?(n.start=n.x,n.removalDistance=v.offsetWidth*(e.draggablePercent/100)):(n.start=n.y,n.removalDistance=v.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function d(g){if(n.boundingRect){const{top:v,bottom:H,left:D,right:N}=n.boundingRect;g.nativeEvent.type!=="touchend"&&e.pauseOnHover&&n.x>=D&&n.x<=N&&n.y>=v&&n.y<=H?r():f()}}function f(){o(!0)}function r(){o(!1)}function u(g){const v=i.current;n.canDrag&&v&&(n.didMove=!0,t&&r(),n.x=ie(g),n.y=le(g),n.delta=e.draggableDirection==="x"?n.x-n.start:n.y-n.start,n.start!==n.x&&(n.canCloseOnClick=!1),v.style.transform=`translate${e.draggableDirection}(${n.delta}px)`,v.style.opacity=""+(1-Math.abs(n.delta/n.removalDistance)))}function L(){document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",L),document.removeEventListener("touchmove",u),document.removeEventListener("touchend",L);const g=i.current;if(n.canDrag&&n.didMove&&g){if(n.canDrag=!1,Math.abs(n.delta)>n.removalDistance)return c(!0),void e.closeToast();g.style.transition="transform 0.2s, opacity 0.2s",g.style.transform=`translate${e.draggableDirection}(0)`,g.style.opacity="1"}}m.useEffect(()=>{a.current=e}),m.useEffect(()=>(i.current&&i.current.addEventListener("d",f,{once:!0}),I(e.onOpen)&&e.onOpen(m.isValidElement(e.children)&&e.children.props),()=>{const g=a.current;I(g.onClose)&&g.onClose(m.isValidElement(g.children)&&g.children.props)}),[]),m.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||r(),window.addEventListener("focus",f),window.addEventListener("blur",r)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",f),window.removeEventListener("blur",r))}),[e.pauseOnFocusLoss]);const _={onMouseDown:l,onTouchStart:l,onMouseUp:d,onTouchEnd:d};return E&&y&&(_.onMouseEnter=r,_.onMouseLeave=f),x&&(_.onClick=g=>{p&&p(g),n.canCloseOnClick&&h()}),{playToast:f,pauseToast:r,isRunning:t,preventExitTransition:s,toastRef:i,eventHandlers:_}}function ue(e){let{closeToast:t,theme:o,ariaLabel:s="close"}=e;return C.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:c=>{c.stopPropagation(),t(c)},"aria-label":s},C.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},C.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Te(e){let{delay:t,isRunning:o,closeToast:s,type:c="default",hide:i,className:n,style:a,controlledProgress:E,progress:y,rtl:h,isIn:p,theme:x}=e;const l=i||E&&y===0,d={...a,animationDuration:`${t}ms`,animationPlayState:o?"running":"paused",opacity:l?0:1};E&&(d.transform=`scaleX(${y})`);const f=$("Toastify__progress-bar",E?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${x}`,`Toastify__progress-bar--${c}`,{"Toastify__progress-bar--rtl":h}),r=I(n)?n({rtl:h,type:c,defaultClassName:f}):$(f,n);return C.createElement("div",{role:"progressbar","aria-hidden":l?"true":"false","aria-label":"notification timer",className:r,style:d,[E&&y>=1?"onTransitionEnd":"onAnimationEnd"]:E&&y<1?null:()=>{p&&s()}})}const Ee=e=>{const{isRunning:t,preventExitTransition:o,toastRef:s,eventHandlers:c}=ve(e),{closeButton:i,children:n,autoClose:a,onClick:E,type:y,hideProgressBar:h,closeToast:p,transition:x,position:l,className:d,style:f,bodyClassName:r,bodyStyle:u,progressClassName:L,progressStyle:_,updateId:g,role:v,progress:H,rtl:D,toastId:N,deleteToast:P,isIn:Q,isLoading:A,iconOut:R,closeOnClick:M,theme:w}=e,V=$("Toastify__toast",`Toastify__toast-theme--${w}`,`Toastify__toast--${y}`,{"Toastify__toast--rtl":D},{"Toastify__toast--close-on-click":M}),k=I(d)?d({rtl:D,position:l,type:y,defaultClassName:V}):$(V,d),B=!!H||!a,z={closeToast:p,type:y,theme:w};let W=null;return i===!1||(W=I(i)?i(z):m.isValidElement(i)?m.cloneElement(i,z):ue(z)),C.createElement(x,{isIn:Q,done:P,position:l,preventExitTransition:o,nodeRef:s},C.createElement("div",{id:N,onClick:E,className:k,...c,style:f,ref:s},C.createElement("div",{...Q&&{role:v},className:I(r)?r({type:y}):$("Toastify__toast-body",r),style:u},R!=null&&C.createElement("div",{className:$("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!A})},R),C.createElement("div",null,n)),W,C.createElement(Te,{...g&&!B?{key:`pb-${g}`}:{},rtl:D,theme:w,delay:a,isRunning:t,isIn:Q,closeToast:p,hide:h,type:y,style:_,className:L,controlledProgress:B,progress:H||0})))},ee=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},be=J(ee("bounce",!0));J(ee("slide",!0));J(ee("zoom"));J(ee("flip"));const se=m.forwardRef((e,t)=>{const{getToastToRender:o,containerRef:s,isToastActive:c}=ye(e),{className:i,style:n,rtl:a,containerId:E}=e;function y(h){const p=$("Toastify__toast-container",`Toastify__toast-container--${h}`,{"Toastify__toast-container--rtl":a});return I(i)?i({position:h,rtl:a,defaultClassName:p}):$(p,Y(i))}return m.useEffect(()=>{t&&(t.current=s.current)},[]),C.createElement("div",{ref:s,className:"Toastify",id:E},o((h,p)=>{const x=p.length?{...n}:{...n,pointerEvents:"none"};return C.createElement("div",{className:y(h),style:x,key:`container-${h}`},p.map((l,d)=>{let{content:f,props:r}=l;return C.createElement(Ee,{...r,isIn:c(r.toastId),style:{...r.style,"--nth":d+1,"--len":p.length},key:`toast-${r.key}`},f)}))}))});se.displayName="ToastContainer",se.defaultProps={position:"top-right",transition:be,autoClose:5e3,closeButton:ue,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let oe,S=new Map,j=[],Le=1;function de(){return""+Le++}function xe(e){return e&&(q(e.toastId)||Z(e.toastId))?e.toastId:de()}function G(e,t){return S.size>0?O.emit(0,e,t):j.push({content:e,options:t}),t.toastId}function K(e,t){return{...t,type:t&&t.type||e,toastId:xe(t)}}function X(e){return(t,o)=>G(t,K(e,o))}function T(e,t){return G(e,K("default",t))}T.loading=(e,t)=>G(e,K("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),T.promise=function(e,t,o){let s,{pending:c,error:i,success:n}=t;c&&(s=q(c)?T.loading(c,o):T.loading(c.render,{...o,...c}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},E=(h,p,x)=>{if(p==null)return void T.dismiss(s);const l={type:h,...a,...o,data:x},d=q(p)?{render:p}:p;return s?T.update(s,{...l,...d}):T(d.render,{...l,...d}),x},y=I(e)?e():e;return y.then(h=>E("success",n,h)).catch(h=>E("error",i,h)),y},T.success=X("success"),T.info=X("info"),T.error=X("error"),T.warning=X("warning"),T.warn=T.warning,T.dark=(e,t)=>G(e,K("default",{theme:"dark",...t})),T.dismiss=e=>{S.size>0?O.emit(1,e):j=j.filter(t=>e!=null&&t.options.toastId!==e)},T.clearWaitingQueue=function(e){return e===void 0&&(e={}),O.emit(5,e)},T.isActive=e=>{let t=!1;return S.forEach(o=>{o.isToastActive&&o.isToastActive(e)&&(t=!0)}),t},T.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const o=function(s,c){let{containerId:i}=c;const n=S.get(i||oe);return n&&n.getToast(s)}(e,t);if(o){const{props:s,content:c}=o,i={delay:100,...s,...t,toastId:t.toastId||e,updateId:de()};i.toastId!==e&&(i.staleId=e);const n=i.render||c;delete i.render,G(n,i)}},0)},T.done=e=>{T.update(e,{progress:1})},T.onChange=e=>(O.on(4,e),()=>{O.off(4,e)}),T.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},T.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},O.on(2,e=>{oe=e.containerId||e,S.set(oe,e),j.forEach(t=>{O.emit(0,t.content,t.options)}),j=[]}).on(3,e=>{S.delete(e.containerId||e),S.size===0&&O.off(0).off(1).off(5)});function Re({response:e}){C.useRef(null),m.useEffect(()=>{e&&e.then(o=>{console.log("res.status",o.status),o.status==="loading"?t("Loading ...","loading"):o.status==="success"?t(o.message,"success"):o.status==="exist"?t(o.message,"warning"):t("Error 404","error")})},[e]);function t(o,s){const c=T.loading("Loading ...",{toastId:"id",position:"top-center"});s!=="loading"&&setTimeout(()=>{T.update(c,{render:o,autoClose:1e3,type:s,isLoading:!1})},1e3)}return b(fe,{children:b(se,{})})}export{ke as B,we as D,he as R,Re as T};
