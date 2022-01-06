import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from '../header'
import Footer from '../footer'
import Main from '../main'
import Facilities from '../facilities'
import Apartments from '../apartments'
import Reports from "../reports"
import SimCards from "../sim-cards"
import AdminPanel from "../admin-panel"
import UserRegister from "../register/register"
import FacilityActions from "../facility-actions"
import ApartmentActions from "../apartment-actions/apartment-actions"
import ReportActions from "../report-actions"
import MainActions from "../main-actions"
import SimActions from "../sim-actions"
import FacilityAdd from '../facility-add'
import FacilityEdit from '../facility-edit'
import ApartmentAdd from '../apartment-add'
import ApartmentEdit from '../apartment-edit'
import SimAdd from "../sim-add"
import OwnershipType from '../admin-panel/ownership-type'
import Category from '../admin-panel/category'
import SecurityType from '../admin-panel/security-type'
import Spi from '../admin-panel/spi'
import Hardware from '../admin-panel/hardware'
import Organizations from '../admin-panel/organizations'

import './app.css'

export default class App extends Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <div className="row">
                        <div className="col-sm-12">
                            <Header />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2 border border-4 border-warning rounded-3 bg-secondary">
                            <Routes>
                                <Route path="/" exact element={<MainActions />} />
                                <Route path="/facilities" element={<FacilityActions />} />
                                <Route path="/apartments" element={<ApartmentActions />} />
                                <Route path="/reports" element={<ReportActions />} />
                                <Route path="/sim-cards" element={<SimActions />} />
                            </Routes>
                        </div>
                        <div className="col-sm-10 border border-4 border-warning rounded-3 bg-success">
                            <Routes>
                                <Route path="/" exact element={<Main />} />
                                <Route path="/facilities" element={<Facilities />} />
                                <Route path="/apartments" element={<Apartments />} />
                                <Route path="/reports" element={<Reports />} />
                                <Route path="/sim-cards" element={<SimCards />} />
                                <Route path="/admin-panel" element={<AdminPanel />} />
                                <Route path="/register" element={<UserRegister />} />
                                <Route path="/facility-add" element={<FacilityAdd />} />
                                <Route path="/facility-edit" element={<FacilityEdit />} />
                                <Route path="/apartment-add" element={<ApartmentAdd />} />
                                <Route path="/apartment-edit" element={<ApartmentEdit />} />
                                <Route path="/sim-add" element={<SimAdd />} />
                                <Route path="/admin-panel/ownership-type" element={<OwnershipType />} />
                                <Route path="/admin-panel/category" element={<Category />} />
                                <Route path="/admin-panel/security-type" element={<SecurityType />} />
                                <Route path="/admin-panel/spi" element={<Spi />} />
                                <Route path="/admin-panel/hardware" element={<Hardware />} />
                                <Route path="/admin-panel/organizations" element={<Organizations />} />
                            </Routes>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 border border-4 border-warning rounded-3 bg-info">
                            <Footer />
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}