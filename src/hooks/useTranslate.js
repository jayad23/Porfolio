import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { TranslateGitHub, TranslateHome } from "../redux/slices/ENslice/thunks"
export const useTranslateGh = () => {
    const gitHubData = useSelector(state => state.gitHubSlice.gitHubData)
    const dispatch = useDispatch()
    const [savedData, setSavedData] = useState({ 
        followers: "Followers", 
        repos: "Repos", 
        friends: "Friends", 
        contributions: "Contributions", 
        base: "Base",
        profile: "See Profile",
        bio: gitHubData?.bio
    }) 
    useEffect(() => {
        setSavedData({...savedData, bio: gitHubData?.bio})
    }, [gitHubData])
    useEffect(() => {
        dispatch(TranslateGitHub(savedData))
    }, [savedData])
    const translate = (selection) => {
        if (selection === "ES") {
            const ES = { 
                followers: "Seguid...", 
                repos: "Repos", 
                friends: "Amigos", 
                contributions: "Contribución", 
                base:"Inicio",
                profile: "Ver Perfil",
                bio:"Soy un Desarrollador Web. Me divierto creando soluciones tecnológicas con React Js. También, soy un dedicato instructor de React; en todo caso, soy un fanático de React"
            }
            dispatch(TranslateGitHub(ES))
        } else if (selection === "EN") {
            const ES = { 
                followers: "Followers", 
                repos: "Repos", 
                friends: "Friends", 
                contributions: "Contributions", 
                base: "Base",
                profile: "See Profile",
                bio: gitHubData?.bio
            }
            dispatch(TranslateGitHub(ES))
        }
    }

    return {
        translate
    }
}

export const useTranslateHome = () => {
    const dispatch = useDispatch()
    const [homeValues, setHomeValues] = useState({
        welcome: "Welcome to my portfolio",
        welcome_info: "This portfolio includes:",
        intro:"I am a react developer",
        born: "Born in Medellin, Col.",
        selection: "EN"
    })

    useEffect(() => {
        dispatch(TranslateHome(homeValues))
    }, [])

    const translateHome = (selection) => {
        if (selection === "ES") {
            const ES = {
                welcome: "Bienvenidos a mi portafolio",
                welcome_info: "Este portafolio incluye:",
                intro: "Soy Desarrollador de React",
                born: "Nací en Medellín, Col",
                selection: "ES"

            }
            dispatch(TranslateHome(ES))
        } else if (selection === "EN") {
            const EN = {
                welcome: "Welcome to my portfolio",
                welcome_info: "This portfolio includes:",
                intro: "I am a react developer",
                born: "Born in Medellin, Col.",
                selection: "EN"
            }
            dispatch(TranslateHome(EN))
        }
    }

    return { translateHome }
}