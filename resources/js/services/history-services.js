export async function get_branch_history(date) {
    const response = await axios.post('/api/get_branch_history',{
        date:date
    })
    return response.data.status;
}
