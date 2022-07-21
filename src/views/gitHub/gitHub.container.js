import GitHubPresentation from "./gitHub.presentation"
import React, { useState } from 'react'
import { useActive } from "@src/hooks/useActive"
import makeStyles from "@mui/styles/makeStyles"
import styles from "@src/assets/styles/profile/profilePicture"
const useStyles = makeStyles(styles)
import imgCover from "@src/assets/images/portrait/imgCover.jpg"
import { useGetGitHubData } from '../../hooks/useGetGithubData'
import { useTranslateGh } from '../../hooks/useTranslate'
import { useSelector } from "react-redux"
import { useColorshifter } from "@src/hooks/useColorshifter"
import { usePaginate } from "../../hooks/usePaginate"

const GitHub = () => {
    const { gitHubData } = useGetGitHubData()
    const { translate } = useTranslateGh()
    const [isOpen, setIsOpen] = useState(false)
    const { component, handlerActive } = useActive()
    const { ColorShifter } = useColorshifter()
    const classes = useStyles()
    const skin = useSelector(state => state.layout.skin)
    const toggle = () => setIsOpen(!isOpen)
    const langObj = useSelector(state => state.LangSlice)
    const { countBtn, reposShow, setIndex, index} = usePaginate()
    
    const arrOfBtn = [ 
      {
        event: translate,
        flag: "https://flagcdn.com/w20/us.png",
        alt: "usa_Flag",
        selection: "EN",
        bg_light: "#fff",
        bg_dark: "#283046"
      }, {
        event: translate,
        flag: "https://flagcdn.com/w20/es.png",
        alt: "esp_Flag",
        selection: "ES",
        bg_light: "#fff",
        bg_dark: "#283046"
      }
    ]
    const data = {
        gitHubData,
        imgCover,
        isOpen,
        arrOfBtn,
        langObj,
        component,
        handlerActive,
        ColorShifter,
        classes,
        skin,
        toggle,
        countBtn, 
        reposShow, 
        setIndex,
        index
    }
  return <GitHubPresentation {...data}/>
}

export default GitHub