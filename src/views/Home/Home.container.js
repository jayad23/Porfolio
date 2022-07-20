import React from 'react'
import Home from './Home.presentation.js'
import { useSelector } from 'react-redux'
import { usePersonalData } from "@src/hooks/usePersonalData"
import { useTranslateHome } from '../../hooks/useTranslate.js'
import { technologies } from '../../assets/global/variables.js'

const HomeContainer = () => {
  const values = useSelector(state => state.LangSlice)
  const skin = useSelector(state => state.layout.skin)
  const { personalInfo } = usePersonalData()
  const { translateHome } = useTranslateHome()
  const arrOfBtn = [ 
    {
      event: translateHome,
      flag: "https://flagcdn.com/w20/us.png",
      alt: "usa_Flag",
      selection: "EN",
      bg_light: "#white",
      bg_dark: "#161D31"
    }, {
      event: translateHome,
      flag: "https://flagcdn.com/w20/es.png",
      alt: "esp_Flag",
      selection: "ES",
      bg_light: "#f6f6f6",
      bg_dark: "#161D31"
    }
  ]
  const childProps = {
    values,
    personalInfo,
    technologies,
    skin
  }
  return <Home {...childProps}/>
}

export default HomeContainer