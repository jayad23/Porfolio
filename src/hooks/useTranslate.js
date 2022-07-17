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
        bio: gitHubData?.bio
    }) 
    const [values] = useState({ 
        followers: "Followers", 
        repos: "Repos", 
        friends: "Friends", 
        contributions: "Contributions", 
        home: "Home",
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
                bio:"Soy un Desarrollador Web. Me divierto creando soluciones tecnológicas con React Js. También, soy un dedicato instructor de React; en todo caso, soy un fanático de React"
            }
            dispatch(Translate(ES))
        } else if (selection === "EN") {
            dispatch(Translate(values))
        }
    }

    return {
        translate
    }
}