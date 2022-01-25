import React, { useState } from "react"
import axios from "axios"

import './sim-cards.css'

const SimCards = () => {

    const [simCards, setSimCards] = useState(null)

    const fetchData = async () => {
        const response = await axios.get('/api/sim/sim-cards')
        setSimCards(response.data)
        console.log(response.data)
    }

    return (
        <div>
            <div>
                <button className="fetch-button" onClick={fetchData}>
                    Fetch Data
                </button>
            </div>

            <div className={'container container-fluid'}>
                <table>
                    <tr>
                        <div className='row'>
                            <div className={'col-sm-4'}>
                                <th>FCC ID</th>
                            </div>
                            <div className={'col-sm-4'}>
                                <th>№ телефона СИМ</th>
                            </div>
                            <div className={'col-sm-4'}>
                                <th>Дата установки</th>
                            </div>
                        </div>
                    </tr>
                </table>
                {simCards &&
                simCards.map((simCard, index) => {
                    return (
                        <table>
                            <tr>
                                <div className={'row'}>
                                    <div className={'col-sm-4'}>
                                        <td>{simCard.fccId}</td>
                                    </div>
                                    <div className={'col-sm-4'}>
                                        <td>{simCard.simNumber}</td>
                                    </div>
                                    <div className={'col-sm-4'}>
                                        <td>{simCard.mountingDate}</td>
                                    </div>
                                </div>
                            </tr>
                        </table>
                    )
                })}
            </div>
        </div>
    )
}

export default SimCards