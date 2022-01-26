import React, {useEffect, useState} from "react"
import axios from "axios"

import './sim-cards.css'

const SimCards = () => {

    const [simCards, setSimCards] = useState(null)

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
                simCards.map((simCard, index) => {
                    const correctDate = new Date(simCard.mountingDate).toLocaleDateString()
                    return (
                        <div>
                            <div className={'row'}>
                                <div
                                    className={'col-sm-4'}
                                >
                                    <a href={`/sim-cards/:${simCard.fccId}`}>{simCard.fccId}</a>
                                </div>
                                <div className={'col-sm-4'}>
                                    {simCard.simNumber}
                                </div>
                                <div className={'col-sm-4'}>
                                    {correctDate}
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