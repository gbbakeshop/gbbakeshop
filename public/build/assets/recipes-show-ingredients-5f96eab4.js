import{r as i,j as t,F as c,a as e}from"./app-41cc0b88.js";import{X as m}from"./x-mark-icon-74cd7f9d.js";import{E as p}from"./eyes-icon-301cd51b.js";import{t as s}from"./transition-8fbb313c.js";import{_ as o}from"./dialog-ad4f0c03.js";import"./open-closed-e1999277.js";import"./keyboard-4c58af20.js";import"./hidden-5f273b7b.js";function y({data:r}){const[d,l]=i.useState(!1);return t(c,{children:[e("button",{className:"text-green-500 ",onClick:()=>l(!0),children:e(p,{})}),e(s.Root,{show:d,as:i.Fragment,children:t(o,{as:"div",className:"relative z-10",onClose:l,children:[e(s.Child,{as:i.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-10 transition-opacity"})}),e("div",{className:"fixed inset-0 overflow-hidden",children:e("div",{className:"absolute inset-0 overflow-hidden",children:e("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e(s.Child,{as:i.Fragment,enter:"transform transition ease-in-out duration-500 sm:duration-700",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:t(o.Panel,{className:"pointer-events-auto relative w-screen max-w-md",children:[e(s.Child,{as:i.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4",children:t("button",{type:"button",className:"relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",onClick:()=>l(!1),children:[e("span",{className:"absolute -inset-2.5"}),e("span",{className:"sr-only",children:"BREAD LIST"}),e(m,{className:"h-6 w-6","aria-hidden":"true"})]})})}),t("div",{className:"flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl",children:[e("div",{className:"px-4 sm:px-6",children:e(o.Title,{className:"text-base font-semibold leading-6 text-gray-900",children:"Panel title"})}),e("div",{className:"relative mt-6 flex-1 px-4 sm:px-6",children:t("div",{children:[e("div",{className:"grid grid-rows-6 grid-flow-col gap-1",children:r==null?void 0:r.selected_breads.map((n,a)=>e("div",{className:"flex-none text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-red-50 border border-red-50 text-red-500 rounded",children:n.bread_name},a))}),e("div",{className:"grid grid-rows-1 grid-flow-col gap-1 text-lg font-semibold",children:"RECIPES"}),(r==null?void 0:r.selected_ingredients.length)==0?e("h5",{className:" text-base font-semibold text-red-500 dark:text-red-400",children:"No Ingredients designated!"}):e("div",{className:"grid grid-rows-6 grid-flow-col gap-1",children:r==null?void 0:r.selected_ingredients.map((n,a)=>t("div",{className:"flex-none text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-red-50 border border-red-50 text-red-500 rounded",children:[n.raw_materials," ","- (",n.quantity,"gm)"]},a))})]})})]})]})})})})})]})})]})}export{y as default};