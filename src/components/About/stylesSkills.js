import styled from "styled-components";

export const SkillsContainer = styled.div` 
  width: 100%;
  background-color: #1c314e;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const GridSkills = styled.div` 
    width: 100%;
    display: grid;
    grid-template-rows: repeat(1, minmax(0, 1fr));
    gap: 2.5rem;
    justify-content: center;
    margin-top: 40px;
    padding: 20px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 0;
        width: 50%;
    }

    @media (min-width: 900px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`

export const ContainerLogos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 500ms ease;

    &:hover {
      transform: scale(1.2);
      filter: drop-shadow(0px 6px 20px #0089C6);
      cursor: pointer;
    }

    @media (min-width: 768px) {
      margin-bottom: 50px;
    }
`

export const ImagesLogos = styled.img`
  width: 90px;
  height: 90px;
  margin-top: 10px;

  @media (min-width: 768px) {
    width: 110px;
    height: 110px;
  }
`

export const Technology = styled.p`
  text-align: center;
  margin-top: 10px;
  font-family: 'Outfit', sans-serif;
  color: #fff;
`