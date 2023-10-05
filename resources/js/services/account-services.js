import axios from "axios"

export async function get_all_accounts() {
    const response = await axios.get('/api/get_all_accounts')
    return response.data.status;
}

export async function get_branch_accounts($branchid) {
    const response = await axios.get('/api/get_branch_accounts/'+$branchid)
    return response.data.status;
}