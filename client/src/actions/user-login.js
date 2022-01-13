import axios from 'axios'

export const authorization = async (userName, password) => {
    try {
        const response = await axios.post(`/api/auth/login`, {
            userName,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}