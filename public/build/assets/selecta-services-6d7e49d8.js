import{k as t}from"./app-1c369c91.js";async function n(){return(await t.get("/api/get_all_selecta")).data.status}async function r(a){return(await t.get("/api/get_branch_selecta/"+a)).data.status}export{n as a,r as g};