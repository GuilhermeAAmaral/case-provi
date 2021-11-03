import GlobalContext from "./GlobalContext"
import { BASE_URL, KEY_API } from "../constantes/urls"
import useRequestData from '../hooks/useRequestData'
import { useState } from "react"

const GlobalState = (props) => {

    //requisições para buscar na API a lista de filmes uutilizando o hook personalizado (useRequestData)
    const coverMovie = useRequestData ([], 
        `${BASE_URL}/discover/tv?with_network=213&language=pt-BR&api_key=${KEY_API}`
    )
    
    const originais = useRequestData ([], 
        `${BASE_URL}/discover/tv?with_network=213&language=pt-BR&api_key=${KEY_API}`
    ) 

    const recomended = useRequestData ([], 
        `${BASE_URL}/trending/all/week?language=pt-BR&api_key=${KEY_API}`
    )

    const top = useRequestData ([], 
        `${BASE_URL}/movie/top_rated?language=pt-BR&api_key=${KEY_API}`
    )
    
    //logica para gerar os comentários na MoviePage
    const [comment, setComment] = useState("")
    const [name, setName] = useState("")

    const [listComment, setListCommet] = useState([
        {
            name: "Bob",
            comment: "Adorei os titulos!!"
        }
    ])

    const sendComment = () => {
        const newComment = {
            name: name,
            comment: comment
        }
        const newList = [newComment, ...listComment]
        setListCommet (newList)
        setComment ("")
        setName ("")
    }

    //extração da lista de filmes e logica dos comentários para os demais componentes do código
    const state = {name, setName, comment, setComment, listComment}
    const setters = {sendComment}
    const requests = {coverMovie, originais, recomended, top}

    return (
        <GlobalContext.Provider value = {{state, setters, requests}}>
           {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState