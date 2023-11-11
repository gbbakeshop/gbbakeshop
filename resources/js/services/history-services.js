export async function get_branch_history(date) {
    const response = await axios.post('/api/get_branch_history',{
        date:date
    })
    return response.data.status;
}

export async function get_user_histories(id,find) {
    const response = await axios.get('/api/get_user_histories/'+id+'/'+find)
    return response.data.status;
}
