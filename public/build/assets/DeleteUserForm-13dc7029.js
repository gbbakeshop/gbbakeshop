import{r as n,W as g,j as t,a as e}from"./app-1c369c91.js";import{D as c,M as x,S as N}from"./SecondaryButton-24acc7a1.js";import{T as D,I as k}from"./TextInput-55722acb.js";import{I as v}from"./InputLabel-74285308.js";import"./dialog-a14cea3c.js";import"./open-closed-9458169d.js";import"./keyboard-8934977f.js";import"./hidden-f15b4249.js";import"./transition-f4441d24.js";function E({className:d}){const[i,a]=n.useState(!1),o=n.useRef(),{data:m,setData:u,delete:p,processing:y,reset:l,errors:f}=g({password:""}),h=()=>{a(!0)},w=s=>{s.preventDefault(),p(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>r(),onError:()=>o.current.focus(),onFinish:()=>l()})},r=()=>{a(!1),l()};return t("section",{className:`space-y-6 ${d}`,children:[t("header",{children:[e("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Delete Account"}),e("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),e(c,{onClick:h,children:"Delete Account"}),e(x,{show:i,onClose:r,children:t("form",{onSubmit:w,className:"p-6",children:[e("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Are you sure you want to delete your account?"}),e("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),t("div",{className:"mt-6",children:[e(v,{htmlFor:"password",value:"Password",className:"sr-only"}),e(D,{id:"password",type:"password",name:"password",ref:o,value:m.password,onChange:s=>u("password",s.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),e(k,{message:f.password,className:"mt-2"})]}),t("div",{className:"mt-6 flex justify-end",children:[e(N,{onClick:r,children:"Cancel"}),e(c,{className:"ml-3",disabled:y,children:"Delete Account"})]})]})})]})}export{E as default};
