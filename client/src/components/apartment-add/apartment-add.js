import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios"

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'

import './apartment-add.css'

const ApartmentAdd = () => {

    const history = useNavigate()

    const [inputTypeContructDate, setInputTypeContructDate] = useState('text')
    const [inputTypePriceDate, setInputTypePriceDate] = useState('text')
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        await axios.post('/api/apartment/apartment-add', {data})
        console.log(data)
        history('/')
    }

    const handleTypeContructDateChange = () => {
        setInputTypeContructDate('date')
    }

    const handleTypePriceDateChange = () => {
        setInputTypePriceDate('date')
    }

    return (
        <form className="bg-transparent" onSubmit={handleSubmit(onSubmit)}>
            <div className="container container-fluid container-body">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h2 className="h2-fa">Добавление МХИГ</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 text-center">
                        <TextField className="input-fa"
                                   placeholder="Ф.И.О. собственника:"
                                   {...register('owner')}
                                   name={'owner'}
                        />
                        <TextField className="input-fa"
                                   placeholder="Адрес:"
                                   {...register('address')}
                                   name={'address'}
                        />
                        <TextField className="input-fa"
                                   placeholder="№ телефонов:"
                                   {...register('phoneNumbers')}
                                   name={'phoneNumbers'}
                        />
                        <TextField className="input-fa"
                                   placeholder="№ договора:"
                                   {...register('contructNumber')}
                                   name={'contructNumber'}
                        />
                        <TextField className="input-fa"
                                   type={inputTypeContructDate}
                                   placeholder="Дата договора"
                                   {...register('contructDate')}
                                   name={'contructDate'}
                                   onClick={handleTypeContructDateChange}
                        />
                        <TextField className="input-fa"
                                   placeholder="Стоимость в месяц:"
                                   {...register('price')}
                                   name={'price'}
                        />
                    </div>
                    <div className="col-sm-4 text-center">
                        <TextField className="input-fa"
                                   type={inputTypePriceDate}
                                   placeholder="Дата тарифа"
                                   {...register('price')}
                                   name={'priceDate'}
                                   onClick={handleTypePriceDateChange}
                        />
                        <Select defaultValue={"0"}
                                className="select-fa"
                                {...register('apartmentCategory')}
                                name={'apartmentCategory'}
                        >
                            <option value="0" disabled>Категория</option>
                            <option value="1">Гараж</option>
                            <option value="2">Квартира</option>
                            <option value="3">Коттедж</option>
                            <option value="4">Частный дом</option>
                        </Select>
                        <Select defaultValue={"0"}
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
                        </Select>
                        <TextField className="input-fa"
                                   placeholder="№ договорного дела:"
                                   {...register('contructFileNumber')}
                                   name={'contructFileNumber'}
                        />
                        <TextField className="input-fa"
                                   placeholder="№ литерного дела:"
                                   {...register('letteredFileNumber')}
                                   name={'letteredFileNumber'}
                        />
                        <Select defaultValue={"0"}
                                className="select-fa"
                                {...register('spi')}
                                name={'spi'}
                        >
                            <option value="0" disabled>СПИ</option>
                            <option value="1">АСПИ Приток-GSM</option>
                            <option value="2">АСПИ Приток-Ethernet</option>
                            <option value="3">РСПИ Иртыш-3Р</option>
                        </Select>
                        <Select defaultValue={"0"}
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
                        </Select>
                    </div>
                    <div className="col-sm-4 text-center">
                        <TextField className="input-fa"
                                   placeholder="Пультовые номера:"
                                   {...register('pultNumbers')}
                                   name={'pultNumbers'}
                        />
                        <TextField className="input-fa"
                                   placeholder="№ телефона СИМ:"
                                   {...register('simNumber')}
                                   name={'simNumber'}
                        />
                        <TextField className="input-fa"
                                   placeholder="Заводской №:"
                                   {...register('serialNumber')}
                                   name={'serialNumber'}
                        />
                        <TextField className="input-fa"
                                   placeholder="FCC ID:"
                                   {...register('fccId')}
                                   name={'fccId'}
                        />
                        <Select defaultValue={"0"}
                                className="select-fa"
                                {...register('responsible')}
                                name={'responsible'}
                        >
                            <option value="0" disabled>Ответственный</option>
                            <option value="1">Белик А.П.</option>
                            <option value="2">Величко А.С.</option>
                            <option value="3">Шешиков Ю.С.</option>
                        </Select>
                        <TextField className="input-fa"
                                   placeholder="Подбор объекта:"
                                   {...register('assortment')}
                                   name={'assortment'}
                        />
                    </div>
                </div>
                <div className="row row-mb">
                    <div className="col-sm-12 text-center">
                        <Button
                            type={'submit'}
                            variant={'contained'}
                            className="btn btn-submit"
                            //onClick={handleFacilityAdd}
                        >
                            Добавить
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ApartmentAdd