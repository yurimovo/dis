const login = (auth) => {
    return {
        type: 'LOGIN',
        payload: auth
    }
}

const logout = () => {
    return {
        type: 'LOGOUT',
        payload: 
    }
}

export {
    login,
    logout
}