import React from "react"

import { Link } from 'react-router-dom'

const ApartmentActions = () => {
    return (
        <div>
            <ul className="nav justify-content-center">
                <li className="nav-item text-center">
                    <Link className="nav-link" to="/apartment-add">
                        Добавить
                    </Link>
                </li>
                <br/>
                <li className="nav-item text-center">
                    <Link className="nav-link" to="/apartment-edit">
                        Редактировать
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default ApartmentActions