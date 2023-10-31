async function a(t){return(await axios.post("/api/get_branch_history",{date:t})).data.status}export{a as g};
