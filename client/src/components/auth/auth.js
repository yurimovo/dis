import React, { useState } from "react"
//import { useForm } from "react-hook-form"

import { useHttp } from '../../hooks/http.hook'
import './auth.css'

const Auth = () => {

    const { loading, request } = useHttp()
    const [form, setForm] = useState({
        userName: '',
        password: ''
    })

    /* const {
        register,
        formState: {
            errors,
            isValid
        },
        reset
    } = useForm({
        mode: "onBlur"
    }) */

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', form)
            console.log('Data:', data)
        } catch (e) {}
    }

    return (
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
                                <input 
                                    className="input-auth"
                                    placeholder="Имя пользователя"
                                    id="userName"
                                    name="userName"
                                    /* {...register('username', {
                                        required: 'Поле обязательно для заполнения',
                                    })} */
                                    onChange={changeHandler}
                                />
                                {/* <div style={{height: 40}}>
                                    {errors?.username && 
                                    <p className="text-danger">{errors?.username?.message || 'Error:'}</p>}
                                </div> */}
                                <br/>
                                <input
                                    className="input-auth"
                                    type="password"
                                    placeholder="Пароль"
                                    id="password"
                                    name="password"
                                    /* {...register('password', {
                                        required: 'Поле обязательно для заполнения',
                                    })} */
                                    onChange={changeHandler}
                                />
                                {/* <div style={{height: 40}}>
                                    {errors?.password && 
                                    <p className="text-danger">{errors?.password?.message || 'Error:'}</p>}
                                </div> */}
                            </div>
                            <div>
                                <hr/>
                                <button 
                                    className="btn btn-sucess" 
                                    style={{marginRight: 10}}
                                    disabled={loading}
                                >
                                    Войти
                                </button>
                                <button 
                                    className="btn btn-primary"
                                    onClick={registerHandler}
                                    disabled={loading}
                                >
                                    Регистрация
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div>
        </div>
    )
}

export default Auth