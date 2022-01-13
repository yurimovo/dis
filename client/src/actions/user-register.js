import axios from 'axios'

export const registration = async (userName, password) => {
    try {
        const response = await axios.post(`/api/auth/register`, {
            userName,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }

}