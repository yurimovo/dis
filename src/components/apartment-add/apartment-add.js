import React, { useState } from "react"
import { useForm } from "react-hook-form"

import './apartment-add.css'

const ApartmentAdd = () => {

    const [contructDateType, setContructDateType] = useState('text')
    const [priceDateType, setPriceDateType] = useState('text')

    const typeContructDateChange = () => {
        setContructDateType('date')
    }

    const typePriceDateChange = () => {
        setPriceDateType('date')
    }

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    })

    const onSubmit = (apartmentData) => {
        console.log(apartmentData)
        reset()
    }

    return (
        <form className="bg-transparent"  onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h2 className="h2-aa">Добавление МХИГ</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 text-center">
                        <input className="input-aa"
                            placeholder="ФИО собственника:"
                            {...register('owner', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.owner && 
                            <p className="text-danger">{errors?.owner?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-aa"
                            placeholder="Адрес:"
                            {...register('address', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.address && 
                            <p className="text-danger">{errors?.address?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-aa"
                            placeholder="№ телефона:"
                            {...register('phoneNumbers', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.phoneNumbers && 
                            <p className="text-danger">{errors?.phoneNumbers?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-aa"
                            placeholder="№ договора:"
                            {...register('contructNumber', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.contructNumber && 
                            <p className="text-danger">{errors?.contructNumber?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-aa"
                            type={contructDateType}
                            placeholder="Дата договора"
                            onFocus={typeContructDateChange}
                            {...register('contructDate', {
                                required: 'Поле обязательно для заполнения',
                                valueIsDate: {
                                    value: true,
                                    message: 'В поле должна быть дата'
                                }
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.contructDate && 
                            <p className="text-danger">{errors?.contructDate?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-aa"
                            placeholder="Стоимость в месяц:"
                            {...register('price', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.price && 
                            <p className="text-danger">{errors?.price?.message || 'Error:'}</p>}
                        </div>
                    </div>
                    <div className="col-sm-4 text-center">
                        <input className="input-aa"
                            type={priceDateType}
                            placeholder="Дата тарифа"
                            onFocus={typePriceDateChange}
                            {...register('priceDate', {
                                required: 'Поле обязательно для заполнения',
                                valueIsDate: {
                                    value: true,
                                    message: 'В поле должна быть дата'
                                }
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.priceDate && 
                            <p className="text-danger">{errors?.priceDate?.message || 'Error:'}</p>}
                        </div>
                        <select className="select-aa" {...register("apartmentCategory", { required: true })}>
                            <option value="0" selected disabled>Категория</option>
                            <option value="1">Гараж</option>
                            <option value="2">Квартира</option>
                            <option value="3">Коттедж</option>
                            <option value="4">Частный дом</option>
                        </select>
                        <div style={{height: 40}}>
                            {errors?.apartmentCategory && 
                            <p className="text-danger">{errors?.apartmentCategory?.message || 'Error:'}</p>}
                        </div>
                        <select className="select-aa" {...register("securityType", { required: true })}>
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
                        <div style={{height: 40}}>
                            {errors?.securityType && 
                            <p className="text-danger">{errors?.securityType?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-aa"
                            placeholder="№ договорного дела:"
                            {...register('contructFileNumber', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.contructFileNumber && 
                            <p className="text-danger">{errors?.contructFileNumber?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-aa"
                            placeholder="№ литерного дела:"
                            {...register('letteredFileNumber', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.letteredFileNumber && 
                            <p className="text-danger">{errors?.letteredFileNumber?.message || 'Error:'}</p>}
                        </div>
                        <select className="select-aa" {...register("spi", { required: true })}>
                            <option value="0" selected disabled>СПИ</option>
                            <option value="1">АСПИ Приток-GSM</option>
                            <option value="2">АСПИ Приток-Ethernet</option>
                            <option value="3">РСПИ Иртыш-3Р</option>
                        </select>
                        <div style={{height: 40}}>
                            {errors?.spi && 
                            <p className="text-danger">{errors?.spi?.message || 'Error:'}</p>}
                        </div>
                    </div>
                    <div className="col-sm-4 text-center">
                        <select className="select-aa" {...register("apartmentHardware", { required: true })}>
                            <option value="0" selected disabled>Оборудование</option>
                            <option value="1">БО Иртыш-112</option>
                            <option value="2">БО Иртыш-113(113-3)</option>
                            <option value="3">БО Иртыш-214</option>
                            <option value="4">БО Иртыш-214-GSM</option>
                            <option value="5">Мобильный телохранитель</option>
                            <option value="6">ППКОП Приток 011-8-1-011(М)</option>
                            <option value="7">ППКОП Приток-А-КОП-02(03,04,05)</option>
                        </select>
                        <div style={{height: 40}}>
                            {errors?.apartmentHardware && 
                            <p className="text-danger">{errors?.apartmentHardware?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-aa"
                            placeholder="Пультовые номера:"
                            {...register('pultNumbers', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.pultNumbers && 
                            <p className="text-danger">{errors?.pultNumbers?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-aa"
                            placeholder="№ телефона СИМ:"
                            {...register('simNumber', {
                                required: 'Поле обязательно для заполнения',
                                maxLength: {
                                    value: 12,
                                    message: 'Максимальная длина 12 символов'
                                }
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.simNumber && 
                            <p className="text-danger">{errors?.simNumber?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-aa"
                            placeholder="Заводской №:"
                            {...register('serialNumber', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.serialNumber && 
                            <p className="text-danger">{errors?.serialNumber?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-aa"
                            placeholder="FCC ID:"
                            {...register('fccId', {
                                required: 'Поле обязательно для заполнения',
                                maxLength: {
                                    value: 19,
                                    message: 'Максимальная длина 19 символов'
                                }
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.fccId && <p className="text-danger">{errors?.fccId?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-aa"
                            placeholder="Подбор МХИГ:"
                            {...register('assortment', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.assortment && 
                            <p className="text-danger">{errors?.assortment?.message || 'Error:'}</p>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <input className="btn btn-success" type="submit" disabled={!isValid} />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ApartmentAdd