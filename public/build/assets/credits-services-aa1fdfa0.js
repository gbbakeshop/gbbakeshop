import{k as e}from"./app-3485f549.js";async function c(a){return(await e.get("/api/get_account_credits_charge/"+a)).data.status}async function n(a,t){return(await e.post("/api/get_all_credits_charge",{date:t,branchid:a})).data.status}async function o(a){return(await e.post("/api/create_charge_credit",a)).data}export{n as a,o as c,c as g};