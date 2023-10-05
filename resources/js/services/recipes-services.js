import axios from "axios"

export async function get_all_recipes() {
    const response = await axios.get('/api/get_all_recipes')
    return response.data.status;
}

export async function create_recipes(data) {
    const response = await axios.post('/api/create_recipes',data)
    return response.data;
}
// export async function get_branch_recipes() {
//     const response = await axios.get('/api/get_branch_recipes')
//     return response.data.status;
// }