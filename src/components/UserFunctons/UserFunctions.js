import axios from 'axios'

export const register = newUser => {
    return axios
        .post('http://localhost:8080/users/register', {
            userName: newUser.userName,
            email: newUser.email,
            password: newUser.password,
            balance: newUser.balanc
        })
        .then(res => {
            console.log(res + "Registered")
        })
}

export const login = user => {
    return axios
        .post('http://localhost:8080/users/login', {
            email: user.email,
            password: user.password
        })


}