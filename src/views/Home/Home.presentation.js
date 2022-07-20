import { FlagButton } from "../../@core/components/flagButton/FlagButton"
import { CustomSpan } from "../../styled.components/Span/Span"
import ListItem from "../../styled.components/Li/ListItem"
import { Container, HomeImageContainer, HomeTextContainer, Image, Homename, Homejob, WelcomeContainer, Welcome, ListContainer, UlWrapper, UlTitle, BodyWrapper, ImageWrapper, Picture, NameWrapper, Name} from "./home.styled"
const Home = ({ values, technologies, arrOfBtn, skin, personalInfo}) => {
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
    // <Container>
    //     <WelcomeContainer >
    //       <Welcome>{values?.welcome}</Welcome>
    //       <FlagButton arr={arrOfBtn}/>
    //     </WelcomeContainer>
    //.    <UlTitle>{values?.welcome_info}</UlTitle>
    //     <UlWrapper>
    //       
    //       <ListContainer>
    //         {
    //           technologies?.map((tech, idx) => (
    //             <ListItem 
    //               key={idx}
    //               name={tech.name}
    //               Icon={tech.icon}
    //             />
    //           ))
    //         }
    //       </ListContainer>
    //     </UlWrapper>
    //     <BodyWrapper>
    //       <ImageWrapper>
    //         <Picture src={personalInfo?.portfolioAvatar} alt="kike_pic" />
    //       </ImageWrapper>
    //       <NameWrapper>
    //         <Name>{personalInfo?.nick}</Name>
    //         <CustomSpan
    //           values={values}
    //           skin={skin}
    //         />
    //       </NameWrapper>
    //     </BodyWrapper>
    // </Container>
  )
}

export default Home