import{f as s}from"./app-46232a11.js";async function r(){return(await s.get("/api/get_all_recipes")).data.status}async function n(e){return(await s.post("/api/create_recipes",e)).data}export{n as c,r as g};
