import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { DB } from "../../firebase/firebaseconfig";
import { AboutMeTitle } from "./stylesAbout";
import { ContainerLogos, GridSkills, ImagesLogos, SkillsContainer, Technology } from "./stylesSkills";

const Skills = () => {
  const [skillsLogos, setSkillsLogos] = useState([]);
  useEffect(() => {
    const skillsCollection = collection(DB, "skills");
    getDocs(skillsCollection)
      .then((res) => {
        const skills = res.docs.map((items) => {
          return {
            id: items.id,
            ...items.data(),
          };
        });
        setSkillsLogos(skills);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <SkillsContainer>
      <AboutMeTitle>Mis Skills</AboutMeTitle>
      <GridSkills>
      {skillsLogos.map((item) => (
        <ContainerLogos key={item.id}>
            <ImagesLogos src={item.pictureUrl} alt={item.name} />
            <Technology>{item.name}</Technology>
        </ContainerLogos>
      ))}
      </GridSkills>
    </SkillsContainer>
  );
};

export default Skills;
