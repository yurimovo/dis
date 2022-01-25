import axios from "axios"

const simAdd = async (
    fccId,
    simNumber,
    mountingDate,
    pultNumber,
    mountingPlace,
    mountingAddress) => {
    try {
        const response = await axios.post(`/api/sim/sim-add`, {
            fccId,
            simNumber,
            mountingDate,
            pultNumber,
            mountingPlace,
            mountingAddress
        })
        console.log(response.data.message)
    } catch (e) {
        console.log(e.response.data.message)
    }
}

const getAllSimCards = async (simCards) => {
    try {
        const response = await axios.get('/api/sim/sim-cards', {})
        console.log(response.data.message)
    } catch (e) {}
}

export {
    simAdd,
    getAllSimCards
}