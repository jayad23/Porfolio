import { usePersonalData } from "../../../../hooks/usePersonalData"
import { useState, useEffect } from "react"
// ** Custom Components
import Avatar from "@components/avatar"
import { DropDownComponent } from "./dropDownMenu"
// ** Third Party Components
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  GitHub,
  MessageCircle, //WhatsApp
  Linkedin,
  Pause
} from "react-feather"

// ** Reactstrap Imports
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle
} from "reactstrap"

// ** Default Avatar Image
import avatar from "@src/assets/images/profile-pic.jpg"

const UserDropdown = () => {
  const [dropDownList, setDropDownList] = useState([])
  const { personalInfo } = usePersonalData()
  const { social } = personalInfo
  useEffect(() => {
    const arrOfElements = [
      {element: Linkedin, name: "LinkedIn"},
      {element: GitHub, name: "GitHub"},
      {element: MessageCircle, name: "WhatsApp"},
      {element: Twitter, name: "Twitter"},
      {element: Facebook, name: "Facebook"},
      {element: Instagram, name: "Instagram"},
      {element: Youtube, name: "YouTube"},
      {element: Pause, name: "My Playlist"}
    ]
    const arr = []
    if (social?.length > 0) {
      social.map((item, idx) => arr.push({
        id: idx,
        link: item.name,
        element: arrOfElements[idx]?.element,
        name: arrOfElements[idx]?.name
      }))
    }
    setDropDownList(arr)
  }, [social])
  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        href="/"
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name fw-bold">{personalInfo?.name}</span>
          <span className="user-status">{personalInfo?.job}</span>
        </div>
        <Avatar
          img={avatar}
          imgHeight="40"
          imgWidth="40"
          status="online"
        />
      </DropdownToggle>
      <DropdownMenu end>
        {
          dropDownList?.length > 0 &&
          dropDownList.map(list => (
            <DropDownComponent 
              key={list.id}
              Element={list.element}
              name={list.name}
              link={list.link}
            />) 
          )
        }
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
