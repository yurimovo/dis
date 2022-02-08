import axios from "axios"

const apartmentAdd = async (
    owner, address, phoneNumbers, contructNumber,
    contructDate, price, priceDate, apartmentCategory,
    securityType, contructFileNumber, letteredFileNumber, spi,
    apartmentHardware, pultNumbers, simNumber, serialNumber,
    fccId, responsible, assortment) => {
    try {
        const response = await axios.post(`/api/apartment/apartment-add`, {
            owner, address, phoneNumbers, contructNumber,
            contructDate, price, priceDate, apartmentCategory,
            securityType, contructFileNumber, letteredFileNumber, spi,
            apartmentHardware, pultNumbers, simNumber, serialNumber,
            fccId, responsible, assortment
        })
        console.log(response.data.message)
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export {
    apartmentAdd
}