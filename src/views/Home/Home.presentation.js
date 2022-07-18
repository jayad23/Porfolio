import { FlagButton } from "../../@core/components/flagButton/FlagButton"
import ListItem from "../../styled.components/Li/ListItem"
import { Container, WelcomeContainer, Welcome, ListContainer, UlWrapper, UlTitle, BodyWrapper, ImageWrapper, Picture, NameWrapper } from "./home.styled"
const Home = ({ values, technologies, arrOfBtn, portfolioAvatar}) => {
  return (
    <Container>
        <WelcomeContainer >
          <Welcome>{values?.welcome}</Welcome>
          <FlagButton arr={arrOfBtn}/>
        </WelcomeContainer>
        <UlWrapper>
          <UlTitle>{values?.welcome_info}</UlTitle>
          <ListContainer>
            {
              technologies?.map((tech, idx) => (
                <ListItem 
                  key={idx}
                  name={tech.name}
                  Icon={tech.icon}
                />
              ))
            }
          </ListContainer>
        </UlWrapper>
        <BodyWrapper>
          <ImageWrapper>
            <Picture src={portfolioAvatar} alt="kike_pic" />
          </ImageWrapper>
          <NameWrapper>
            <h1>Kike Vanegas</h1>
            <p>I am a React Developer</p>
          </NameWrapper>
        </BodyWrapper>
    </Container>
  )
}

export default Home