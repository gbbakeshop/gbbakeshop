import axios from "axios"

export async function get_all_selecta() {
    const response = await axios.get('/api/get_all_selecta')
    return response.data.status;
}


export async function get_branch_selecta($branchid) {
    const response = await axios.get('/api/get_branch_selecta/'+$branchid)
    return response.data.status;
}