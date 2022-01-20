import React from "react"

import { Link } from "react-router-dom"

import './facility-actions.css'

const FacilityActions = () => {
    return (
        <div>
            <ul className="nav justify-content-center fa">
                <li className="nav-item text-center">
                    <Link className="nav-link" to="/facility-add">
                        Добавить
                    </Link>
                </li>
                <br/>
                <li className="nav-item text-center">
                    <Link className="nav-link" to="/facility-edit">
                        Редактировать
                    </Link>
                </li>
            </ul>
        </div>      
    )
}

export default FacilityActions