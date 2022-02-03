import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"

import './facility-add.css'
import {facilityAdd} from "../../actions/facility";

/*import {facilityAdd} from "../../actions/facility"*/

const FacilityAdd = () => {

    const history = useNavigate()

    const [inputType, setInputType] = useState('text')
    const { register, handleSubmit } = useForm()

    function onSubmit(data) {
        facilityAdd()
        console.log(data)
        history('/')
    }

    const handleTypeChange = () => {
        setInputType('date')
    }

    /*const [organization, setOrganization] = useState("")
    const [facility, setFacility] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNumbers, setPhoneNumbers] = useState("")
    const [contructNumber, setContructNumber] = useState("")
    const [contructDate, setContructDate] = useState(null)
    const [price, setPrice] = useState(null)
    const [priceDate, setPriseDate] = useState(null)
    const [ownershipType, setOwnershipType] = useState("")
    const [facilityCategory, setFacilityCategory] = useState("")
    const [securityType, setSecurityType] = useState("")
    const [contructFileNumber, setContructFileNumber] = useState("")
    const [letteredFileNumber, setLetteredFileNumber] = useState("")*/

    /*const handleFacilityAdd = async () => {
        await facilityAdd(
            organization,
            facility,
            address,
            phoneNumbers)
        history('/')
    }*/

    return (
        <form className="bg-transparent" onSubmit={handleSubmit(onSubmit)}>
            <div className="container container-fluid container-body">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h2 className="h2-fa">Добавление объекта</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 text-center">
                        <input className="input-fa"
                               placeholder="Организация:"
                               {...register('organization')}
                               name={'organization'}
                        />
                        <input className="input-fa"
                               placeholder="Объект:"
                               {...register('facility')}
                               name={'facility'}
                        />
                        <input className="input-fa"
                               placeholder="Адрес:"
                               {...register('address')}
                               name={'address'}
                        />
                        <input className="input-fa"
                               placeholder="№ телефонов:"
                               {...register('phoneNumbers')}
                               name={'phoneNumbers'}
                        />
                        <input className="input-fa"
                               placeholder="№ договора:"
                               {...register('contructNumber')}
                               name={'contructNumber'}
                        />
                        <input className="input-fa"
                               type={inputType}
                               placeholder="Дата договора"
                               {...register('contructDate')}
                               name={'contructDate'}
                               onClick={handleTypeChange}
                        />
                        <input className="input-fa"
                               placeholder="Стоимость в месяц:"
                               {...register('price')}
                               name={'price'}
                        />
                        <input className="input-fa"
                               type={inputType}
                               placeholder="Дата тарифа"
                               {...register('price')}
                               name={'priceDate'}
                               onClick={handleTypeChange}
                        />
                    </div>
                    <div className="col-sm-4 text-center">
                        <select defaultValue={"0"}
                                className="select-fa"
                                {...register('ownershipType')}
                                name={'ownershipType'}
                        >
                            <option value="0" disabled>Форма собственности</option>
                            <option value="1">Государственная</option>
                            <option value="2">Прочая</option>
                        </select>
                        <select defaultValue={"0"}
                                className="select-fa"
                                {...register('facilityCategory')}
                                name={'facilityCategory'}
                        >
                            <option value="0" disabled>Категория</option>
                            <option value="1">АЗС</option>
                            <option value="2">Аптека</option>
                            <option value="3">Объект здравоохранения</option>
                            <option value="4">Объект образования</option>
                        </select>
                        <select defaultValue={"0"}
                                className="select-fa"
                                {...register('securityType')}
                                name={'securityType'}
                        >
                            <option value="0" disabled>Вид охраны</option>
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
                               {...register('contructFileNumber')}
                               name={'contructFileNumber'}
                        />
                        <input className="input-fa"
                               placeholder="№ литерного дела:"
                               {...register('letteredFileNumber')}
                               name={'letteredFileNumber'}
                        />
                        <select defaultValue={"0"}
                                className="select-fa"
                                {...register('spi')}
                                name={'spi'}
                        >
                            <option value="0" disabled>СПИ</option>
                            <option value="1">АСПИ Приток-GSM</option>
                            <option value="2">АСПИ Приток-Ethernet</option>
                            <option value="3">РСПИ Иртыш-3Р</option>
                        </select>
                        <select defaultValue={"0"}
                                className="select-fa"
                                {...register('facilityCategory')}
                                name={'facilityHardware'}
                        >
                            <option value="0" disabled>Объектовый прибор</option>
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
                               {...register('pultNumbers')}
                               name={'pultNumbers'}
                        />
                    </div>
                    <div className="col-sm-4 text-center">
                        <select defaultValue={"0"}
                                className="select-fa"
                                {...register('mountingOrganization')}
                                name={'mountingOrganization'}
                        >
                            <option value="0" disabled>Монтажная организация</option>
                            <option value="1">ООО Булгар</option>
                            <option value="2">ООО ЛенИС</option>
                            <option value="3">ООО ОСБ</option>
                            <option value="4">ООО Эгида</option>
                            <option value="5">ФГУП Охрана</option>
                            <option value="6">Отсутствует</option>
                        </select>
                        <select defaultValue={"0"}
                                className="select-fa"
                                {...register('survingOrganization')}
                                name={'survingOrganization'}
                        >
                            <option value="0" disabled>Обслуживающая организация</option>
                            <option value="1">ООО Булгар</option>
                            <option value="2">ООО ЛенИС</option>
                            <option value="3">ООО ОСБ</option>
                            <option value="4">ООО Эгида</option>
                            <option value="5">ФГУП Охрана</option>
                            <option value="6">Отсутствует</option>
                        </select>
                        <input className="input-fa"
                               placeholder="№ телефона СИМ:"
                               {...register('simNumber')}
                               name={'simNumber'}
                        />
                        <input className="input-fa"
                               placeholder="Заводской №:"
                               {...register('serialNumber')}
                               name={'serialNumber'}
                        />
                        <input className="input-fa"
                               placeholder="FCC ID:"
                               {...register('fccId')}
                               name={'fccId'}
                        />
                        <select defaultValue={"0"}
                                className="select-fa"
                                {...register('responsible')}
                                name={'responsible'}
                        >
                            <option value="0" disabled>Ответственный</option>
                            <option value="1">Белик А.П.</option>
                            <option value="2">Величко А.С.</option>
                            <option value="3">Шешиков Ю.С.</option>
                        </select>
                        <input className="input-fa"
                               placeholder="Подбор объекта:"
                               {...register('assortment')}
                               name={'assortment'}
                        />
                        <input className="input-fa"
                               placeholder="Часы охраны:"
                               {...register('securityHours')}
                               name={'securityHours'}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <button
                            type={'submit'}
                            className="btn btn-submit"
                            //onClick={handleFacilityAdd}
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