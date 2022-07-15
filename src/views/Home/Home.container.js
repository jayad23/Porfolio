import React, { useState } from 'react'
import Home from './Home.presentation.js'
import imgCover from "@src/assets/images/portrait/imgCover.jpeg"
import { useGetGitHubData } from '../../hooks/useGetGithubData'

const navLinkClasses = [
    {   
        name: "Repos",
        navLink:'fw-bold',
        span:'d-none d-md-block',
        isSecondElement: false,
        secondElement: 'd-block d-md-none'
    },
    { 
        name: "Friends",
        navLink:'fw-bold',
        span:'d-none d-md-block',
        isSecondElement: true,
        secondElement: 'd-block d-md-none'
    }
]

const HomeContainer = () => {
    const { gitHubData } = useGetGitHubData()
    const [isOpen, setIsOpen] = useState(false)
    const data = {
        gitHubData,
        imgCover,
        isOpen,
        setIsOpen,
        navLinkClasses
    }
  return <Home {...data}/>
}

export default HomeContainer