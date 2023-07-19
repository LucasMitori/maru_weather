import { Link } from "react-router-dom";
import styled from "styled-components";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Personal Portifólio Design
    Description: Using styled-components to improve Header Space.
    ~ *   Header Styles   * ~

            Version: 1.0

****************************************/

export const Header = styled.header`
  width: 80%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-navigation);
  z-index: 1001;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(-100%)")};
  transition: 0.7s ease-in-out;

  @media screen and (min-width: 370px) {
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
    width: 50%;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    transform: none;
    width: 100%;
    height: 160px;
    position: fixed;
    top: 0;
    bottom: 0;
    background-color: var(--blur-effect-02);
    z-index: 1002;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

/*------------------------- Skip line -------------------------*/

export const InformationSpace = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 30px;
  text-align: center;

  & > img {
    width: 30%;
    height: 10%;
    transform: scale(0.7);
  }

  @media screen and (min-width: 370px) {
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const ImageDiv = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  flex-flow: column nowrap;

  & > h2 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-24);
    font-weight: var(--font-weight-700);
    color: var(--color-white-mode);
    margin-top: 30px;
    width: 100%;
  }

  @media screen and (min-width: 370px) {
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 15%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    & > h2 {
      margin: 0;
      font-size: var(--font-subtitle-24);
      width: 100%;
      text-align: center;
    }
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const NavBar = styled.nav`
  width: 100%;
  height: 60%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;

  @media screen and (min-width: 370px) {
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const FormSpace = styled.form`
  width: 100%;
  height: 50%;
  z-index: 1001;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-self: center;
  text-align: center;

  & > label {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-18);
    font-weight: var(--font-weight-700);
    color: var(--color-white-mode);
  }

  @media screen and (min-width: 370px) {
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 100%;
    z-index: 1001;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-self: center;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const SearchInputSpace = styled.div`
  width: 100%;
  height: 30%;
  background-color: var(--blur-effect-01);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid var(--color-primary);
  border-radius: var(--radius-8);

  & > input {
    width: 70%;
    height: 70%;
    border: none;
    background-color: transparent;
    color: var(--color-white-mode);
    outline: none;
  }

  & > input::placeholder {
    color: var(--color-white-mode);
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-13);
    font-weight: var(--font-weight-500);
  }

  & > input:focus::placeholder {
    color: transparent;
  }

  & > button {
    width: 10%;
    height: 70%;
    border: none;
    background-color: transparent;
  }

  & > p {
    color: var(--color-white-mode);
  }

  @media screen and (min-width: 370px) {
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 90%;
    height: 50%;
    background-color: var(--blur-effect-01);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-8);
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const SpaceBtn = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;

  & > h3 {
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-20);
    color: var(--color-grey-0);
    font-weight: var(--font-weight-400);
  }

  @media screen and (min-width: 370px) {
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-flow: column nowrap;
    width: 20%;
    height: 100%;
    margin: 0;

    & > h3 {
      font-size: var(--font-subtitle-18);
    }
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const BrazilBtn = styled.button`
  width: 35%;
  height: 30px;
  border-radius: var(--radius-4);
  background-color: var(--color-quinternary);
  border: 2px solid
    ${(currentLanguage) =>
      currentLanguage.currentLanguage === "pt"
        ? "var(--button-color-red)"
        : "transparent"};
`;

export const USABtn = styled.button`
  width: 35%;
  height: 30px;
  border-radius: var(--radius-4);
  background-color: var(--color-quinternary);
  border: 2px solid
    ${(currentLanguage) =>
      currentLanguage.currentLanguage === "en"
        ? "var(--button-color-red)"
        : "transparent"};
`;

export const DashboardAdm = styled(Link)`
  width: 100%;
  height: 70%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  & > img {
    width: 100px;
    height: 100px;
    border-radius: var(--radius-half);
    border: 10px solid var(--color-grey-4);
  }
`;
