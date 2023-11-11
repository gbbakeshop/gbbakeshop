
export async function get_domination(data) {
    const response = await axios.post('/api/get_domination',data)
    return response.data;
}

export async function create_domination(data) {
    const response = await axios.post('/api/create_domination',data)
    return response.data;
}