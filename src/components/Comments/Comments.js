import React from 'react'
import { ContainerPrincial } from './styled'

const Comments = (props) => {
    //componente responsável por renderizar os comentários na tela 
    return (

        <ContainerPrincial>
        
            <p><strong>Nome: </strong>{props.index.name}</p>
            <p><strong>Comentário: </strong>{props.index.comment}</p>
 
        </ContainerPrincial>

    )
}

export default Comments