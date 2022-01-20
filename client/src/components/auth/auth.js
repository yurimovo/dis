import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Input from "../../utils/input/Input"
import { registration, authorization } from "../../actions/user"

import './auth.css'

const Registration = () => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const history = useNavigate()

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
                                <Input
                                    className="input-auth"
                                    value={userName} 
                                    setValue={setUserName} 
                                    type="text" 
                                    placeholder="Введите логин..."
                                />
                                <br/>
                                <Input 
                                    className="input-auth"
                                    value={password} 
                                    setValue={setPassword} 
                                    type="password" 
                                    placeholder="Введите пароль..."
                                />
                            </div>
                            <div>
                                <hr/>
                                <button 
                                    className="btn btn-sucess" 
                                    style={{marginRight: 10}}
                                    onClick={() => authorization(userName, password)}
                                >
                                    Войти
                                </button>
                                <button 
                                    className="btn btn-success" 
                                    onClick={() => registration(userName, password).then(r => {
                                        history.push('/')
                                    })}
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

export default Registration