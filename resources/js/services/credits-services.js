import axios from "axios"

export async function get_account_credits_charge(id) {
    const response = await axios.get('/api/get_account_credits_charge/'+id)
    return response.data.status;
}

export async function get_all_credits_charge(branchid,date) {
    const response = await axios.post('/api/get_all_credits_charge',{
        date:date,
        branchid:branchid
    })
    return response.data.status;
}

export async function create_charge_credit(data) {
    const response = await axios.post('/api/create_charge_credit',data)
    return response.data;
}