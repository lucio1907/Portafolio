import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AboutMeDescription, AboutMeTitle } from "../About/stylesAbout";
import { ContainerForm, LinkLinkedin } from "./stylesContact";
import emailJs from "emailjs-com";
import FormContact from "./FormContact";
import { useState } from "react";

const ContactMe = () => {
  const [successMessage, setSuccessMessage] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();
    setIsClicked(true);

    emailJs.sendForm("service_uip6bmg", "template_5s55fw4", e.target, "efxB2xipqqjPmzZ1K")
      .then((res) => {
        if (res.status === 200) {
          setSuccessMessage(true);
          return;
        } else {
          setSuccessMessage(false);
          return;
        }
      })
      .finally(() => setIsClicked(false));
  };

  return (
    <ContainerForm id="contact">
      <AboutMeTitle>Contactame</AboutMeTitle>
      <AboutMeDescription>
        Si crees que puedo ser tu mejor candidato, no dudes en mandarme un mail
        completando este breve formulario. ¡Voy a estar esperando tu mensaje
        atentamente!
      </AboutMeDescription>
      <AboutMeDescription>
        O también puedes contactarme por{" "}
        <LinkLinkedin
          href="https://www.linkedin.com/in/luciogastellu/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </LinkLinkedin>{" "}
        si lo deseas.
      </AboutMeDescription>
      <FormContact
        handleSumbit={handleSumbit}
        successMessage={successMessage}
        isClicked={isClicked}
      />
    </ContainerForm>
  );
};

export default ContactMe;
