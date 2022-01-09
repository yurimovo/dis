import React, { Component } from "react"

import { Link } from 'react-router-dom'

export default class ApartmentActions extends Component {
    render() {
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
}