import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { TranslateGitHub, TranslateHome } from "../redux/slices/ENslice/thunks"
export const useTranslateGh = () => {
    const gitHubData = useSelector(state => state.gitHubSlice.data)
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
                bio:"Hola, soy Jorge Duje, Desarrollador Frontend"
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
        welcome_info: "This portfolio was build by using these technologies:"
    })

    useEffect(() => {
        dispatch(TranslateHome(homeValues))
    }, [])

    const translateHome = (selection) => {
        if (selection === "ES") {
            const ES = {
                welcome: "Bienvenidos a mi portafolio",
                welcome_info: "Este portafolio se construyó usando las siguientes tech:"
            }
            dispatch(TranslateHome(ES))
        } else if (selection === "EN") {
            const EN = {
                welcome: "Welcome to my portfolio",
                welcome_info: "This portfolio was build by using these technologies:"
            }
            dispatch(TranslateHome(EN))
        }
    }

    return { translateHome }
}