// ** React Imports
import { useActive } from "@src/hooks/useActive"
import makeStyles from "@mui/styles/makeStyles"
import clx from "clsx"
import styles from "../../assets/styles/profile/profilePicture"
const useStyles = makeStyles(styles)
import {  stylesHeader } from "./profile.header.styles"
import { AlignJustify, FileText, Users, Home } from 'react-feather'
import { Card, CardImg, Collapse, Navbar, Nav, Button } from 'reactstrap'
import { useSelector } from "react-redux"
const ProfileHeader = ({ gitHubData, imgCover, isOpen, setIsOpen }) => {
  const { component, handlerActive } = useActive()
  const classes = useStyles()
  const skin = useSelector(state => state.layout.skin)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <Card className={stylesHeader.container} >
      <CardImg className={classes.cover} src={imgCover} alt='User Profile Image' top/>
      <div className={stylesHeader.cover}>
        <div className={clx(stylesHeader.proImgContainer, classes.picContainer)}>
          <div className={clx(stylesHeader.profImgWrapper)}>
            <img className={clx(classes.profile, stylesHeader.profImg)} src={gitHubData?.avatar_url} alt='Card image'/>
            <div className={classes.followersinfo}>
              <p>Followers: {(gitHubData?.followers + gitHubData.following + gitHubData?.public_repos)}K</p>
            </div>
          </div>
          <div className={stylesHeader.textWrapper}>
            <h2 className={clx(stylesHeader.text, classes.title)}>{gitHubData?.name}</h2>
            <p className={clx(stylesHeader.text, classes.description)}>{gitHubData?.bio}</p>
          </div>
        </div>
      </div>
      <div className={clx(`${'profile-header-nav'}`, classes.cardContainer)}>
        <Navbar container={false} className='justify-content-end justify-content-md-between w-100' expand='md' light>
          <Button color='' className={clx(`${'btn-icon navbar-toggler'}`, classes.subMenu)} onClick={toggle}>
            <AlignJustify size={21} />
          </Button>
          <Collapse isOpen={isOpen} navbar>
            <div className='profile-tabs d-flex justify-content-between flex-wrap mt-1 mt-md-0'>
              <Nav className='mb-0' pills>
                {/* <NavItem>
                  <NavLink className='fw-bold' active={isRepo} onClick={() => handlerActive("repo")}>
                    <span className='d-none d-md-block'>Repos: {gitHubData.public_repos}</span>
                    <FileText className='d-block d-md-none' size={14} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className='fw-bold' active={isUser} onClick={() => handlerActive("user")}>
                    <span className='d-none d-md-block'>Friends: {gitHubData.followers}</span>
                    <Users className='d-block d-md-none' size={14} />
                  </NavLink>
                </NavItem> */}
                <Button color={`${component === "repo" ? "info" : ""}`} onClick = {() => handlerActive("repo")}>
                  <span style={{ color: `${ skin === "dark" ? "white" : "dark"}`}}>Repos: {gitHubData.public_repos}</span>
                  <FileText className='d-block d-md-none' size={14} />
                </Button>
                <Button color={`${component === "user" ? "info" : ""}`} onClick = {() => handlerActive("user")}>
                  <span style={{ color: `${ skin === "dark" ? "white" : "dark"}`}}>Friends: {gitHubData.followers}</span>
                  <Users className='d-block d-md-none' size={14} />
                </Button>
              </Nav>
              <Button color="info" onClick = {() => handlerActive("home")}>
                <Home className='d-block d-md-none' size={14} />
                <span className='fw-bold d-none d-md-block'>Home</span>
              </Button>
            </div>
          </Collapse>
        </Navbar>
      </div>
    </Card>
  )
}

export default ProfileHeader
