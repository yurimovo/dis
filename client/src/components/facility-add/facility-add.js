import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

import './facility-add.css'

import {facilityAdd} from "../../actions/facility"
import Input from "../../utils/input/Input";

const FacilityAdd = () => {

    const history = useNavigate()

    const [organization, setOrganization] = useState("")
    const [facility, setFacility] = useState("")
    const [address, setAddress] = useState("")
    const [contructNumber, setContructNumber] = useState("")
    const [contructDate, setContructDate] = useState(null)
    const [price, setPrice] = useState(null)
    const [priceDate, setPriseDate] = useState(null)
    const [ownershipType, setOwnershipType] = useState("")
    const [phoneNumbers, setPhoneNumbers] = useState("")
    const [phoneNumbers, setPhoneNumbers] = useState("")
    const [phoneNumbers, setPhoneNumbers] = useState("")
    const [phoneNumbers, setPhoneNumbers] = useState("")
    const [phoneNumbers, setPhoneNumbers] = useState("")
    const [phoneNumbers, setPhoneNumbers] = useState("")
    const [phoneNumbers, setPhoneNumbers] = useState("")

    const handleFacilityAdd = async () => {
        await facilityAdd(
            organization,
            facility,
            address,
            phoneNumbers)
        history('/')
    }

    return (
        <form className="bg-transparent">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h2 className="h2-fa">Добавление объекта</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 text-center">
                        <Input className="input-fa"
                            placeholder="Организация:"
                            value={organization}
                            setValue={setOrganization}
                        />
                        <Input className="input-fa"
                            placeholder="Объект:"
                            value={facility}
                            setValue={setFacility}
                        />
                        <Input className="input-fa"
                            placeholder="Адрес:"
                            value={address}
                            setValue={setAddress}
                        />
                        <Input className="input-fa"
                            placeholder="№ телефонов:"
                            value={phoneNumbers}
                            setValue={setPhoneNumbers}
                        />
                        <input className="input-fa"
                            placeholder="№ договора:"
                        />
                        <input className="input-fa"
                            placeholder="Дата договора"
                        />
                        <input className="input-fa"
                            placeholder="Стоимость в месяц:"
                        />
                        <input className="input-fa"
                            placeholder="Дата тарифа"
                        />
                    </div>
                    <div className="col-sm-4 text-center">
                        <select className="select-fa">
                            <option value="0" selected disabled>Форма собственности</option>
                            <option value="1">Государственная</option>
                            <option value="2">Прочая</option>
                        </select>
                        <select className="select-fa">
                            <option value="0" selected disabled>Категория</option>
                            <option value="1">АЗС</option>
                            <option value="2">Аптека</option>
                            <option value="3">Объект здравоохранения</option>
                            <option value="4">Объект образования</option>
                        </select>
                        <select className="select-fa">
                            <option value="0" selected disabled>Вид охраны</option>
                            <option value="1">КТС GSM</option>
                            <option value="2">ПЦН GSM</option>
                            <option value="3">ПЦН+КТС GSM</option>
                            <option value="4">КТС Ethernet</option>
                            <option value="5">ПЦН Ethernet</option>
                            <option value="6">ПЦН+КТС Ethernet</option>
                            <option value="7">КТС Радио</option>
                            <option value="8">ПЦН Радио</option>
                            <option value="9">ПЦН+КТС Радио</option>
                        </select>
                        <input className="input-fa"
                            placeholder="№ договорного дела:"
                        />
                        <input className="input-fa"
                            placeholder="№ литерного дела:"
                        />
                        <select className="select-fa">
                            <option value="0" selected disabled>СПИ</option>
                            <option value="1">АСПИ Приток-GSM</option>
                            <option value="2">АСПИ Приток-Ethernet</option>
                            <option value="3">РСПИ Иртыш-3Р</option>
                        </select>
                        <select className="select-fa">
                            <option value="0" selected disabled>Объектовый прибор</option>
                            <option value="1">БО Иртыш-112</option>
                            <option value="2">БО Иртыш-113(113-3)</option>
                            <option value="3">БО Иртыш-214</option>
                            <option value="4">БО Иртыш-214-GSM</option>
                            <option value="5">Мобильный телохранитель</option>
                            <option value="6">ППКОП Приток 011-8-1-011(М)</option>
                            <option value="7">ППКОП Приток-А-КОП-02(03,04,05)</option>
                        </select>
                        <input className="input-fa"
                            placeholder="Пультовые номера:"
                        />
                    </div>
                    <div className="col-sm-4 text-center">
                        <select className="select-fa">
                            <option value="0" selected disabled>Монтажная организация</option>
                            <option value="1">ООО Булгар</option>
                            <option value="2">ООО ЛенИС</option>
                            <option value="3">ООО ОСБ</option>
                            <option value="4">ООО Эгида</option>
                            <option value="5">ФГУП Охрана</option>
                            <option value="6">Отсутствует</option>
                        </select>
                        <select className="select-fa">
                            <option value="0" selected disabled>Обслуживающая организация</option>
                            <option value="1">ООО Булгар</option>
                            <option value="2">ООО ЛенИС</option>
                            <option value="3">ООО ОСБ</option>
                            <option value="4">ООО Эгида</option>
                            <option value="5">ФГУП Охрана</option>
                            <option value="6">Отсутствует</option>
                        </select>
                        <input className="input-fa"
                            placeholder="№ телефона СИМ:"
                        />
                        <input className="input-fa"
                            placeholder="Заводской №:"
                        />
                        <input className="input-fa"
                            placeholder="FCC ID:"
                        />
                        <select className="select-fa">
                            <option value="0" selected disabled>Ответственный</option>
                            <option value="1">Белик А.П.</option>
                            <option value="2">Величко А.С.</option>
                            <option value="3">Шешиков Ю.С.</option>
                        </select>
                        <input className="input-fa"
                            placeholder="Подбор объекта:"
                        />
                        <input className="input-fa"
                            placeholder="Часы охраны:"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <button
                            className="btn btn-submit btn-add"
                            onClick={handleFacilityAdd}
                        >
                            Добавить
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default FacilityAdd