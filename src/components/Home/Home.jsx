import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAppContext from "../../hooks/useAppContext";
import {
  ContainerPhoto,
  DeveloperName,
  Greetings,
  HomeContainer,
  InfoContainer,
  MyPhoto,
  ScrollDown,
  Span,
  Stack,
} from "./stylesHome";
import Typewriter from 'typewriter-effect'
import ButtonCv from "./ButtonCv";
import PhotoCV from "../../img/yo.jpg"

const Home = () => {
  const { handleClickMenu, isClicked } = useAppContext();
  
  const handleNameDeveloper =  (typewriter) => {
    typewriter.typeString('Desarrollador front end')
      .pauseFor(2500)
      .start();
  }

  return (
    <HomeContainer onClick={isClicked ? handleClickMenu : undefined}>
      <ContainerPhoto>
        <MyPhoto src={PhotoCV} alt={PhotoCV} />
      </ContainerPhoto>
      <InfoContainer>
        <Greetings>Hola! Mi Nombre es</Greetings>
        <DeveloperName>Lucio Gastellu Arrieta</DeveloperName>
        <Span>Y soy</Span>
        <Stack><Typewriter onInit={handleNameDeveloper}/></Stack>
        <ScrollDown href="#aboutme"><FontAwesomeIcon icon={faCircleChevronDown}/></ScrollDown>
      </InfoContainer>
      <ButtonCv />
    </HomeContainer>
  );
};

export default Home;
