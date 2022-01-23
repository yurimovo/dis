import React, { useEffect } from "react"
import { useRoutesMain } from '../../routes-main'
import { useRoutesSidebar } from '../../routes-sidebar'
import { useNavigate } from 'react-router-dom'

import Header from '../header'
import Footer from '../footer'

import './app.css'
import { useDispatch, useSelector } from "react-redux"
import { checkAuth } from "../../store/actions"

const App = () => {
    const routesMain = useRoutesMain()
    const routesSidebar = useRoutesSidebar(true)
    const dispatch = useDispatch()
    const history = useNavigate()
    const auth = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(checkAuth())
        if (!auth) {
            history('/auth')
        }
    },[])

    return (
        <div className='container'>
            <div className="row">
                {!auth ? null :
                    <div className="col-sm-12" style={{padding: 0}}>
                        <Header />
                    </div>
                }
            </div>
            <div className="row">
                {!auth ? null :
                    <div className="col-sm-2 border border-4 border-warning rounded-3 bg-secondary">
                        {routesSidebar}
                    </div>
                }
                {!auth ?
                    <div className="col-sm-12 border border-4 border-warning rounded-3 bg-light main">
                        {routesMain}
                    </div> :
                    <div className="col-sm-10 border border-4 border-warning rounded-3 bg-light main">
                        {routesMain}
                    </div>
                }
            </div>
            <div className="row">
                <div className="col-sm-12 border border-4 border-warning rounded-3 bg-info">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App