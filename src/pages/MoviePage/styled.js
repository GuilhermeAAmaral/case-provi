import styled from "styled-components";

export const ContainerTitle = styled.div`
margin-top: 75px;
text-align: center;

h1 {
    font-size: 30px;
}

p {
    font-size: 25px;
    padding: 15px;
}
`

export const ContainerPrincial = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 45vw;
margin: 5px auto;
padding: 18px;
background-color: #222;
border-radius: 8px;
text-align: center;

h1 { 
   padding: 10px;
   font-size: 2vw;

}

input {
    background-color: white;
    border: 2px solid white;
    border-radius: 5px;
    width: 30vw;
    padding: 15px;
    margin: 15px;
    transition: ease 0.2;
}

input:hover{
    border: solid 2px red;
    border-radius: 5px;
}
`

export const ContainerButton = styled.div`
display: flex;
justify-content: space-around;
padding: 10px;
margin: 10px;
`

