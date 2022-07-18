import { FlagButton } from "../../@core/components/flagButton/FlagButton"
import { CustomSpan } from "../../styled.components/Span/Span"
import ListItem from "../../styled.components/Li/ListItem"
import { Container, WelcomeContainer, Welcome, ListContainer, UlWrapper, UlTitle, BodyWrapper, ImageWrapper, Picture, NameWrapper, Name} from "./home.styled"
const Home = ({ values, technologies, arrOfBtn, skin, personalInfo}) => {
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
            <Picture src={personalInfo?.portfolioAvatar} alt="kike_pic" />
          </ImageWrapper>
          <NameWrapper>
            <Name>{personalInfo?.nick}</Name>
            <CustomSpan
              values={values}
              skin={skin}
            />
          </NameWrapper>
        </BodyWrapper>
    </Container>
  )
}

export default Home