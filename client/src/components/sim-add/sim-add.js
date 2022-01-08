import React from "react"
import { useForm } from 'react-hook-form'

import './sim-add.css'

const SimAdd = () => {

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

    const onSubmit = (simData) => {
        console.log(simData)
        reset()
    }

    return (
        <form className="bg-transparent" onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h2 className="h2-sa">Добавить СИМ</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <input className="input-sa"
                            placeholder="FCC ID:"
                            {...register('fccId', {
                                required: 'Поле обязательно для заполнения',
                                maxLength: {
                                    value: 19,
                                    message: 'Максимальная длина 19 символов'
                                }
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.fccId && <p className="text-danger">{errors?.fccId?.message || 'Error:'}</p>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <input className="input-sa"
                            placeholder="№ телефона СИМ-карты"
                            {...register('simNumber', {
                                required: 'Поле обязательно для заполнения',
                                maxLength: {
                                    value: 12,
                                    message: 'Максимальная длина 12 символов'
                                }
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.simNumber && <p className="text-danger">{errors?.simNumber?.message || 'Error:'}</p>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <input className="input-sa"
                            type='date'
                            placeholder="Дата установки"
                            {...register('mountingDate', {
                                required: 'Поле обязательно для заполнения',
                                valueIsDate: {
                                    value: true,
                                    message: 'В поле должна быть дата'
                                }
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.mountingDate && <p className="text-danger">{errors?.mountingDate?.message || 'Error:'}</p>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <input className="input-sa"
                            placeholder="Пультовые номера:"
                            {...register('pultNumber', {
                                    required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.pultNumber && <p className="text-danger">{errors?.pultNumber?.message || 'Error:'}</p>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <input className="input-sa"
                            placeholder="Место установки:"
                            {...register('mountingPlace', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.mountingPlace && <p className="text-danger">{errors?.mountingPlace?.message || 'Error:'}</p>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <input className="input-sa"
                        placeholder="Адрес установки:"
                            {...register('mountingAddress', {
                                required: 'Поле обязательно для заполнения',
                            })}
                        />
                        <div style={{height: 40}}>
                            {errors?.mountingAddress && <p className="text-danger">{errors?.mountingAddress?.message || 'Error:'}</p>}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <input className="btn btn-submit" type='submit' disabled={!isValid} />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SimAdd