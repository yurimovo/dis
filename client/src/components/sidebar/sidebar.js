import React, { Component } from "react"

import ApartmentActions from "../apartment-actions/apartment-actions"

import FacilityActions from "../facility-actions"

import './sidebar.css'

export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <FacilityActions />
                <ApartmentActions />
            </div>
        )
    }
}