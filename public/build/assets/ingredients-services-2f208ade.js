import{f as n}from"./app-f46303a7.js";async function a(){return(await n.get("/api/get_all_ingredients")).data}async function i(e){return(await n.post("/api/create_ingredients",e)).data}async function r(e){return(await n.post("/api/add_selected_ingredients",e)).data}async function d(e){return(await n.post("/api/add_recipe_ingredients",e)).data}async function o(e){return(await n.put("/api/change_recipe_ingredients",e)).data}async function c(e){return(await n.delete("/api/delete_ingredients/"+e)).data}async function p(e){return(await n.delete("/api/delete_selected_ingredients/"+e)).data}async function _(e){return(await n.put("/api/update_ingredients/",e)).data}export{p as a,r as b,i as c,c as d,d as e,o as f,a as g,_ as u};
