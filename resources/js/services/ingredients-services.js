import axios from "axios"

export async function get_all_ingredients() {
    const response = await axios.get('/api/get_all_ingredients')
    return response.data;
}


export async function create_ingredients(data) {
    const response = await axios.post('/api/create_ingredients',data)
    return response.data;
}

export async function add_selected_ingredients(data) {
    const response = await axios.post('/api/add_selected_ingredients',data)
    return response.data;
}

export async function add_recipe_ingredients(data) {
    const response = await axios.post('/api/add_recipe_ingredients',data)
    return response.data;
}

export async function change_recipe_ingredients(data) {
    const response = await axios.put('/api/change_recipe_ingredients',data)
    return response.data;
}

export async function delete_ingredients(id) {
    const response = await axios.delete('/api/delete_ingredients/'+id)
    return response.data;
}

export async function delete_selected_ingredients(id) {
    const response = await axios.delete('/api/delete_selected_ingredients/'+id)
    return response.data;
}

export async function update_ingredients(data) {
    const response = await axios.put('/api/update_ingredients/',data)
    return response.data;
}