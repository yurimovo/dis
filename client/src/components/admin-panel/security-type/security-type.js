import React from 'react'
import { useForm } from 'react-hook-form'

import './security-type.css'

const SecurityType = () => {

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    })

    const onSubmit = (securityData) => {
        console.log(securityData)
        reset()
    }

    return (
        <form className='bg-success' onSubmit={handleSubmit(onSubmit)} style={{padding: 0}}>
            <div className='container container-fluid'>
                <div className='text-center'>
                    <h2>Вид охраны</h2>
                </div>
                <div className='row text-center'>
                    <div className='col-sm-6 col-aa'>
                        <h4>Добавить</h4>
                        <input className="input-aa"
                            placeholder="Вид охраны"
                            {...register('securityType', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.securityType && 
                            <p className="text-danger">{errors?.securityType?.message || 'Error:'}</p>}
                        </div>
                        <input className='btn btn-success' type='submit' disabled={!isValid} />
                    </div>
                    <div className='col-sm-6'>
                        <div className="card card-aa">
                            <div className="card-header text-center bg-primary">
                                <h6>Список</h6>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SecurityType