import { NavLink } from "reactstrap"
import { useState } from "react"
import { Rss, Users } from "react-feather"
export const Navlink = ({ isSecondElement }) => {
    console.log(Users)
    const [isActive, setIsActive] = useState(false)
    return (
        <NavLink className='fw-bold' active={isActive} onClick={() => setIsActive(prevState => !prevState)}>
            <span className='d-none d-md-block'>Repos</span>
            {
                isSecondElement ? <Users className='d-block d-md-none' size={14} /> : <Rss className='d-block d-md-none' size={14} />
            }
        </NavLink>
    )
}