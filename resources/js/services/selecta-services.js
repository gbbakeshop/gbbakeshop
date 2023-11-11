import axios from "axios"


export async function get_branch_selecta_history(data) {
    const response = await axios.post('/api/get_branch_selecta_history',data)
    return response.data.status;
}

export async function update_selecta_quantity_record(data) {
    const response = await axios.post('/api/update_selecta_quantity_record',data)
    return response.data;
}

export async function update_selecta_quantity(data) {
    const response = await axios.post('/api/update_selecta_quantity',data)
    return response.data;
}

export async function update_selecta_remaining(data) {
    const response = await axios.post('/api/update_selecta_remaining',data)
    return response.data;
}

export async function update_selecta(data) {
    const response = await axios.post('/api/update_selecta',data)
    return response.data;
}

export async function delete_selecta(id) {
    const response = await axios.delete('/api/delete_selecta/'+id)
    return response.data;
}

export async function create_selecta(data) {
    const response = await axios.post('/api/create_selecta',data)
    return response.data;
}



export async function get_all_selecta() {
    const response = await axios.get('/api/get_all_selecta')
    return response.data.status;
}


export async function get_branch_selecta(branchid) {
    const response = await axios.get('/api/get_branch_selecta/'+branchid)
    return response.data.status;
}

export async function get_branch_selecta_records(data) {
    const response = await axios.post('/api/get_branch_selecta_records',data)
    return response.data.status;
}

