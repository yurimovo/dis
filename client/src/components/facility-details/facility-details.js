import React, {useCallback, useContext, useEffect, useState} from "react"
import { useParams } from 'react-router-dom'
import { useHttp } from "../../hooks/http.hook"
import { AuthContext } from "../../context/AuthContext"
import Loader from "../loader"
import Facility from "../facility"

const FacilityDetails = () => {

    const { token } = useContext(AuthContext)
    const { request, loading } = useHttp()
    const [facility, setFacility] = useState(null)
    const facilityId = useParams().id

    const getFacility = useCallback(async () => {
        try {
            const fetched = await request(
                `/api/facility/${facilityId}`,
                'GET',
                null,
                {Authorization: `Bearer ${token}`}
            )
            setFacility(fetched)
        } catch (e) {}
    }, [token, facilityId, request ])

    useEffect(() => {
        getFacility()
    }, [getFacility])

    if (loading) {
        return <Loader />
    }

    return (
        <>
            { !loading && facility && <Facility facility={ facility } /> }
        </>
    )
}

export default FacilityDetails