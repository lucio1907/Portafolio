import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { DB } from "../../firebase/firebaseconfig";
import { AboutMeTitle } from "../About/stylesAbout";
import {
  ButtonProject,
  CardProject,
  ContainerLinks,
  ContainerProjects,
  GridProjects,
  ImageProjects,
  LinkGit,
  ProjectDescription,
  ProjectTitle,
} from "./stylesProjects";

const Projects = () => {
  const [projectsState, setProjectsState] = useState([]);

  useEffect(() => {
    const projectsCollection = collection(DB, "projects");
    getDocs(projectsCollection)
      .then((res) => {
        const projects = res.docs.map((project) => {
          return {
            id: project.id,
            ...project.data(),
          };
        });
        setProjectsState(projects);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <ContainerProjects id="projects">
      <AboutMeTitle>Mis Proyectos</AboutMeTitle>
      <GridProjects>
        {projectsState.map((proj) => (
          <CardProject key={proj.id}>
            <ProjectTitle>{proj.title}</ProjectTitle>
            <ProjectDescription>{proj.desc}</ProjectDescription>
            <ImageProjects src={proj.pictureUrl} alt="Proyecto" />
            <ContainerLinks>
              <LinkGit href={proj.linkGithub} target="_blank">
                Repositorio
              </LinkGit>
              <a href={proj.link} proj={proj.link} target="_blank">
                <ButtonProject disabled={!proj.link ? true : false} proj={proj}>
                  {proj.link ? "Link al proyecto" : "En Mantenimiento"}
                </ButtonProject>
              </a>
            </ContainerLinks>
          </CardProject>
        ))}
      </GridProjects>
    </ContainerProjects>
  );
};

export default Projects;
