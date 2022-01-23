import React from 'react'
import {Routes, Route} from 'react-router-dom'

import FacilityActions from "./components/facility-actions"
import ApartmentActions from "./components/apartment-actions"
import ReportActions from "./components/report-actions"
import MainActions from "./components/main-actions"
import SimActions from "./components/sim-actions"

export const useRoutesSidebar = () => {
    if (localStorage.getItem('token')) {
        return (
            <Routes>
                <Route path="/" exact element={<MainActions />} />
                <Route path="/facilities" element={<FacilityActions />} />
                <Route path="/apartments" element={<ApartmentActions />} />
                <Route path="/reports" element={<ReportActions />} />
                <Route path="/sim-cards" element={<SimActions />} />
            </Routes>
        )
    }

    return (
        <div><h2>  </h2></div>
    )
}