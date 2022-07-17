import React from 'react'
import { Flag } from './Flag'
import { useSelector } from "react-redux"
export const FlagButton = ({ arr }) => {
  const skin = useSelector(state => state.layout.skin)
  return (
    <div style={{ marginLeft: "20px"}}>
        {
            arr?.map((flag, index) => (
                <Flag
                    key={index}
                    onTranslate={flag.event}
                    flag={flag.flag}
                    alt={flag.alt}
                    selection={flag.selection}
                    skin={skin}
                    bg_light={flag.bg_light}
                    bg_dark={flag.bg_dark}
                />
            ))
        }
    </div>
  )
}