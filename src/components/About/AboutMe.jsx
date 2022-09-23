import useAppContext from "../../hooks/useAppContext";
import Certificates from "./Certificates";
import {
  AboutMeTitle,
  AboutMeContainer,
  AboutMeDescription,
  TrainingContainer,
} from "./stylesAbout";

const AboutMe = () => {
    const { handleClickMenu, isClicked } = useAppContext();
  return (
    <AboutMeContainer id="aboutme" onClick={isClicked ? handleClickMenu : undefined}>
      <AboutMeTitle>Sobre mí</AboutMeTitle>
      <AboutMeDescription>
        {" "}
        Me considero una persona capaz de hacer lo que se proponga ya que cuando
        me pongo un objetivo en mente no voy a parar hasta conseguirlo. 
        Me preocupo mucho por la prolijidad de
        los proyectos, tanto del sitio como del código en sí, para ofrecerle una
        mejor experiencia al usuario y a la persona o empresa que me contrate.
      </AboutMeDescription>
      <AboutMeDescription>
        Actualmente me encuentro estudiando desarrollo Backend para poder
        completar el Full Stack.
      </AboutMeDescription>

      <TrainingContainer>
        <AboutMeTitle>Formación</AboutMeTitle>
        <AboutMeDescription>
          Me formé como Desarrollador Front End como autodidacta a través de la
          plataforma Udemy y estudiando en CoderHouse a la par la Carrera de
          Desarrollador Full Stack la cuál sigo en la actualidad. También
          realicé una simulación de Trabajo Real en No Country, en la cuál
          éramos un grupo de 11 personas y teníamos un Team Leader asignado para
          controlar el proyecto.
        </AboutMeDescription>
        <Certificates />
      </TrainingContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;
