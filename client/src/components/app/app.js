import React from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutesMain } from '../../routes-main'
import { useRoutesSidebar } from '../../routes-sidebar'

import Header from '../header'
import Footer from '../footer'

import './app.css'

const App = () => {
    const routesMain = useRoutesMain(false)
    const routesSidebar = useRoutesSidebar(false)
    return (
        <div className='container'>
            <Router>
                <div className="row">
                    <div className="col-sm-12" style={{padding: 0}}>
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-2 border border-4 border-warning rounded-3 bg-secondary">
                        {routesSidebar}
                    </div>
                    <div className="col-sm-10 border border-4 border-warning rounded-3 bg-light main">
                        {routesMain}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 border border-4 border-warning rounded-3 bg-info">
                        <Footer />
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default App