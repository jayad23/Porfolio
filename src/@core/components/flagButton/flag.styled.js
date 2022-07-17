import styled from "styled-components"

export const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: ${props => (props.skin === "dark" ? props.bg_dark : props.bg_light)};
`

