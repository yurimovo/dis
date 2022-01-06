import React, { useState } from 'react'
import axios from 'axios'
import validator from 'validator'

const UserRegister = () => {

    const [register, setRegister] = useState(() => {
        return {
            username: "",
            password: "",
            password2: "",
        }
    })

    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const submitChackin = event => {
        event.preventDefault();
        if (register.password !== register.password2) {
            alert("Пароли не совпадают")
        } else if(!validator.isStrongPassword(register.password, {minSymbols: 8})) {
            alert("Пароль должен содержать заглавные, прописные, числа, и быть не короче 8 символов")
        } else {
            axios.post("/register", {
                username: register.username,
                password: register.password,
            }).then(res => {
                if (res.data === true) {
                    window.location.href = "/login"
                } else {
                    alert("Пользователь существует")
                }
            }).catch(() => {
                alert("Ошибка сервера")
            })
        }
    }

    return (
        <div className="form">
            <h2>Регистрация пользователя:</h2>
            <form onSubmit={submitChackin}>
                <p>Имя пользователя: 
                    <input 
                        type="username"
                        id="username"
                        name="username"
                        value={register.usernamr}
                        onChange={changeInputRegister}
                    />
                </p>
                <p>Пароль: 
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        value={register.password}
                        onChange={changeInputRegister}
                    />
                </p>
                <p>Пароль (повтор): 
                    <input 
                        type="password"
                        id="password2"
                        name="password2"
                        value={register.password2}
                        onChange={changeInputRegister}
                    />
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default UserRegister