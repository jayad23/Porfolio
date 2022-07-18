import styled, { keyframes } from "styled-components"

const welcomeAnimation = keyframes`
    0%{
        width: 0px;
    }
    100%{
        width: 500px;
    }
`

const blinkAnimation = keyframes`
    0%, 100% {
        border-color: transparent;
    }
    50% {
    border-color: #CE2D4F;
    }
`

export const Container = styled.div`
    border: 2px solid pink;
`

export const WelcomeContainer = styled.section`
    border: 1px solid white;
    display: flex;
    justify-content: space-evenly;
    padding: 0;
`

export const Welcome = styled.h1`
    color: #433F55;
    font-family: 'Fira Mono', monospace;
    overflow: hidden; 
    border-right: .15em solid #CE2D4F; 
    white-space: nowrap; 
    margin: 0 auto; 
    letter-spacing: .15em; 
    animation: 
        ${welcomeAnimation} 2s steps(25),
        ${blinkAnimation} 1.3s infinite 2s
    ;
`

const liAnimation = keyframes`
    0%{
        margin-left: -110%;
    }
    100%{
        margin-left: 110%;
    }
`

export const UlWrapper = styled.section`
    padding-top: 30px;
    padding-bottom: 10px;
    overflow: hidden;
`

export const UlTitle = styled.p`
    font-family: 'Fira Mono', monospace;
    font-size: 1.2rem;
    @media (max-width: 375px) {
        font-size: 12px;
    }
`

export const ListContainer = styled.ul`
    display: flex;
    justify-content: space-evenly;
    gap: 50px;
    font-family: 'Fira Mono', monospace;
    font-size: 1.5rem;
    text-align: center;
    align-itens: center;
    overflow-y: hidden;
    margin-left: -1270px;
    position: absolute;
    animation: ${liAnimation} linear 12s infinite;
`

export const BodyWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 20px 0px 20px 0px;
    justify-content: center;
    text-align: center;
    align-items: center;
`

export const ImageWrapper = styled.section`
    width: 400px;
    border-radius: 20px;
`

export const Picture = styled.img`
    width: 100%;
    border-radius: 20px;
`

export const NameWrapper = styled.section`
    font-family: 'Permanent Marker', cursive;
    border: 1px solid blue;
    width: 80%;
`
export const Name = styled.h1`
    font-size: 8rem;
    text-shadow: -2px -2px 7px rgba(146, 150, 150, 1);
    color: #D61C4E !important;
`

