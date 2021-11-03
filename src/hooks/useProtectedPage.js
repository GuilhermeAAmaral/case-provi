import { useHistory } from "react-router"
import { useLayoutEffect } from "react"
import { goToLogin } from "../routers/cordinator"

const useProtectedPage = () => {
    //hook personalizado para proteger as páginas privadas quando não login e token salvo no localStorage
    const history = useHistory()

    useLayoutEffect (() => {

        const token = localStorage.getItem('token')
        if (!token) {

            goToLogin(history)
        }
    }, [history])
}

export default useProtectedPage