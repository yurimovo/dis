import React, { useState } from "react"
import { useForm } from "react-hook-form"

import './facility-add.css'

const FacilityAdd = () => {

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

    const onSubmit = (facilityData) => {
        console.log(facilityData)
        reset()
    }

    return (
        <form className="bg-transparent"  onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h2 className="h2-fa">Добавление объекта</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4 text-center">
                        <input className="input-fa"
                            placeholder="Организация:"
                            {...register('organization', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.organization && 
                            <p className="text-danger">{errors?.organization?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-fa"
                            placeholder="Объект:"
                            {...register('facility', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.facility && 
                            <p className="text-danger">{errors?.facility?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-fa"
                            placeholder="Адрес:"
                            {...register('address', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.address && 
                            <p className="text-danger">{errors?.address?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-fa"
                            placeholder="№ телефона:"
                            {...register('phoneNumbers', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.phoneNumbers && 
                            <p className="text-danger">{errors?.phoneNumbers?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-fa"
                            placeholder="№ договора:"
                            {...register('contructNumber', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.contructNumber && 
                            <p className="text-danger">{errors?.contructNumber?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-fa"
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
                        <input className="input-fa"
                            placeholder="Стоимость в месяц:"
                            {...register('price', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.price && 
                            <p className="text-danger">{errors?.price?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-fa"
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
                    </div>
                    <div className="col-sm-4 text-center">
                        <select className="select-fa" {...register("ownershipType", { required: true })}>
                            <option value="0" selected disabled>Форма собственности</option>
                            <option value="1">Государственная</option>
                            <option value="2">Прочая</option>
                        </select>
                        <div style={{height: 40}}>
                            {errors?.ownershipType && 
                            <p className="text-danger">{errors?.ownershipType?.message || 'Error:'}</p>}
                        </div>
                        <select className="select-fa" {...register("facilityCategory", { required: true })}>
                            <option value="0" selected disabled>Категория</option>
                            <option value="1">АЗС</option>
                            <option value="2">Аптека</option>
                            <option value="3">Объект здравоохранения</option>
                            <option value="4">Объект образования</option>
                        </select>
                        <div style={{height: 40}}>
                            {errors?.facilityCategory && 
                            <p className="text-danger">{errors?.facilityCategory?.message || 'Error:'}</p>}
                        </div>
                        <select className="select-fa" {...register("securityType", { required: true })}>
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
                        <input className="input-fa"
                            placeholder="№ договорного дела:"
                            {...register('contructFileNumber', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.contructFileNumber && 
                            <p className="text-danger">{errors?.contructFileNumber?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-fa"
                            placeholder="№ литерного дела:"
                            {...register('letteredFileNumber', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.letteredFileNumber && 
                            <p className="text-danger">{errors?.letteredFileNumber?.message || 'Error:'}</p>}
                        </div>
                        <select className="select-fa" {...register("spi", { required: true })}>
                            <option value="0" selected disabled>СПИ</option>
                            <option value="1">АСПИ Приток-GSM</option>
                            <option value="2">АСПИ Приток-Ethernet</option>
                            <option value="3">РСПИ Иртыш-3Р</option>
                        </select>
                        <div style={{height: 40}}>
                            {errors?.spi && 
                            <p className="text-danger">{errors?.spi?.message || 'Error:'}</p>}
                        </div>
                        <select className="select-fa" {...register("facilityHardware", { required: true })}>
                            <option value="0" selected disabled>Объектовый прибор</option>
                            <option value="1">БО Иртыш-112</option>
                            <option value="2">БО Иртыш-113(113-3)</option>
                            <option value="3">БО Иртыш-214</option>
                            <option value="4">БО Иртыш-214-GSM</option>
                            <option value="5">Мобильный телохранитель</option>
                            <option value="6">ППКОП Приток 011-8-1-011(М)</option>
                            <option value="7">ППКОП Приток-А-КОП-02(03,04,05)</option>
                        </select>
                        <div style={{height: 40}}>
                            {errors?.facilityHardware && 
                            <p className="text-danger">{errors?.facilityHardware?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-fa"
                            placeholder="Пультовые номера:"
                            {...register('pultNumbers', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.pultNumbers && 
                            <p className="text-danger">{errors?.pultNumbers?.message || 'Error:'}</p>}
                        </div>
                    </div>
                    <div className="col-sm-4 text-center">
                        <select className="select-fa" {...register("mountingOrganization", { required: true })}>
                            <option value="0" selected disabled>Монтажная организация</option>
                            <option value="1">ООО Булгар</option>
                            <option value="2">ООО ЛенИС</option>
                            <option value="3">ООО ОСБ</option>
                            <option value="4">ООО Эгида</option>
                            <option value="5">ФГУП Охрана</option>
                            <option value="6">Отсутствует</option>
                        </select>
                        <div style={{height: 40}}>
                            {errors?.mountingOrganization && 
                            <p className="text-danger">{errors?.mountingOrganization?.message || 'Error:'}</p>}
                        </div>
                        <select className="select-fa" {...register("survingOrganization", { required: true })}>
                            <option value="0" selected disabled>Обслуживающая организация</option>
                            <option value="1">ООО Булгар</option>
                            <option value="2">ООО ЛенИС</option>
                            <option value="3">ООО ОСБ</option>
                            <option value="4">ООО Эгида</option>
                            <option value="5">ФГУП Охрана</option>
                            <option value="6">Отсутствует</option>
                        </select>
                        <div style={{height: 40}}>
                            {errors?.survingOrganization && 
                            <p className="text-danger">{errors?.survingOrganization?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-fa"
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
                        <input className="input-fa"
                            placeholder="Заводской №:"
                            {...register('serialNumber', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.serialNumber && 
                            <p className="text-danger">{errors?.serialNumber?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-fa"
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
                        <select className="select-fa" {...register("responsible", { required: true })}>
                            <option value="0" selected disabled>Ответственный</option>
                            <option value="1">Белик А.П.</option>
                            <option value="2">Величко А.С.</option>
                            <option value="3">Шешиков Ю.С.</option>
                        </select>
                        <div style={{height: 40}}>
                            {errors?.responsible && 
                            <p className="text-danger">{errors?.responsible?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-fa"
                            placeholder="Подбор объекта:"
                            {...register('assortment', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.assortment && 
                            <p className="text-danger">{errors?.assortment?.message || 'Error:'}</p>}
                        </div>
                        <input className="input-fa"
                            placeholder="Часы охраны:"
                            {...register('hours', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.hours && 
                            <p className="text-danger">{errors?.hours?.message || 'Error:'}</p>}
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

export default FacilityAdd