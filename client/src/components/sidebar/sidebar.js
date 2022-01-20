import React from "react"

import ApartmentActions from "../apartment-actions/apartment-actions"

import FacilityActions from "../facility-actions"

import './sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <FacilityActions />
            <ApartmentActions />
        </div>
    )
}

export default Sidebar