import React, { Component } from "react"

import './main.css'

import logo from './logo.png'

export default class Main extends Component {
    render() {
        return (
            <div className="container main-body">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="h2-main">Дислокация 2022</h2>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-sm-12">
                        <img src={logo} alt="logo"/>
                    </div>
                </div>
            </div>
        )
    }
}