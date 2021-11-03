import styled from "styled-components";

export const ContainerPrincial = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 40vw;
margin: 100px auto;
padding: 28px;
background-color: #222;
border-radius: 8px;
text-align: center;

h1 { 
   padding: 10px;
   font-size: 30px;
}

input {
    background-color: white;
    border: 2px solid white;
    border-radius: 5px;
    width: 30vw;
    padding: 15px;
    margin: 15px;

}

input:hover{
    border: solid 2px red;
    border-radius: 5px;
}
`

export const ContainerInput = styled.div`
padding: 10px;
margin: 20px;
`

