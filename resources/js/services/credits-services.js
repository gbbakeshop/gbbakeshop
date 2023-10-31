import axios from "axios"

export async function get_account_credits_charge(id) {
    const response = await axios.get('/api/get_account_credits_charge/'+id)
    return response.data.status;
}

export async function get_all_credits_charge(branchid) {
    const response = await axios.get('/api/get_all_credits_charge/'+branchid)
    return response.data.status;
}