import { useHistory } from "react-router"
import { useLayoutEffect } from "react"
import { goToHome } from "../routers/cordinator"

const useUnProtectedPage = () => {
    //hook personalizado para não gerar acesso a pagina de login e signup quando houver um token salvo no localStorage
    const history = useHistory()

    useLayoutEffect (() => {

        const token = localStorage.getItem('token')
        if (token) {

            goToHome(history)
        }
    }, [history])
}

export default useUnProtectedPage