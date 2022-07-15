import styled from "styled-components"

export const BasicSpan = styled.span`
    color: ${props => (props.skin === "dark" ? "yellow" : "dark")}
`