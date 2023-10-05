import axios from "axios"

export async function get_all_breads() {
    const response = await axios.get('/api/get_all_breads')
    return response.data.status;
}


export async function create_breads(data) {
    const response = await axios.post('/api/create_breads',{
        data:data
    })
    return response.data;
}

export async function delete_breads(id) {
    const response = await axios.delete('/api/delete_breads/'+id)
    return response.data;
}

export async function update_breads(data) {
    const response = await axios.put('/api/update_breads',{
        data:data
    })
    return response.data;
}