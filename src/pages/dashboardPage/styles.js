import styled from "styled-components";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Maru Weather Styles
    Description: Using styled-components to improve Dashboard Page.
    ~ *   About Page Styles   * ~

            Version: 1.0

****************************************/

export const DashboardSpace = styled.section`
  width: 100%;
  height: 130vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  padding-top: 150px;

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

export const VideoBackground = styled.div`
  width: 100%;
  height: 130vh;
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

/*------------------------- Skip line -------------------------*/

export const NavBarMenuBtn = styled.button`
  width: 70px;
  height: 50px;
  position: fixed;
  top: 10%;
  left: 80%;
  background-color: var(--color-grey-2);
  border-radius: var(--radius-8);
  z-index: 1010;
  cursor: pointer;

  & > svg {
    transform: scale(1.5);
  }

  @media screen and (min-width: 370px) {
    width: 60px;
    left: 82%;
  }
  @media screen and (min-width: 480px) {
    display: block;
  }
  @media screen and (min-width: 1024px) {
    & {
      display: none;
    }
  }
`;

/*------------------------- Skip line -------------------------*/
