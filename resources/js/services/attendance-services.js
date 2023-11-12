import axios from "axios"

export async function get_account_attendance(data) {
    const response = await axios.post('/api/get_account_attendance',data)
    return response.data.status;
}

export async function get_branch_attendance(data) {
    const response = await axios.post('/api/get_branch_attendance',data)
    return response.data.status;
}

export async function check_attendance(data) {
    const response = await axios.post('/api/check_attendance',data)
    return response.data;
}