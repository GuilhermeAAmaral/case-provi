import React, {useState} from 'react'
import { Button } from '@material-ui/core'
import { ContainerPrincial, ContainerInput } from './styled'
import useForm from '../../hooks/useForm'
import useUnProtectedPage from '../../hooks/useUnProtectedPage'
import { signup } from '../../requests/requests'
import { useHistory } from 'react-router'
import { CircularProgress } from '@material-ui/core'

const SignupPage = () => {

    useUnProtectedPage()
    //hook personalizado para não ter acesso a página quando está logado

    const history = useHistory()

    //hook personalizado para geração de formulário de signup
    const [form, onChange, clear] = useForm({name: "", email: "", password: ""})

    const [isLoading, setIsLoading] = useState(false)

    //função que gera o formulário e faz a requisição para a API e salva o token no localStorage
    const onSubmitForm = (event) => {
        event.preventDefault()
        signup (form, clear, history, setIsLoading)
    }

    return (

        <ContainerPrincial>
            <h1>Realize o seu cadastro</h1>

            <ContainerInput>
                <form onSubmit={onSubmitForm}>
                <input 
                    placeholder="Nome"
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    required
                    type={"text"}
                    />

                    <input 
                        placeholder="E-mail"
                        name={"email"}
                        value={form.email}
                        onChange={onChange}
                        required
                        type={"email"}
                    />

                    <input 
                        placeholder="Senha"
                        name={"password"}
                        value={form.password}
                        onChange={onChange} 
                        required
                        type={"password"}
                    />

                    <Button
                        type={"submit"}
                        variant="contained" 
                        color="primary">
                        {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Cadastre-se</>}
                    </Button>
                </form>
            </ContainerInput>
        </ContainerPrincial>
    )
}

export default SignupPage