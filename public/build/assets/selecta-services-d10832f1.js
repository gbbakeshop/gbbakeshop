import{c as t}from"./app-471bb704.js";async function n(){return(await t.get("/api/get_all_selecta")).data.status}async function c(a){return(await t.get("/api/get_branch_selecta/"+a)).data.status}export{n as a,c as g};