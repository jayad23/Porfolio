import React from "react"
import styled from "styled-components"
const P = styled.p`
    font-size: ${props => (props.size === 30 ? "30px" : "15px")}
`
const spanStyles = {
    color: "#0078AA",
    textShadow: "-2px -2px 2px rgba(146, 150, 150, 1)"
}

export const CustomSpan = ({ values, skin }) => {
    if (values?.selection === "EN") {
        return (
            <React.Fragment>
                <P size={30}>I am a <span style={spanStyles}>React</span> developer</P>
                <P size={15}>{values?.born}</P>
                <P size={15}>Living in <span style={{ color: `${skin === "dark" ? "#F4BE06" : "#A81519"}`}}>Spain</span></P>
            </React.Fragment>
        )
    } else if (values?.selection === "ES") {
        return (
            <React.Fragment>
                <P size={30}>Soy un Desarrollador <span style={spanStyles}>React</span></P>
                <P size={15}>{values?.born}</P>
                <P size={15}>Vivo en <span style={{ color: `${skin === "dark" ? "#F4BE06" : "#A81519"}`}}>España</span></P>
            </React.Fragment>
        )
    }
}