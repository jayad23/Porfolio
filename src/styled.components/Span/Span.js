import React from "react"
import styled from "styled-components"
const P = styled.p`
    font-size: ${props => (props.size === 30 ? "30px" : "15px")};
    @media (max-width: 488px) {
        font-size: 20px;
    }
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
                <p style={{ fontFamily: "'Fira Mono', monospace", fontWeight: "bolder"}}>{values?.born}</p>
                <p style={{ fontFamily: "'Fira Mono', monospace", fontWeight: "bolder"}}>Living in <span style={{ color: `${skin === "dark" ? "#F4BE06" : "#A81519"}`}}>Spain</span></p>
            </React.Fragment>
        )
    } else if (values?.selection === "ES") {
        return (
            <React.Fragment>
                <P size={30}>Soy un Desarrollador <span style={spanStyles}>React</span></P>
                <p style={{ fontFamily: "'Fira Mono', monospace", fontWeight: "bolder"}}>{values?.born}</p>
                <p style={{ fontFamily: "'Fira Mono', monospace", fontWeight: "bolder"}}>Vivo en <span style={{ color: `${skin === "dark" ? "#F4BE06" : "#A81519"}`}}>España</span></p>
            </React.Fragment>
        )
    }
}