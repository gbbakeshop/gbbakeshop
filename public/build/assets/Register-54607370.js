import{W as p,r as f,j as a,a as e,b as g,d as h}from"./app-bb52e482.js";import{G as w}from"./GuestLayout-4d2db765.js";import{T as m,I as i}from"./TextInput-30b5068a.js";import{I as l}from"./InputLabel-c1984a19.js";import{P as N}from"./PrimaryButton-4157914e.js";import"./ApplicationLogo-c0789394.js";function F(){const{data:r,setData:n,post:d,processing:u,errors:t,reset:c}=p({name:"",email:"",password:"",password_confirmation:""});f.useEffect(()=>()=>{c("password","password_confirmation")},[]);const o=s=>{n(s.target.name,s.target.type==="checkbox"?s.target.checked:s.target.value)};return a(w,{children:[e(g,{title:"Register"}),a("form",{onSubmit:s=>{s.preventDefault(),d(route("register"))},children:[a("div",{children:[e(l,{htmlhtmlFor:"name",value:"Name"}),e(m,{id:"name",name:"name",value:r.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:o,required:!0}),e(i,{message:t.name,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(l,{htmlhtmlFor:"email",value:"Email"}),e(m,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",onChange:o,required:!0}),e(i,{message:t.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(l,{htmlhtmlFor:"password",value:"Password"}),e(m,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:o,required:!0}),e(i,{message:t.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(l,{htmlhtmlFor:"password_confirmation",value:"Confirm Password"}),e(m,{id:"password_confirmation",type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:o,required:!0}),e(i,{message:t.password_confirmation,className:"mt-2"})]}),a("div",{className:"flex items-center justify-end mt-4",children:[e(h,{href:route("login"),className:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",children:"Already registered?"}),e(N,{className:"ml-4",disabled:u,children:"Register"})]})]})]})}export{F as default};
