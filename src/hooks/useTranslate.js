import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
export const useTranslate = () => {
    const gitHubData = useSelector(state => state.gitHubSlice.data)
    const [savedData, setSavedData] = useState({ 
        followers: "Followers", 
        repos: "Repos", 
        friends: "Friends", 
        contributions: "Contributions", 
        home: "Home",
        bio: gitHubData?.bio
    }) 
    const [values, setValues] = useState({ 
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
        setValues(savedData)
    }, [savedData])
    const translate = (selection) => {
        if (selection === "ES") {
            setValues({ 
                followers: "Seguid...", 
                repos: "Repos", 
                friends: "Amigos", 
                contributions: "Contribución", 
                home:"Inicio",
                bio:"Soy un Desarrollador Web. Me divierto creando soluciones tecnológicas con React Js. También, soy un dedicato instructor de React; en todo caso, soy un fanático de React"
            })
        } else if (selection === "EN") {
            setValues(savedData)
        }
    }
    console.log(values)
    return {
        values,
        translate
    }
}