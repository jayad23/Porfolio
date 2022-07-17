import GitHubPresentation from "./gitHub.presentation"
import React, { useState } from 'react'
import { useActive } from "@src/hooks/useActive"
import makeStyles from "@mui/styles/makeStyles"
import styles from "@src/assets/styles/profile/profilePicture"
const useStyles = makeStyles(styles)
import imgCover from "@src/assets/images/portrait/imgCover.jpeg"
import { useGetGitHubData } from '../../hooks/useGetGithubData'
import { useTranslate } from '../../hooks/useTranslate'
import { useSelector } from "react-redux"
import { useColorshifter } from "@src/hooks/useColorshifter"

const GitHub = () => {
    const { gitHubData } = useGetGitHubData()
    const { translate } = useTranslate()
    const [isOpen, setIsOpen] = useState(false)
    const { component, handlerActive } = useActive()
    const { ColorShifter } = useColorshifter()
    const classes = useStyles()
    const skin = useSelector(state => state.layout.skin)
    const toggle = () => setIsOpen(!isOpen)
    const langObj = useSelector(state => state.LangSlice)
    const data = {
        gitHubData,
        imgCover,
        isOpen,
        translate,
        langObj,
        component,
        handlerActive,
        ColorShifter,
        classes,
        skin,
        toggle
    }
  return <GitHubPresentation {...data}/>
}

export default GitHub