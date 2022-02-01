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
    const [phoneNumbers, setPhoneNumbers] = useState("")
    const [contructNumber, setContructNumber] = useState("")
    const [contructDate, setContructDate] = useState(null)
    const [price, setPrice] = useState(null)
    const [priceDate, setPriceDate] = useState(null)
    const [ownershipType, setOwnershipType] = useState("")
    const [facilityCategory, setFacilityCategory] = useState("")
    const [securityType, setSecurityType] = useState("")
    const [contructFileNumber, setContructFileNumber] = useState(null)
    const [letteredFileNumber, setLetteredFileNumber] = useState(null)
    const [spi, setSpi] = useState("")
    const [facilityHardware, setFacilityHardware] = useState("")
    const [pullNumbers, setPullNumbers] = useState("")
    const [mountingOrganization, setMountingOrganization] = useState("")
    const [survingOrganization, setSurvingOrganization] = useState("")
    const [simNumber, setSimNumber] = useState("")
    const [serialNumber, setSerialNumber] = useState("")
    const [fccId, setFccId] = useState("")
    const [responsible, setResponsible] = useState("")
    const [assortment, setAssortment] = useState("")
    const [securityHours, setSecurityHours] = useState("")

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
                               value={contructNumber}
                               setValue={setContructNumber}
                        />
                        <input className="input-fa"
                            placeholder="Дата договора"
                               value={contructDate}
                               setValue={setContructDate}
                        />
                        <input className="input-fa"
                            placeholder="Стоимость в месяц:"
                               value={price}
                               setValue={setPrice}
                        />
                        <input className="input-fa"
                            placeholder="Дата тарифа"
                               value={priceDate}
                               setValue={setPriceDate}
                        />
                    </div>
                    <div className="col-sm-4 text-center">
                        <select className="select-fa"
                                value={ownershipType}
                                setValue={setOwnershipType}
                        >
                            <option value="0" selected disabled>Форма собственности</option>
                            <option value="1">Государственная</option>
                            <option value="2">Прочая</option>
                        </select>
                        <select className="select-fa"
                                value={facilityCategory}
                                setValue={setFacilityCategory}
                        >
                            <option value="0" selected disabled>Категория</option>
                            <option value="1">АЗС</option>
                            <option value="2">Аптека</option>
                            <option value="3">Объект здравоохранения</option>
                            <option value="4">Объект образования</option>
                        </select>
                        <select className="select-fa"
                                value={securityType}
                                setValue={setSecurityType}
                        >
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
                               value={contructFileNumber}
                               setValue={setContructFileNumber}
                        />
                        <input className="input-fa"
                            placeholder="№ литерного дела:"
                               value={letteredFileNumber}
                               setValue={setLetteredFileNumber}
                        />
                        <select className="select-fa"
                                value={spi}
                                setValue={setSpi}
                        >
                            <option value="0" selected disabled>СПИ</option>
                            <option value="1">АСПИ Приток-GSM</option>
                            <option value="2">АСПИ Приток-Ethernet</option>
                            <option value="3">РСПИ Иртыш-3Р</option>
                        </select>
                        <select className="select-fa"
                                value={facilityHardware}
                                setValue={setFacilityHardware}
                        >
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
                               value={pullNumbers}
                               setValue={setPullNumbers}
                        />
                    </div>
                    <div className="col-sm-4 text-center">
                        <select className="select-fa"
                                value={mountingOrganization}
                                setValue={setMountingOrganization}
                        >
                            <option value="0" selected disabled>Монтажная организация</option>
                            <option value="1">ООО Булгар</option>
                            <option value="2">ООО ЛенИС</option>
                            <option value="3">ООО ОСБ</option>
                            <option value="4">ООО Эгида</option>
                            <option value="5">ФГУП Охрана</option>
                            <option value="6">Отсутствует</option>
                        </select>
                        <select className="select-fa"
                                value={survingOrganization}
                                setValue={setSurvingOrganization}
                        >
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
                               value={simNumber}
                               setValue={setSimNumber}
                        />
                        <input className="input-fa"
                            placeholder="Заводской №:"
                               value={serialNumber}
                               setValue={setSerialNumber}
                        />
                        <input className="input-fa"
                            placeholder="FCC ID:"
                               value={fccId}
                               setValue={setFccId}
                        />
                        <select className="select-fa"
                                selected={[0]}
                                value={responsible}
                                onChange={setResponsible}
                        >
                            <option value="0" selected disabled>Ответственный</option>
                            <option value="1">Белик А.П.</option>
                            <option value="2">Величко А.С.</option>
                            <option value="3">Шешиков Ю.С.</option>
                        </select>
                        <input className="input-fa"
                            placeholder="Подбор объекта:"
                               value={assortment}
                               setValue={setAssortment}
                        />
                        <input className="input-fa"
                            placeholder="Часы охраны:"
                               value={securityHours}
                               setValue={setSecurityHours}
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