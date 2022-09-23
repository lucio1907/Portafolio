import styled from "styled-components";

export const AboutMeContainer = styled.div`
  width: 100%;
  background-color: #1c314e;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

`;

export const AboutMeTitle = styled.h3`
  color: #fff;
  font-family: "Outfit", sans-serif;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 4px;
  padding: 0 20px;
  margin-top: 30px;

  &::before {
    content: "<";
  }

  &::after {
    content: " />";
  }

  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

export const AboutMeDescription = styled.p`
  text-align: center;
  font-family: "Inter", sans-serif;
  color: #fff;
  line-height: 32px;
  padding: 0 20px;
  text-align: left;
  margin-top: 15px;

  @media (min-width: 768px) {
    width: 50%;
    font-size: 20px;
  }
`;

export const TrainingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  width: 100%;

  @media (min-width: 768px) {
    height: 85vh;
  }
`;
