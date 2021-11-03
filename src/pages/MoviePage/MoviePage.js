import { Button } from '@material-ui/core'
import React, { useContext } from 'react'
import { ContainerPrincial, ContainerTitle, ContainerButton} from './styled'
import { useHistory} from 'react-router-dom'
import { goToHome } from '../../routers/cordinator'
import Comments from '../../components/Comments/Comments'
import GlobalContext from '../../global/GlobalContext'
import useProtectedPage from '../../hooks/useProtectedPage'

const MoviePage = () => {

    useProtectedPage()
    //hook personalizado para proteger a página 

    //lógica para criação e renderização dos comentários na tela
    const {state, setters} = useContext(GlobalContext)

    const onChangeComment = (event) => {
        state.setComment (event.target.value)
    }

    const onChangeName = (event) => {
        state.setName (event.target.value)
    }

    const showListComment = state.listComment.map ((index => {
        return <Comments key={index.name} index={index}/>
    }))

    const history = useHistory()

    const clickBack = () => {
        goToHome(history)
    }

    return (

        <div>
            
        <ContainerTitle>
            <h1>Gostou dos títulos?</h1> 
            <p>Deixe um comentário!</p>
        </ContainerTitle>

        {showListComment}

        <ContainerPrincial>
            
            <input placeholder="Nome" onChange={onChangeName} value={state.name} />
            <input placeholder="Comentário" onChange={onChangeComment} value={state.comment} />

            <ContainerButton>
                <Button onClick={setters.sendComment}
                    variant="contained" 
                    color="primary">
                    Enviar
                </Button>       
            </ContainerButton>

            <Button
                onClick={clickBack}
                variant="contained" 
                color="primary">
                Voltar
            </Button>  

        </ContainerPrincial>
        
        </div>
    )
}

export default MoviePage