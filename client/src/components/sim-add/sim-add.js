import React, {useState} from "react"
import { useNavigate } from "react-router-dom"

import './sim-add.css'

import {simAdd} from "../../actions/sim"

const SimAdd = () => {

    const history = useNavigate()

    const [inputType, setInputType] = useState('text')

    const [fccId, setFccId] = useState("")
    const [simNumber, setSimNumber] = useState("")
    const [mountingDate, setMountingDate] = useState("")
    const [pultNumber, setPultNumber] = useState("")
    const [mountingPlace, setMountingPlace] = useState("")
    const [mountingAddress, setMountingAddress] = useState("")

    const handleSimAdd = async () => {
        await simAdd(
            fccId,
            simNumber,
            mountingDate,
            pultNumber,
            mountingPlace,
            mountingAddress)
        history('/')
    }

    const handleTypeChange = () => {
        setInputType('date')
    }

    return (
        <form className="bg-transparent">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h2 className="h2-sa">Добавить СИМ</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <input
                            className="input-sa"
                            value={fccId}
                            setValue={setFccId}
                            type="text"
                            placeholder="FCC ID..."
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <input
                            className="input-sa"
                            value={simNumber}
                            setValue={setSimNumber}
                            type="text"
                            placeholder="№ телефона СИМ..."
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <input
                            className="input-sa"
                            type={inputType}
                            placeholder="Дата установки"
                            value={mountingDate}
                            setValue={setMountingDate}
                            onClick={handleTypeChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <input
                            className="input-sa"
                            value={pultNumber}
                            setValue={setPultNumber}
                            type="text"
                            placeholder="Пультовый №..."
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <input
                            className="input-sa"
                            value={mountingPlace}
                            setValue={setMountingPlace}
                            type="text"
                            placeholder="Место установки..."
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <input
                            className="input-sa"
                            value={mountingAddress}
                            setValue={setMountingAddress}
                            type="text"
                            placeholder="Адрес установки..."
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <button
                            className="btn btn-submit btn-add"
                            onClick={handleSimAdd}
                        >
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SimAdd