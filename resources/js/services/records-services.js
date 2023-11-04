
export async function get_branch_period(period,branchid) {
    const response = await axios.get('/api/get_branch_period/'+period+'/'+branchid)
    return response.data;
}



export async function get_record_of_the_day(branchid,data) {
    const response = await axios.post('/api/get_record_of_the_day',{
        branchid:branchid,
        date:data
    })
    return response.data;
}

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


export async function edit_bakers_report_records(data) {
    const response = await axios.put('/api/edit_bakers_report_records',data)
    return response.data;
}

export async function edit_bread_report_records(data) {
    const response = await axios.put('/api/edit_bread_report_records',data)
    return response.data;
}


export async function edit_sales_report_records(data) {
    const response = await axios.put('/api/edit_sales_report_records',data)
    return response.data;
}


export async function record_move_another_branch(data) {
    const response = await axios.put('/api/record_move_another_branch',data)
    return response.data;
}

export async function search_record(date) {
    const response = await axios.post('/api/search_record',{
        date:date
    })
    return response.data;
}