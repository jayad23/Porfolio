import styled, { keyframes } from "styled-components"

const adaptAnimation = (value) => {
    const welcomeAnimation = keyframes`
        0%{
            width: 0px;
        }
        100%{
            width: ${value}px;
        }
    `
    return welcomeAnimation
}

const blinkAnimation = keyframes`
    0%, 100% {
        border-color: transparent;
    }
    50% {
    border-color: #CE2D4F;
    }
`

export const Container = styled.div`
    display: flex;
    min-height: 100vh;
    height: 100%;
    overflow: hidden;
    background-color: #060707;
    background-image: linear-gradient(to bottom right, rgba(82, 79, 79, 0.795), rgb(0, 0, 0));
    @media screen and (max-width: 650px){
        background-image: linear-gradient(to bottom right, rgba(82, 79, 79, 0.678), rgba(0, 0, 0, 0.637)), url("https://kike-vanegas-dev.vercel.app/static/media/self.be9a4dc0.jpg");
        background-size: cover;
        background-position: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const HomeImageContainer = styled.div`
    width: 40%;
    overflow: hidden;
    @media screen and (max-width: 650px){
        display: none;
    }
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1000;
`

export const HomeTextContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Permanent Marker', cursive;
    font-size: 3rem;
    @media screen and (max-width: 650px){
        background-image: none;
    }
`

export const Homename = styled.h3`
    color: #B91646 !important;
    cursor:pointer; 
    margin: 0;
    font-size: 5rem;
    @media screen and (max-width: 320px){
        font-size: 4rem;
    }
`

export const Homejob = styled.h4`
    color: #68e642 !important;
    font-size: 2rem;
    @media screen and (max-width: 471px){
        margin-top: 10%;
        font-size: 2.5rem;
    }

    @media screen and (max-width: 375px){
        font-size: 1.5rem;  
    }
`

export const WelcomeContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-left: 20px;
    @media screen and (max-width: 650px){
        width: 160%;
        padding: 0 3% 0 3%;
        margin: 0;
    }
    @media screen and (max-width: 356px){
        width: 180%;
        padding: 0 11% 0 11%;
    }
    @media screen and (max-width: 320px){
        font-size: 5px !important;
    }
`

export const Welcome = styled.h1`
    color: #433F55;
    font-family: 'Fira Mono', monospace;
    overflow: hidden; 
    border-right: .15em solid #CE2D4F; 
    white-space: nowrap; 
    letter-spacing: .15em; 
    animation: 
        ${adaptAnimation(319)} 2s steps(25),
        ${blinkAnimation} 1.3s infinite 2s
    ;
    @media screen and (max-width: 768px){
        animation: 
            ${adaptAnimation(300)} 2s steps(25),
            ${blinkAnimation} 1.3s infinite 2s
        ; 
    }
    @media screen and (max-width: 425px){
        letter-spacing: .05em;
        animation: 
            ${adaptAnimation(220)} 2s steps(25),
            ${blinkAnimation} 1.3s infinite 2s
        ; 
    }
`
const liAnimation = keyframes`
    0%{
        transform: translateX(-100%);
    }
    100%{
        transform: translateX(140%);
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
    position: absolute;
    top: 15%;
    animation: ${liAnimation} linear 22s infinite;
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

