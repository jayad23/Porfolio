import clx from "clsx"
import {  stylesHeader } from "./profile.header.styles"
import { AlignJustify, FileText, Users, Home } from 'react-feather'
import { Card, CardImg, Collapse, Navbar, Nav, Button } from 'reactstrap'
import { FlagButton } from "../../@core/components/flagButton/FlagButton"

const ProfileHeader = ({ gitHubData, imgCover, isOpen, langObj, component, handlerActive, ColorShifter, classes, skin, toggle, arrOfBtn}) => {
  return (
    <Card className={stylesHeader.container} style={{ overflow: "hidden"}}>
      <CardImg className={classes.cover} src={imgCover} alt='User Profile Image' top/>
      <div className={stylesHeader.cover}>
        <div className={clx(stylesHeader.proImgContainer, classes.picContainer)}>
          <div className={clx(stylesHeader.profImgWrapper)}>
            <img className={clx(classes.profile, stylesHeader.profImg)} src={gitHubData?.avatar_url} alt='Card image'/>
            <div className={classes.followersinfo}>
              <p>{langObj?.followers}: {(gitHubData?.followers + gitHubData.following + gitHubData?.public_repos)}K</p>
            </div>
          </div>
          <div className={stylesHeader.textWrapper}>
            <h2 className={clx(stylesHeader.text, classes.title)}>{gitHubData?.name}</h2>
            <p className={clx(stylesHeader.text, classes.description)}>{gitHubData?.location}</p>
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
                <Button color={`${component === "repo" ? "info" : ""}`} onClick = {() => handlerActive("repo")}>
                  <span className={classes.hidden} style={ColorShifter(skin)}>{langObj?.repos}: {gitHubData.public_repos}</span>
                  <FileText className='d-block d-md-none' size={14} />
                </Button>
                <Button color={`${component === "user" ? "info" : ""}`} onClick = {() => handlerActive("user")}>
                  <span className={classes.hidden} style={ColorShifter(skin)}>{langObj?.friends}: {gitHubData.followers}</span>
                  <Users className='d-block d-md-none' size={14} />
                </Button>
                <Button color={`${component === "contribute" ? "info" : ""}`} onClick = {() => handlerActive("contribute")}>
                  <span className={classes.hidden} style={ColorShifter(skin)}>{langObj?.contributions}</span>
                  <Users className='d-block d-md-none' size={14} />
                </Button>
                <button style={{ backgroundColor: "transparent", border: "none", color: "white"}}>
                  <a className={classes.hidden} href={gitHubData?.html_url} target="_blank" rel="nonreferrer" style={{color: `${skin === "dark" ? "white" : "#283046"}`}}>{langObj?.profile}</a>
                </button>
                <FlagButton arr={arrOfBtn}/>
              </Nav>
              <Button color="info" onClick = {() => handlerActive("home")}>
                <Home className='d-block d-md-none' size={14} />
                <span className='fw-bold d-none d-md-block'>{langObj?.base}</span>
              </Button>
            </div>
          </Collapse>
        </Navbar>
      </div>
    </Card>
  )
}

export default ProfileHeader
