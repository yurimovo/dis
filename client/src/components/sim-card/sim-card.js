import React from "react"

const SimCard = ({ sim }) => {
    return (
        <>
            <h2>SIM Card</h2>
            <p>FCCID: {sim.fccId}</p>
            <p>№ телефона СИМ: {sim.simNumber}</p>
            <p>Дата установки: {new Date(sim.mountingDate).toLocaleDateString()}</p>
            <p>Пультовый №: {sim.pultNumber}</p>
            <p>Место установки: {sim.mountingPlace}</p>
            <p>Адрес установки: {sim.mountingAddress}</p>
        </>
    )
}

export default SimCard