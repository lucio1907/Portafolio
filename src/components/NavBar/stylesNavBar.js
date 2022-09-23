import styled from "styled-components";

export const Aside = styled.aside`
  height: 100%;
  width: 80px;
  background-color: #141c29;
  padding: 0 20px;
  position: fixed;
  left: ${({ isClicked }) => (isClicked ? "0px" : "-200px")};
  transition: ${({ isClicked }) =>
    isClicked ? "all 500ms ease" : "all 1s ease"};
  z-index: 1;


  @keyframes effect {
    from {
      left: -200px;
    } to {
      left: 0;
    }
  }

  @media (min-width: 1000px) {
    left: 0;
      animation: effect 500ms ease;
  }
`;

export const ContainerHamburger = styled.div`
  display: flex;
  justify-content: end;
  position: fixed;
  top: 15px;
  left: ${({ isClicked }) => (isClicked ? "0px" : "9px")};
  font-size: 26px;
  cursor: pointer;
  transition: all 500ms ease;
  color: #fff;

  &:hover {
    transform: scaleY(1.2);
  }

  @media (min-width: 1000px) {
    display: none;
    left: 700px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95%;
  margin-top: 20px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 45px;
`;

export const List = styled.li`
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  text-align: center;
  transform: rotate(270deg);
  transition: all 300ms ease;
  padding: 15px;
  cursor: pointer;
  white-space: nowrap;
  margin: 50px 0;

  &:hover {
    filter: drop-shadow(10px 6px 14px #0094fa);
    &::before {
      color: #fff;
      content: "{ ";
    }
    &::after {
      color: #fff;
      content: " }";
    }
  }

  @media (min-width: 768px) {
    font-size: 17px;
  }
`;

export const Links = styled.a`
  color: #fff;
`;

export const DivIcon = styled.div`
  font-family: "Outfit", sans-serif;
  font-size: 45px;
  text-transform: uppercase;
  text-align: center;
  transition: all 500ms ease;
  padding: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70px;
  margin-left: 54px;
  position: absolute;
  bottom: 10px;
  left: -44px;
`;

export const LinkIcon = styled.a`
  color: #fff;
  transition: all 500ms ease;

  &:hover {
    color: grey;
  }
`;
