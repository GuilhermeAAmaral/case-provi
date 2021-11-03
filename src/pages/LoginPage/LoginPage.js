import React, { useState } from 'react'
import { ContainerPrincial, ContainerInput, ContainerTitle } from './styled'
import { Button } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router'
import { goToSignup } from '../../routers/cordinator'
import { login } from '../../requests/requests'
import useUnProtectedPage from '../../hooks/useUnProtectedPage'
import { CircularProgress } from '@material-ui/core'

const LoginPage = () => {
    
    //hook personalizado para não ter acesso a página quando está logado
    useUnProtectedPage()
    
    const history = useHistory()
    
    //hook personalizado para geração de formulário de login
    const [form, onChange, clear] = useForm({email: "", password: ""})

    const [isLoading, setIsLoading] = useState(false)

    //função que gera o formulário e faz a requisição para a API e salva o token no localStorage
    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history, setIsLoading)
    }

    return (
        <div>

        <ContainerTitle>
            <h1>Filmes, séries e muito mais. Sem limites.</h1> 
            <p>Assista onde quiser. Cancele quando quiser.</p>
        </ContainerTitle>
        
        <ContainerPrincial>

            <h1>Faça login</h1>

            <ContainerInput>
                <form onSubmit={onSubmitForm}>
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
                        {isLoading ? <CircularProgress color={"inherit"} size={24}/> : <>Entrar</>}
                    </Button>
                </form>
  
            </ContainerInput>

            <Button onClick={() => goToSignup(history)}
                variant="text" 
                color="primary">
                Não possui conta? Cadastre-se!
            </Button>

        </ContainerPrincial>
        </div>
    )
}

export default LoginPage