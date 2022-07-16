import GitHubPresentation from "./gitHub.presentation"
import React, { useState } from 'react'
import imgCover from "@src/assets/images/portrait/imgCover.jpeg"
import { useGetGitHubData } from '../../hooks/useGetGithubData'
const GitHub = () => {
    const { gitHubData } = useGetGitHubData()
    const [isOpen, setIsOpen] = useState(false)
    const data = {
        gitHubData,
        imgCover,
        isOpen,
        setIsOpen
    }
  return <GitHubPresentation {...data}/>
}

export default GitHub