import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import FacilityActions from "./components/facility-actions"
import ApartmentActions from "./components/apartment-actions"
import ReportActions from "./components/report-actions"
import MainActions from "./components/main-actions"
import SimActions from "./components/sim-actions"
import Auth from './components/auth'

export const useRoutesSidebar = (isAuthenticated) => {
    if (isAuthenticated) {
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