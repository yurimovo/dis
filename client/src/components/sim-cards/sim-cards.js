import React, { useEffect, useState } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'

import './sim-cards.css'

const SimCards = () => {

    const [simCards, setSimCards] = useState([])

    useEffect(() => {
        (async () => {
            const response = await axios.get('/api/sim/sim-cards')
            setSimCards(response.data)
            console.log(response.data)
        })()
    },[])

    return (
        <div>
            <div className={'container container-fluid'}>
                <div className='row'>
                    <div className={'col-sm-4'}>
                        <strong>FCC ID</strong>
                    </div>
                    <div className={'col-sm-4'}>
                        <strong>№ телефона СИМ</strong>
                    </div>
                    <div className={'col-sm-4'}>
                        <strong>Дата установки</strong>
                    </div>
                </div>
                {simCards &&
                simCards.map((simCard) => {
                    return (
                        <div key={simCard._id}>
                            <div className={'row'}>
                                <div
                                    className={'col-sm-4'}
                                >
                                    {simCard.fccId}
                                </div>
                                <div className={'col-sm-2'}>
                                    <Link to={`/sim-details/${simCard._id}`}>>></Link>
                                </div>
                                <div className={'col-sm-3'}>
                                    {simCard.simNumber}
                                </div>
                                <div className={'col-sm-3'}>
                                    {new Date(simCard.mountingDate).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SimCards