import styled from "styled-components"

export const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: ${props => (props.skin === "dark" ? "#283046" : "white")};
`

