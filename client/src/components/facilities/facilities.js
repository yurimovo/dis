import React, {useEffect, useState} from "react"
import axios from "axios";
import {Link} from "react-router-dom";

const Facilities = () => {

    const [allFacilities, setAllFacilities] = useState([])

    useEffect(() => {
        (async () => {
            const response = await axios.get('/api/facility/facilities')
            setAllFacilities(response.data)
            console.log(response.data)
        })()
    },[])

    return (
        <div>
            <div className={'container'}>
                <div className='row'>
                    <div className={'col-sm-4'}>
                        <strong>Организация</strong>
                    </div>
                    <div className={'col-sm-2'}></div>
                    <div className={'col-sm-3'}>
                        <strong>Объект</strong>
                    </div>
                    <div className={'col-sm-3'}>
                        <strong>Адрес</strong>
                    </div>
                </div>
                {allFacilities &&
                allFacilities.map((facility) => {
                    return (
                        <div key={facility._id}>
                            <div className={'row'}>
                                <div
                                    className={'col-sm-4'}
                                >
                                    {facility.organization}
                                </div>
                                <div className={'col-sm-2'}>
                                    <Link to={`/facility-details/${facility._id}`}>>></Link>
                                </div>
                                <div className={'col-sm-3'}>
                                    {facility.facility}
                                </div>
                                <div className={'col-sm-3'}>
                                    {facility.address}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Facilities