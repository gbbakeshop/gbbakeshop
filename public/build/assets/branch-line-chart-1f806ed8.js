import{a as s}from"./app-78341254.js";import{C as p,a,L as g,P as b,b as c,p as C,c as u,d as m,e as h}from"./index-8791c46c.js";p.register(a,g,b,c,C,u,m);const x={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Daily Chart Analytics"}}};function f({datas:e}){var l,o,n,i;const t={labels:(l=e==null?void 0:e.sales)==null?void 0:l.map(r=>r.label),datasets:[{label:"Sales",data:(o=e==null?void 0:e.sales)==null?void 0:o.map(r=>r.total_sales),borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Expenses",data:(n=e==null?void 0:e.expenses)==null?void 0:n.map(r=>r.total_expenses),borderColor:"rgb(53, 162, 235)",backgroundColor:"rgba(53, 162, 235, 0.5)"},{label:"Charges",data:(i=e==null?void 0:e.charges)==null?void 0:i.map(r=>r.total_charge),borderColor:"rgb(0, 230, 0)",backgroundColor:"rgb(153, 255, 153)"}]};return s(h,{options:x,data:t})}export{f as BranchLineChart,x as options};
