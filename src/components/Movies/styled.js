import styled from 'styled-components'

export const ContainerMoviePrincipal = styled.div`
display: inline-block;
position: relative;
left: 5px;
`

export const ContainerMovie = styled.div`

img {
    width: 9.6vw;
    transform: scale(0.9);
    transition: ease 0.2s;
    cursor: pointer;
   
}

img:hover {
    transform: scale(1);
}
`



