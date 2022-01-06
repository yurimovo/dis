import React from 'react'

import OwnershipType from './ownership-type'
import Category from './category'
import SecurityType from './security-type'
import Spi from './spi'
import Hardware from './hardware'
import Organizations from './organizations'

const AdminPanel = () => {

    

    return (
        <div>
            <div className='text-center'><h2>Панель настроек</h2></div>
            <ul className="nav nav-tabs" id="admin-panel" role="tablist">
                <li className="nav-item" role="presentation">
                    <button 
                        className="nav-link" 
                        id="ownershipType" 
                        data-toggle="tab" 
                        data-bs-target="#ownershipType" 
                        type="button" role="tab" 
                        aria-controls="ownershipType" 
                        aria-selected="true"
                    >
                        Форма собственности
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button 
                        className="nav-link" 
                        id="category" 
                        data-toggle="tab" 
                        data-bs-target="#category" 
                        type="button" role="tab" 
                        aria-controls="category" 
                        aria-selected="false"
                    >
                        Категория
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button 
                        className="nav-link" 
                        id="securityType" 
                        data-toggle="tab" 
                        data-bs-target="#securityType" 
                        type="button" 
                        role="tab" 
                        aria-controls="securityType" 
                        aria-selected="false"
                    >
                        Вид охраны
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button 
                        className="nav-link" 
                        id="spi" 
                        data-toggle="tab" 
                        data-bs-target="#spi" 
                        type="button" 
                        role="tab" 
                        aria-controls="spi" 
                        aria-selected="false"
                    >
                        СПИ
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button 
                        className="nav-link" 
                        id="hardware" 
                        data-toggle="tab" 
                        data-bs-target="#hardware" 
                        type="button" 
                        role="tab" 
                        aria-controls="hardware" 
                        aria-selected="false"
                    >
                        Оборудование
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button 
                        className="nav-link" 
                        id="organizations" 
                        data-toggle="tab" 
                        data-bs-target="#organizations" 
                        type="button" 
                        role="tab" 
                        aria-controls="organizations" 
                        aria-selected="false"
                    >
                        Организации
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div 
                    className="tab-pane fade" 
                    id="ownershipType" 
                    role="tabpanel" 
                    aria-labelledby="ownershipType"
                >
                    <OwnershipType />
                </div>
                <div 
                    className="tab-pane fade" 
                    id="category" 
                    role="tabpanel" 
                    aria-labelledby="category"
                >
                    <Category />
                </div>
                <div 
                    className="tab-pane fade" 
                    id="securityType" 
                    role="tabpanel" 
                    aria-labelledby="securityType"
                >
                    <SecurityType />
                </div>
                <div 
                    className="tab-pane fade" 
                    id="spi" 
                    role="tabpanel" 
                    aria-labelledby="spi"
                >
                    <Spi />
                </div>
                <div 
                    className="tab-pane fade" 
                    id="hardware" 
                    role="tabpanel" 
                    aria-labelledby="hardware"
                >
                    <Hardware />
                </div>
                <div 
                    className="tab-pane fade" 
                    id="organizations" 
                    role="tabpanel" 
                    aria-labelledby="organizations"
                >
                    <Organizations />
                </div>
            </div>
        </div>
    )
}

export default AdminPanel