import React from "react"
import { Link } from "react-router-dom"

import './sim-actions.css'

const SimActions = () => {
    return (
        <div>
            <ul className="nav justify-content-center fa">
                <li className="nav-item text-center">
                    <Link className="nav-link" to="/sim-add">
                        Добавить
                    </Link>
                </li>
                <br/>
                <li className="nav-item text-center">
                    <Link className="nav-link" to="/sim-edit">
                        Редактировать
                    </Link>
                </li>
            </ul>
        </div>      
    )
}

export default SimActions