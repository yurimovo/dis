import React, { Component } from "react"
import { Link } from 'react-router-dom'

import './menu.css'

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand me-2" to="/"></Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarButtonsExample"
                        aria-controls="navbarButtonsExample"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarButtonsExample">
                        <Link className="navbar-brand" to="/">Главная</Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li><Link className="nav-link" to="/facilities">Объекты</Link></li>
                            <li><Link className="nav-link" to="/apartments">МХИГ</Link></li>
                            <li><Link className="nav-link" to="/reports">Отчёты</Link></li>
                            <li><Link className="nav-link" to="/sim-cards">СИМ-карты</Link></li>
                        </ul>
                        <div className="d-flex align-items-center">
                            <button type="button" className="btn btn-outline-danger px-3 me-2 btn-menu">
                                <Link to="/admin-panel">Настройки</Link>
                            </button>
                            <br/>
                            <button type="button" className="btn btn-outline-success px-3 me-2 btn-menu">
                                <Link to="/login">Войти</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}