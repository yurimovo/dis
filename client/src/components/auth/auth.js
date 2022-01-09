import React from "react"
import { useForm } from "react-hook-form"

import './auth.css'

const Auth = () => {

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

    const onSubmit = (userData) => {
        console.log(userData)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container ">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6 col-auth">
                        <div className="card card-auth text-center">
                            <div className="card-header bg-primary header-auth">
                                Авторизация
                            </div>
                            <div className="card-body">
                                <div>
                                    <input className="input-auth"
                                        placeholder="Имя пользователя"
                                        {...register('username', {
                                            required: 'Поле обязательно для заполнения',
                                        })}
                                    />
                                    <div style={{height: 40}}>
                                        {errors?.username && 
                                        <p className="text-danger">{errors?.username?.message || 'Error:'}</p>}
                                    </div>
                                    <input className="input-auth"
                                        type="password"
                                        placeholder="Пароль"
                                        {...register('password', {
                                            required: 'Поле обязательно для заполнения',
                                        })}
                                    />
                                    <div style={{height: 40}}>
                                        {errors?.password && 
                                        <p className="text-danger">{errors?.password?.message || 'Error:'}</p>}
                                    </div>
                                </div>
                                <div>
                                    <hr/>
                                    <button className="btn btn-sucess" style={{marginRight: 10}}>Войти</button>
                                    <button className="btn btn-primary">Регистрация</button>
                                </div>
                                
                                
                                {/* <input className="input-auth"
                                    placeholder="Имя пользователя"
                                    {...register('username', {
                                        required: 'Поле обязательно для заполнения',
                                    })}
                                />
                                <div style={{height: 40}}>
                                    {errors?.username && 
                                    <p className="text-danger">{errors?.username?.message || 'Error:'}</p>}
                                </div>
                                <input className="input-auth"
                                    type="password"
                                    placeholder="Пароль"
                                    {...register('password', {
                                        required: 'Поле обязательно для заполнения',
                                    })}
                                />
                                <div style={{height: 40}}>
                                    {errors?.password && 
                                    <p className="text-danger">{errors?.password?.message || 'Error:'}</p>}
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 text-center">
                                        <input className="btn btn-success" type="submit" disabled={!isValid} />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        </form>
    )
}

export default Auth