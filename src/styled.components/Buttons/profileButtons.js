import styled from "styled-components"

export const ProfBtn = styled.button`
    width: 80px;
    border: none;
    background-color: #00cfe8;
    border-radius: 8px;
    color: ${props => (props.skin === "dark" ? "black" : "white")};
    font-weight: bolder;
`