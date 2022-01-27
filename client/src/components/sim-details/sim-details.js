import React, {useCallback, useContext, useEffect, useState} from "react"
import { useParams } from 'react-router-dom'
import { useHttp } from "../../hooks/http.hook"
import { AuthContext } from "../../context/AuthContext"
import Loader from "../loader"
import SimCard from "../sim-card"

const SimDetails = () => {
    const { token } = useContext(AuthContext)
    const { request, loading } = useHttp()
    const [sim, setSim] = useState(null)
    const simId = useParams().id
    
    const getSim = useCallback(async () => {
        try {
            const fetched = await request(`/api/sim/${simId}`, 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setSim(fetched)
        } catch (e) {
            
        }
    }, [token, simId, request ])

    useEffect(() => {
        getSim()
    }, [getSim])

    if (loading) {
        return <Loader />
    }

    return (
        <>
            { !loading && sim && <SimCard sim={ sim } /> }
        </>
    )
}

export default SimDetails