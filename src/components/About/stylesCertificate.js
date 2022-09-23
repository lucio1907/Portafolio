import styled from "styled-components";

export const CertificateContainer = styled.div`
  width: 100%;
  background-color: #1c314e;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  margin-top: 30px;
  font-family: "Manrope", sans-serif;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  transition: all 500ms ease;

  &:hover {
    transform: scale(1.2);
    filter: drop-shadow(10px 6px 14px #00BEFF);
  }
`;

export const H5 = styled.h5`
  font-size: 17px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Academy = styled.p`
  text-align: center;
  font-family: "Inter", sans-serif;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const LinkCertificate = styled.a`
  color: #7499e4;
  transition: all 200ms ease;

  &:hover {
    color: #1c67ff;
  }

  @media (min-width: 768px) {
    font-size: 17px;
  }
`;
