import React, { useState } from 'react'

import OwnershipType from './ownership-type'
import Category from './category'
import SecurityType from './security-type'
import Spi from './spi'
import Hardware from './hardware'
import Organizations from './organizations'

import './admin-panel.css'

const AdminPanel = () => {

    const [otClassName, setOtClassName] = useState('nav-link')
    const [categoryClassName, setCategoryClassName] = useState('nav-link')
    const [stClassName, setStClassName] = useState('nav-link')
    const [spiClassName, setSpiClassName] = useState('nav-link')
    const [hardwareClassName, setHardwareClassName] = useState('nav-link')
    const [organizationsClassName, setOrganizationsClassName] = useState('nav-link')

    const ownershipClick = () => {
        setOtClassName('nav-link active')
    }

    const ownershipBlur = () => {
        setOtClassName('nav-link')
    }

    const categoryClick = () => {
        setCategoryClassName('nav-link active')
    }

    const categoryBlur = () => {
        setCategoryClassName('nav-link')
    }

    const stClick = () => {
        setStClassName('nav-link active')
    }

    const stBlur = () => {
        setStClassName('nav-link')
    }

    const spiClick = () => {
        setSpiClassName('nav-link active')
    }

    const spiBlur = () => {
        setSpiClassName('nav-link')
    }

    const hardwareClick = () => {
        setHardwareClassName('nav-link active')
    }

    const hardwareBlur = () => {
        setHardwareClassName('nav-link')
    }

    const organizationsClick = () => {
        setOrganizationsClassName('nav-link active')
    }

    const organizationsBlur = () => {
        setOrganizationsClassName('nav-link')
    }
    
    return (
        <div className='container'>
            <div className='text-center'><h2>Панель настроек</h2></div>
            <ul className="nav nav-tabs">
                <li className='nav-item'>
                    <a 
                        href="#ownershipType" 
                        data-toggle="tab"
                        className={otClassName}
                        onClick={ownershipClick}
                        onBlur={ownershipBlur}
                    >
                        Форма собственности
                    </a>
                </li>
                <li className='nav-item'>
                    <a 
                        href="#category" 
                        data-toggle="tab"
                        className={categoryClassName}
                        onClick={categoryClick}
                        onBlur={categoryBlur}
                    >
                        Категория
                    </a>
                </li>
                <li className='nav-item'>
                    <a 
                        href="#securityType"
                        data-toggle="tab"
                        className={stClassName}
                        onClick={stClick}
                        onBlur={stBlur}
                    >
                        Вид охраны
                    </a>
                </li>
                <li className='nav-item'>
                    <a 
                        href="#spi"
                        data-toggle="tab"
                        className={spiClassName}
                        onClick={spiClick}
                        onBlur={spiBlur}
                    >
                        СПИ
                    </a>
                </li>
                <li className='nav-item'>
                    <a 
                        href="#hardware"
                        data-toggle="tab"
                        className={hardwareClassName}
                        onClick={hardwareClick}
                        onBlur={hardwareBlur}
                    >
                        Оборудование
                    </a>
                </li>
                <li className='nav-item'>
                    <a 
                        href="#organizations"
                        data-toggle="tab"
                        className={organizationsClassName}
                        onClick={organizationsClick}
                        onBlur={organizationsBlur}
                    >
                        Организации
                    </a>
                </li>
            </ul>
            <div className="tab-content tabs-style">
                <div 
                    className="tab-pane fade show active" 
                    id="ownershipType" 
                >
                    <OwnershipType />
                </div>
                <div 
                    className="tab-pane fade show" 
                    id="category"
                >
                    <Category />
                </div>
                <div 
                    className="tab-pane fade show" 
                    id="securityType"
                >
                    <SecurityType />
                </div>
                <div 
                    className="tab-pane fade show" 
                    id="spi" 
                >
                    <Spi />
                </div>
                <div 
                    className="tab-pane fade show" 
                    id="hardware"
                >
                    <Hardware />
                </div>
                <div 
                    className="tab-pane fade show" 
                    id="organizations"
                >
                    <Organizations />
                </div>
            </div>
        </div>
    )
}

export default AdminPanel