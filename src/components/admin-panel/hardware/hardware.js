import React from 'react'
import { useForm } from 'react-hook-form'

import './hardware.css'

const Hardware = () => {

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

    const onSubmit = (hardwareData) => {
        console.log(hardwareData)
        reset()
    }

    return (
        <form className='bg-success' onSubmit={handleSubmit(onSubmit)} style={{padding: 0}}>
            <div className='container container-fluid'>
                <div className='text-center'>
                    <h2>Оборудование</h2>
                </div>
                <div className='row text-center'>
                    <div className='col-sm-6 col-aa'>
                        <h4>Добавить</h4>
                        <input className="input-aa"
                            placeholder="Оборудование"
                            {...register('hardware', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.hardware && 
                            <p className="text-danger">{errors?.hardware?.message || 'Error:'}</p>}
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

export default Hardware