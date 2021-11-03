import React from 'react' 
import { ContainerMoviePrincipal, ContainerMovie } from './styled'
import { useHistory } from 'react-router'
import { goToMovie } from '../../routers/cordinator'

const MoviesOriginaisNetflix = (props) => {
    //componente responsável por renderizar a lista de filmes originaisNetflix
    const history = useHistory()

    const onClickCard = () =>
    goToMovie (history)

    return (
        
        <ContainerMoviePrincipal>
            
            <ContainerMovie onClick={() => onClickCard(props.index.id)}>
                <img src={`https://image.tmdb.org/t/p/original${props.index.poster_path}`} />
            </ContainerMovie>

        </ContainerMoviePrincipal>

    )
}

export default MoviesOriginaisNetflix
