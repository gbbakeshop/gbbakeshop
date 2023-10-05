import axios from "axios"

export async function get_all_raw_materials() {
    const response = await axios.get('/api/get_all_raw_materials')
    return response.data.status;
}

export async function get_branch_raw_materials(branchid) {
    const response = await axios.get('/api/get_branch_raw_materials/'+branchid)
    return response.data.status;
}


export async function edit_raw_materials(data) {
    const response = await axios.put('/api/edit_raw_materials',data)
    return response.data;
}

export async function edit_branch_raw_materials(data) {
    const response = await axios.put('/api/edit_branch_raw_materials',data)
    return response.data;
}


export async function delete_raw_materials(id) {
    const response = await axios.delete('/api/delete_raw_materials/'+id)
    return response.data;
}

export async function create_raw_materials(data) {
    const response = await axios.post('/api/create_raw_materials',data)
    return response.data;
}
