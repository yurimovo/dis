import React, { Component } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from '../header'
import Footer from '../footer'
import Main from '../main'
import Facilities from '../facilities'
import Apartments from '../apartments'
import Reports from "../reports"
import FacilityActions from "../facility-actions"
import ApartmentActions from "../apartment-actions/apartment-actions"
import ReportActions from "../report-actions"
import MainActions from "../main-actions"
import FacilityAdd from '../facility-add'
import FacilityEdit from '../facility-edit'
import ApartmentAdd from '../apartment-add'
import ApartmentEdit from '../apartment-edit'

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
                        <div className="col-sm-2 sidebar">
                            <Routes>
                                <Route path="/" exact element={<MainActions />} />
                                <Route path="/facilities" element={<FacilityActions />} />
                                <Route path="/apartments" element={<ApartmentActions />} />
                                <Route path="/reports" element={<ReportActions />} />
                            </Routes>
                        </div>
                        <div className="col-sm-10 main">
                            <Routes>
                                <Route path="/" exact element={<Main />} />
                                <Route path="/facilities" element={<Facilities />} />
                                <Route path="/apartments" element={<Apartments />} />
                                <Route path="/reports" element={<Reports />} />
                                <Route path="/facility-add" element={<FacilityAdd />} />
                                <Route path="/facility-edit" element={<FacilityEdit />} />
                                <Route path="/apartment-add" element={<ApartmentAdd />} />
                                <Route path="/apartment-edit" element={<ApartmentEdit />} />
                            </Routes>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 footer">
                            <Footer />
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}