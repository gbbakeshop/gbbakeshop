import axios from "axios"

export async function get_all_branches() {
    const response = await axios.get('/api/get_all_branches')
    return response.data.status;
}