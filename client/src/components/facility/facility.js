import React from 'react'

const Facility = ({ facility }) => {
    return (
        <>
            <h2>Объект</h2>
            <p>Организация: {facility.organization}</p>
            <p>Объект: {facility.facility}</p>
            <p>Адрес: {facility.address}</p>
            <p>№ телефонов: {facility.phoneNumbers}</p>
            <p>№ договора: {facility.contructNumber}</p>
            <p>Дата договора: {new Date(facility.mountingAddress).toLocaleDateString()}</p>
        </>
    )
}

export default Facility