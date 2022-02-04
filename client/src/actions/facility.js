import axios from "axios"

const facilityAdd = async (
    organization, facility, address, phoneNumbers, contructNumber,
    contructDate, price, priceDate, ownershipType, facilitycategory,
    securityType, contructFileNumber, letteredFileNumber, spi,
    facilityHardware, pultNumbers, mountingOrganization,
    survingOrganization, simNumber, serialNumber, fccId, responsible,
    assortment, securityHours) => {
    try {
        const response = await axios.post(`/api/facility/facility-add`, {
            organization, facility, address, phoneNumbers, contructNumber,
            contructDate, price, priceDate, ownershipType, facilitycategory,
            securityType, contructFileNumber, letteredFileNumber, spi,
            facilityHardware, pultNumbers, mountingOrganization,
            survingOrganization, simNumber, serialNumber, fccId, responsible,
            assortment, securityHours
        })
        console.log(response.data.message)
    } catch (e) {
        console.log(e.response.data.message)
    }
}

export {
    facilityAdd
}