import axios from "axios"

export async function get_all_accounts() {
    const response = await axios.get('/api/get_all_accounts')
    return response.data.status;
}

export async function get_branch_accounts(branchid) {
    const response = await axios.get('/api/get_branch_accounts/'+branchid)
    return response.data.status;
}

export async function get_specific_accounts(userid) {
    const response = await axios.get('/api/get_specific_accounts/'+userid)
    return response.data.status;
}


export async function register_account(data) {
    const response = await axios.post('/api/register_accounts',data)
    return response.data;
}


export async function delete_account(id) {
    const response = await axios.delete('/api/delete_accounts/'+id)
    return response.data;
}

export async function update_personal_information(data) {
    const response = await axios.put('/api/update_personal_information',data)
    return response.data;
}

export async function update_personal_credentials(data) {
    const response = await axios.put('/api/update_personal_credentials',data)
    return response.data;
}