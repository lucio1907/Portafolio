import styled from "styled-components";
import ARG from "../../img/mapaarg.png"

const LogoContainer = styled.div`
    position: absolute;
    top: 45px;
    left: -3px;

    @media (min-width: 1000px) {
        top: 30px;
    }
`;

const Img = styled.img`
    width: 120px;
    height: 110px;
`

const Logo = () => {
  return (
    <LogoContainer>
      <a href="#">
        <Img src={ARG} alt="" />
      </a>
    </LogoContainer>
  );
};

export default Logo;
