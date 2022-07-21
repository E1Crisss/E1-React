import styled from 'styled-components'

export const Button = styled.button`
background-color: #0D2350;
border-radius: 8px;
border: 1px solid #6DA8E2;
color: #fffefd;
cursor: pointer;
height: 30px;
width: 120px;
margin-left: 8px;

& :disabled {
    background-color: #0971C9;
    color: black;
}
`