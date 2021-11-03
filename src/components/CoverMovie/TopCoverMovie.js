import React from 'react'
import { Container, ContainerTitle } from './styled'

const TopCoverMovie = (props) => {
  //componente responsável por renderizar o filme em destaque na HomePage
  return (

    <Container>

      <ContainerTitle>
        <h1>{props.movieRandon && props.movieRandon.name}</h1>
      </ContainerTitle>

      {props.movieRandon && <img src={`https://image.tmdb.org/t/p/original${props.movieRandon.backdrop_path}`} />}

    </Container>
    
  )
}

export default TopCoverMovie