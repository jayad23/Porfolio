import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Translate } from "../redux/slices/ENslice/thunks"
export const useTranslate = () => {
    const gitHubData = useSelector(state => state.gitHubSlice.data)
    const dispatch = useDispatch()
    const [savedData, setSavedData] = useState({ 
        followers: "Followers", 
        repos: "Repos", 
        friends: "Friends", 
        contributions: "Contributions", 
        home: "Home",
        profile: "See Profile",
        bio: gitHubData?.bio
    }) 
    useEffect(() => {
        setSavedData({...savedData, bio: gitHubData?.bio})
    }, [gitHubData])
    useEffect(() => {
        dispatch(Translate(savedData))
    }, [savedData])
    const translate = (selection) => {
        if (selection === "ES") {
            const ES = { 
                followers: "Seguid...", 
                repos: "Repos", 
                friends: "Amigos", 
                contributions: "Contribución", 
                home:"Inicio",
                profile: "Ver Perfil",
                bio:"Soy un Desarrollador Web. Me divierto creando soluciones tecnológicas con React Js. También, soy un dedicato instructor de React; en todo caso, soy un fanático de React"
            }
            dispatch(Translate(ES))
        } else if (selection === "EN") {
            const ES = { 
                followers: "Followers", 
                repos: "Repos", 
                friends: "Friends", 
                contributions: "Contributions", 
                home: "Home",
                profile: "See Profile",
                bio: gitHubData?.bio
            }
            dispatch(Translate(ES))
        }
    }

    return {
        translate
    }
}