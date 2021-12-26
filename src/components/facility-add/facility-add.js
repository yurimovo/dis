import React, { Component, useState } from "react"
import DatePicker from 'react-datepicker'

import './facility-add.css'
import 'react-datepicker/dist/react-datepicker.css'

const Example = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
};

export default class FacilityAdd extends Component {

    render() {
        return (
            <div className="container facility-add">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h2>Добавление объекта</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <input type="text" className="form-control input" placeholder="Организация" id="organization"/>
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control input" placeholder="Объект" id="facility"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <input type="text" className="form-control input" placeholder="Адрес" id="address"/>
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control input" placeholder="Номера телефонов" id="phoneNumbers"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <input type="text" className="form-control input" placeholder="Номер договора" id="contructNumber"/>
                    </div>
                    <div className="col-sm-6">
                        <DatePicker
                            placeholderText="Дата договора"
                            selected={ Example.date }
                            onSelect={ Example.handleDateSelect }
                            onChange={ Example.handleDateChange }
                            className="date-picker"
                            id="contructNumber"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <input type="text" className="form-control input" placeholder="Стоимость в месяц" id="price"/>
                    </div>
                    <div className="col-sm-6">
                        <DatePicker
                            placeholderText="Дата тарифа"
                            selected={ Example.date }
                            onSelect={ Example.handleDateSelect }
                            onChange={ Example.handleDateChange }
                            className="date-picker"
                            id="priceDate"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <div className="dropdown dd">
                            <button 
                                className="btn btn-secondary dropdown-toggle" 
                                type="button" 
                                id="ownershipType" 
                                data-toggle="dropdown" 
                                aria-expanded="false">
                                    Форма собственности
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button">Государственная</button></li>
                                <li><button className="dropdown-item" type="button">Прочая</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="dropdown dd">
                            <button 
                                className="btn btn-secondary dropdown-toggle" 
                                type="button" 
                                id="facilityCategory" 
                                data-toggle="dropdown" 
                                aria-expanded="false">
                                    Категория
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button">АЗС</button></li>
                                <li><button className="dropdown-item" type="button">Аптека</button></li>
                                <li><button className="dropdown-item" type="button">Объект здравоохранения</button></li>
                                <li><button className="dropdown-item" type="button">Объект образования</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="dropdown dd">
                            <button 
                                className="btn btn-secondary dropdown-toggle" 
                                type="button" 
                                id="securityType" 
                                data-toggle="dropdown" 
                                aria-expanded="false">
                                    Вид охраны
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <li><button className="dropdown-item" type="button">КТС GSM</button></li>
                                <li><button className="dropdown-item" type="button">ПЦН GSM</button></li>
                                <li><button className="dropdown-item" type="button">КТС+ПЦН GSM</button></li>
                                <li><button className="dropdown-item" type="button">КТС Ethernet</button></li>
                                <li><button className="dropdown-item" type="button">ПЦН Ethernet</button></li>
                                <li><button className="dropdown-item" type="button">КТС+ПЦН Ethernet</button></li>
                                <li><button className="dropdown-item" type="button">КТС Радио</button></li>
                                <li><button className="dropdown-item" type="button">ПЦН Радио</button></li>
                                <li><button className="dropdown-item" type="button">КТС+ПЦН Радио</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <input 
                            type="text" 
                            className="form-control input" 
                            placeholder="Номер договорного дела" 
                            id="contructFileNumber"
                        />
                    </div>
                    <div className="col-sm-6">
                        <input 
                            type="text" 
                            className="form-control input" 
                            placeholder="Объект" 
                            id="letteredFileNumber"
                        />
                    </div>
                </div>
            </div>
        )
    }
}