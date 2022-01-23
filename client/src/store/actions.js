import * as actions from './actionTypes';

const login = (auth) => {
    return {
        type: actions.LOGIN
    }
}

const logout = (auth) => {
    return {
        type: actions.LOGOUT
    }
}

const checkAuth = () => {
    return {
        type: 'CHECKAUTH'
    }
}

export {
    login,
    logout,
    checkAuth
}