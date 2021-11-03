import { useState } from "react"

const useForm = (initialState) => {
    // hook personalizado para criação rápida de um formulário
    // foi usado no signup e no login 
    const [form, setForm] = useState(initialState)

    const handleInputChange = (event) => {
        const {value, name} = event.target
        setForm({...form, [name]: value})
    }

    const clear = () => {
        setForm(initialState)
    }

    return [form, handleInputChange, clear]
}

export default useForm