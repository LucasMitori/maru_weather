import { Link } from "react-router-dom";
import styled from "styled-components";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Weather Styles
    Description: Using styled-components to improve Landing Page.
    ~ *   About Page Styles   * ~

            Version: 1.0

****************************************/

export const LandingSpace = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const TextSpace = styled.div`
  width: 250px;
  height: 200px;
  background-color: var(--blur-effect-01);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-self: center;
  border: 1px solid var(--color-black-mode);
  border-radius: var(--radius-8);
`;

export const LinkToDashboard = styled(Link)`
  width: 90%;
  height: 50px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-self: center;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-self: center;
  text-decoration: none;

  & > button {
    width: 90%;
    height: 50px;
    background-color: var(--blur-effect-02);
    border: 1px solid var(--color-primary);
    border-radius: var(--radius-8);
    color: var(--color-white-mode);
  }
`;

/*------------------------- Skip line -------------------------*/

export const VideoBackground = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
