import{r as i,j as r,a,F as m}from"./app-1c369c91.js";function x({data:t}){return i.useEffect(()=>{t.forEach(e=>{const s=e==null?void 0:e.message;if(s&&s.includes("created ")){const c=s.indexOf("created "),l=s.substring(c+8);try{console.log(JSON.parse(l))}catch(n){console.error("Error parsing JSON:",n)}}})},[t]),r("div",{className:"flex-1 capitalize rounded-lg mt-4 p-8",children:[a("h4",{className:"text-xl text-gray-900 font-bold",children:"History log"}),r("div",{className:"relative px-4",children:[a("div",{className:"absolute h-full border border-dashed border-opacity-20 border-secondary"}),t.map((e,s)=>{var c,l;return a("div",{children:r("div",{className:"flex items-center w-full my-6 -ml-1.5",children:[a("div",{className:"w-1/12 z-10",children:a("div",{className:"w-3.5 h-3.5 bg-red-600 rounded-full"})}),r("div",{className:"w-11/12",children:[r("div",{className:"flex",children:[a("a",{href:"#",className:"text-red-600 font-bold",children:(c=e==null?void 0:e.user)==null?void 0:c.name}),a("p",{className:"lowercase ml-3 mt-1 text-xs text-gray-500",children:"3 min ago"})]}),r("p",{className:"text-sm",children:[(l=e==null?void 0:e.user)==null?void 0:l.name," ",(e==null?void 0:e.message)&&r(m,{children:[e.message.includes("created ")?a("span",{children:(()=>{const n=e.message.indexOf("created ");if(n!==-1){const o=e.message.substring(n+8);try{return"created "+JSON.parse(o).map(d=>d.bread_name+" "+d.quantity)+"qty"}catch(d){return console.error("Error parsing JSON:",d),null}}})()}):e.message,"."]})]})]})]})},s)})]})]})}export{x as default};
