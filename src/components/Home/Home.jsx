import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAppContext from "../../hooks/useAppContext";
import {
  DeveloperName,
  Greetings,
  HomeContainer,
  InfoContainer,
  ScrollDown,
  Span,
  Stack,
} from "./stylesHome";
import Typewriter from 'typewriter-effect'
import ButtonCv from "./ButtonCv";

const Home = () => {
  const { handleClickMenu, isClicked } = useAppContext();
  
  const handleNameDeveloper =  (typewriter) => {
    typewriter.typeString('Desarrollador front end')
      .pauseFor(2500)
      .start();
  }


  return (
    <HomeContainer onClick={isClicked ? handleClickMenu : undefined}>
      <ButtonCv />
      <InfoContainer>
        <Greetings>Hola! Mi Nombre es</Greetings>
        <DeveloperName>Lucio Gastellu Arrieta</DeveloperName>
        <Span>Y soy</Span>
        <Stack><Typewriter onInit={handleNameDeveloper}/></Stack>
        <ScrollDown href="#aboutme"><FontAwesomeIcon icon={faCircleChevronDown}/></ScrollDown>
      </InfoContainer>
    </HomeContainer>
  );
};

export default Home;
