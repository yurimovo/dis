import axios from "axios"

const facilityAdd = async (
    organization,
    facility,
    address,
    phoneNumbers) => {
    try {
        const response = await axios.post(`/api/facility/facility-add`, {
            organization,
            facility,
            address,
            phoneNumbers
        })
        console.log(response.data.message)
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export {
    facilityAdd
}