import { CustomSpan } from "../../styled.components/Span/Span"
import ListItem from "../../styled.components/Li/ListItem"
import { Container, HomeImageContainer, HomeTextContainer, Image, Homename, WelcomeContainer, Welcome, ListContainer } from "./home.styled"
const Home = ({ values, technologies, skin, personalInfo}) => {
  console.log(values)
  return (
    <Container skin={skin}>     
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
      <HomeImageContainer>
        <Image src={personalInfo?.portfolioAvatar} alt={personalInfo?.name} />
      </HomeImageContainer>
      <HomeTextContainer>
          <Homename>{personalInfo?.nick}</Homename>
          <WelcomeContainer>
            <Welcome>{personalInfo?.job}</Welcome>
          </WelcomeContainer>
      </HomeTextContainer>
    </Container>
  )
}

export default Home