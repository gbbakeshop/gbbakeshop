
export async function create_expenses(data) {
    const response = await axios.post('/api/create_expenses',data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    return response.data;
}

export async function get_branch_expenses(id) {
  const response = await axios.get('/api/get_branch_expenses/'+id)
  return response.data.status;
}