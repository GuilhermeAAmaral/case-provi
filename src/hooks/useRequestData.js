import { useEffect, useState } from "react";
import axios from 'axios'

const useRequestData = (initialData, url) => {

    //hook personalizado para criar requisições GET
    const [data, setData] = useState(initialData)

    useEffect (() => { 
        
        axios.get (url, {
            headers: {
                Authorization: localStorage.getItem ('token')
            }
        })
        .then ((res) => {
            setData (res.data.results)
        })

        .catch ((err) => {
            console.log (err)
            alert ('Ocorreu um erro, tente novamente')
        })
    }, [url])

    return (data)
}

export default useRequestData