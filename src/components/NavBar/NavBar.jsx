import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAppContext from "../../hooks/useAppContext";
import Logo from "./Logo";
import {
  Aside,
  ContainerHamburger,
  LinkIcon,
  Links,
  List,
  DivIcon,
  Navigation,
  Ul,
} from "./stylesNavBar";

const NavBar = () => {
  const { handleClickMenu, isClicked } = useAppContext();

  return (
    <Aside isClicked={isClicked}>
      <Logo />
      <ContainerHamburger>
        <FontAwesomeIcon
          icon={isClicked ? faBarsStaggered : faBars}
          onClick={handleClickMenu}
        />
      </ContainerHamburger>
      <Navigation>
        <Ul onClick={handleClickMenu}>
          <List>
            <Links href="#">Inicio</Links>
          </List>
          <List>
            <Links href="#aboutme">Sobre Mí</Links>
          </List>
          <List>
            <Links href="#projects">Proyectos</Links>
          </List>
          <List>
            <Links href="#contact">Contactame</Links>
          </List>
        </Ul>
      </Navigation>
      <DivIcon>
            <LinkIcon href="https://github.com/lucio1907" target="_BLANK">
              <FontAwesomeIcon icon={faGithub} />
            </LinkIcon>
            <LinkIcon href="https://www.linkedin.com/in/luciogastellu/" target="_BLANK">
            <FontAwesomeIcon icon={faLinkedin}/>
            </LinkIcon>
          </DivIcon>
    </Aside>
  );
};

export default NavBar;
