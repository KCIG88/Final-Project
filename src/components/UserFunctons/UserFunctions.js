import axios from 'axios'

export const register = newUser => {
    return axios
        .post('mongodb+srv://auth0-custom-db-user:Hornet94@cluster0-oidde.mongodb.net/project3?retryWrites=true&w=majority', {
            userName: newUser.userName,
            email: newUser.email,
            password: newUser.password,
            balance: newUser.balance,
        })


}

export const login = user => {
    return axios
        .post('mongodb+srv://auth0-custom-db-user:Hornet94@cluster0-oidde.mongodb.net/project3?retryWrites=true&w=majority', {
            email: user.email,
            password: user.password
        })


}

// export const updateBalance = user => {
//     return axios
//         .put('http://localhost:8080/users/updateBalance/' + this., {
//             balance: user.balance
//         })
// }

