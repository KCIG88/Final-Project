import axios from 'axios'

export const register = newUser => {
    return axios
        .post('users/register', {
            userName: newUser.userName,
            email: newUser.email,
            password: newUser.password,
            balance: newUser.balanc
        })
        .then(res => {
            console.log("Registered")
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            email: user.email,
            pasword: user.password
        })
        .then(err => {
            console.log(err)
        })
}