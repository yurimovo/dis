import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Main from './components/main'
import Facilities from './components/facilities'
import Apartments from './components/apartments'
import Reports from './components/reports'
import SimCards from './components/sim-cards'
import AdminPanel from './components/admin-panel'
import FacilityAdd from './components/facility-add'
import FacilityEdit from './components/facility-edit'
import ApartmentAdd from './components/apartment-add'
import ApartmentEdit from './components/apartment-edit'
import SimAdd from "./components/sim-add"
import Auth from './components/auth'
import { useSelector } from 'react-redux'
import SimDetails from "./components/sim-details";
import SimCard from "./components/sim-card";

export const useRoutesMain = () => {
    const auth = useSelector(state => state.auth)
    return (
        <>
          {auth ? <Routes>
            <Route path="/" exact element={<Main />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/apartments" element={<Apartments />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/sim-cards" element={<SimCards />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/facility-add" element={<FacilityAdd />} />
            <Route path="/facility-edit" element={<FacilityEdit />} />
            <Route path="/apartment-add" element={<ApartmentAdd />} />
            <Route path="/apartment-edit" element={<ApartmentEdit />} />
            <Route path="/sim-add" element={<SimAdd />} />
            <Route path="/sim-details/:id" element={<SimDetails />} />
            <Route path="/sim-card" element={<SimCard />} />
          </Routes> :
              <Routes>
                <Route path="/auth" exact element={<Auth />} />
              </Routes>
            }
        </>
    )
  }