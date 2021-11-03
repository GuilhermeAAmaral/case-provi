import { ContainerPrincipal, ContainerTopCoverMovie} from './styled'
import MoviesOriginaisNetflix from '../../components/Movies/MoviesOriginaisNetfliex'
import MoviesRecomended from "../../components/Movies/MoviesRecomended"
import MoviesTop from "../../components/Movies/MoviesTop"
import TopCoverMovie from '../../components/CoverMovie/TopCoverMovie'
import { useContext } from 'react'
import GlobalContext from '../../global/GlobalContext'
import useProtectedPage from '../../hooks/useProtectedPage'

const HomePage = () => {

    useProtectedPage()
    
    const {requests} = useContext (GlobalContext)

    //lógica para renderizar a lista de filmes em destaque no topo do site.
    const coverMovieRandon = Math.floor(Math.random() * (requests.coverMovie.length -1))
    const movieRandon = requests.coverMovie[coverMovieRandon]
    
    //renderização das listas de filmes originais, recomendados e em alta com inclusão em componente
    const originaisNet = requests.originais.map ((index => {
        return <MoviesOriginaisNetflix  key={index.id} index={index} />
    })) 

    const recomendedNet = requests.recomended.map ((index => {
        return <MoviesRecomended key={index.id} index={index} />
    }))

    const topNet = requests.top.map ((index => {
        return <MoviesTop key={index.id} index={index}/>
    }))

    return (
        
        <ContainerPrincipal>

            <ContainerTopCoverMovie>
                <TopCoverMovie movieRandon ={movieRandon}/>
            </ContainerTopCoverMovie>
       
          
            <h2>Originais Netflix</h2>
            {originaisNet}
           
            <h2>Recomendados para Você</h2>
            {recomendedNet}
                    
            <h2>Em Alta</h2>          
            {topNet}          
           
        </ContainerPrincipal>
    )
}

export default HomePage