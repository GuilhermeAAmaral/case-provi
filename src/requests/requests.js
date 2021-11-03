import axios from 'axios'
import { BASE_URL2 } from '../constantes/urls'
import { goToHome } from '../routers/cordinator'

//requisições de signup e login 

export const login = (body, clear, history, setIsLoading) => {

    setIsLoading(true)

    axios.post (`${BASE_URL2}/user/login`, body)

    .then ((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToHome(history)
        setIsLoading()
    })

    .catch ((err) => {
        setIsLoading(false)
        alert (err.response.data.message)
    })
}

export const signup = (body, clear, history, setIsLoading) => {

    setIsLoading(true)

    axios.post (`${BASE_URL2}/user/signup`, body)

    .then ((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToHome(history)
    })
    
    .catch ((err) => {
        setIsLoading(false)
        alert (err.response.data.message)
    })
}