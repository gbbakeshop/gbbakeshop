export async function create_new_records(data) {
    const response = await axios.post('/api/create_new_records',data)
    return response.data;
}

export async function get_records(data) {
    const response = await axios.post('/api/get_records',data)
    return response.data;
}

export async function move_records(data) {
    const response = await axios.post('/api/move_records',data)
    return response.data;
}

export async function move_sales_records(data) {
    const response = await axios.post('/api/move_sales_records',data)
    return response.data;
}
