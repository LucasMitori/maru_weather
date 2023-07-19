import styled, { keyframes } from "styled-components";
import Beach from "../../assets/img/beach.gif";

/****************************************

    Author: Lucas Mitori Oliveira Okumura
    contact: lucas.mitori@hotmail.com
    cel: +55 (11) 9-7749-2121
    Name: Personal Portfolio Styles
    Description: Using styled-components to improve Footer Space.
    ~ *   Footer Styles   * ~

            Version: 1.0

****************************************/

const Pulse = keyframes`
  0% {background: var(--color-navigation);}
  50% {background: var(--color-navigation);}
  100% {background: var(--color-navigation);}
`;

const FirstMove = keyframes`
  0% {
    transform: rotate(0deg);
    opacity: 0.5;
  }
  
  50% {
    width: 1000px;
    height: 1000px;
  }
  
  100% {
     transform: rotate(1000deg);
    opacity: 1;
  }
`;

const Shine = keyframes`
    from {
    -webkit-mask-position: 150%;
  }
  
  to {
    -webkit-mask-position: -50%;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: var(--color-navigation);
  z-index: -1;
  animation: ${Pulse} 5s infinite;
  overflow: hidden;
  box-shadow: 0px 0px 14px 25px var(--color-primary);

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
    flex-flow: row nowrap;
    height: 80vh;
  }
  @media screen and (max-width: 1920px) {
  }
`;
/*------------------------- Skip line -------------------------*/

export const ElementDiv = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
`;

export const SquaresDiv1 = styled.div`
  border: 10px dashed var(--color-white-mode);
  width: 500px;
  height: 500px;
  animation: ${FirstMove} 100s infinite;
  animation-timing-function: linear;
`;
export const SquaresDiv2 = styled.div`
  animation: ${FirstMove} 180s infinite;
  animation-timing-function: linear;
  width: 1110px;
  height: 1110px;
  border: 10px dashed var(--color-secondary);
`;
export const SquaresDiv3 = styled.div`
  width: 600px;
  height: 600px;
  animation: ${FirstMove} 120s infinite;
  animation-timing-function: linear;
  border: 10px dashed var(--color-white-mode);
`;

/*------------------------- Skip line -------------------------*/

export const MediaInformationSpace = styled.div`
  position: absolute;
  width: 90%;
  height: 65vh;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--blur-effect-02);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius-8);

  & > h1 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-20);
    font-weight: var(--font-weight-600);
    color: var(--color-white-mode);
  }

  & > p {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-18);
    font-weight: var(--font-weight-300);
    color: var(--color-white-mode);
    text-align: center;
    line-height: var(--font-line-height-28);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
    width: 700px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const MediasSpace = styled.ul`
  width: 90%;
  height: 40%;
  background-color: var(--blur-effect-01);
  border: 1px solid var(--color-senary);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  border-radius: var(--radius-8);

  & > li {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding-left: 50px;
  }

  & > li > a {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-18);
    font-weight: var(--font-weight-700);
    color: var(--color-white-mode);
    text-decoration: none;
    letter-spacing: 2px;
    padding-left: 50px;
  }
`;

export const StitchSpace = styled.div`
  width: 90%;
  height: 40%;
  background-image: url(${Beach});
  background-position: center;
  background-size: cover;
  border-radius: var(--radius-8);

  & > img {
    margin-top: 30px;
    width: 100%;
    height: 100%;
    transform: scale(0.5);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 500px) {
    width: 400px;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

/*------------------------- Skip line -------------------------*/

export const FooterSection = styled.footer`
  width: 100vw;
  height: 180vh;
  background: var(--color-navigation);
  position: relative;
  box-shadow: 0px -15px 10px 0px #ffde59;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    height: 80vh;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const FooterCTA = styled.div`
  border-bottom: 1px solid #373636;
  padding: 5px 0px;
  width: 100%;
  height: 230px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    border-bottom: 1px solid #373636;
    padding: 5px 0px;
    width: 100%;
    height: 8em;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 90%;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    padding: 0px 60px;
    width: 100%;
    height: 90%;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const FooterIcons = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 90px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const IconDiv = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
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

export const IconText = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-left: 10px;

  & > h4 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-subtitle-18);
    font-weight: var(--font-weight-700);
    color: var(--color-white-mode);
    letter-spacing: 1px;
  }

  & > span {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-12);
    font-weight: var(--font-weight-500);
    color: var(--color-grey-5);
    letter-spacing: 1px;
    line-height: var(--font-line-height-16);
  }
`;

/* -------------------- ~> Skip Line <~ --------------------*/

export const FooterInfoSpace = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    height: 70%;
    flex-flow: row nowrap;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const FooterLogoSpace = styled.div`
  width: 95%;
  height: 75vh;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 30%;
    height: 55vh;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const LogoDiv = styled.div`
  width: 100%;
  height: 30%;

  & > a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  & > a > img {
    height: 100%;
    transform: scale(0.6);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 30%;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const LogoTextDiv = styled.div`
  width: 100%;
  height: 20%;
  padding: 20px 0px;
  & > p {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-500);
    color: var(--color-white-mode);
    letter-spacing: 1px;
    line-height: var(--font-line-height-20);
    padding: 0px 30px;
  }
`;

export const FollowUsDiv = styled.div`
  width: 90%;
  height: 25%;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  & > h2 {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-700);
    color: var(--color-white-mode);
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  & > ul {
    list-style: none;
  }

  & > ul > li {
    width: 50px;
    height: 50px;
    margin: 0 5px;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    border: 3px solid #d8e2dc;
    float: left;
    transition: all 0.5s ease;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  & > ul li .fa {
    color: #d8e2dc;
    margin-top: 5px;
    transition: all 0.5s ease;
  }

  & > ul > li:hover.facebook {
    border: 5px solid #3b5998;
    box-shadow: 0 0 15px #3b5998;
    transition: all 0.5s ease;
  }

  & > ul > li:hover .fa-facebook {
    color: #3b5998;
    text-shadow: 0 0 15px #3b5998;
    transition: all 0.5s ease;
  }

  /*twitter*/
  & > ul > li:hover.twitter {
    border: 5px solid #00aced;
    box-shadow: 0 0 15px #00aced;
    transition: all 0.5s ease;
  }

  & > ul > li:hover .fa-twitter {
    color: #00aced;
    text-shadow: 0 0 15px #00aced;
    transition: all 0.5s ease;
  }

  /* instagram */
  & > ul > li:hover.instagram {
    border: 5px solid #bc2a8d;
    box-shadow: 0 0 15px #bc2a8d;
    transition: all 0.5s ease;
  }

  & > ul > li:hover .fa-instagram {
    color: #bc2a8d;
    text-shadow: 0 0 15px #bc2a8d;
    transition: all 0.5s ease;
  }

  /* google */
  & > ul > li:hover.google {
    border: 5px solid #dd4b39;
    box-shadow: 0 0 15px #dd4b39;
    transition: all 0.5s ease;
  }

  & > ul > li:hover .fa-google {
    color: #dd4b39;
    text-shadow: 0 0 15px #dd4b39;
    transition: all 0.5s ease;
  }

  /* whatsapp */
  & > ul > li:hover.whatsapp {
    border: 5px solid #4dc247;
    box-shadow: 0 0 15px #4dc247;
    transition: all 0.5s ease;
  }

  & > ul > li:hover .fa-whatsapp {
    color: #4dc247;
    text-shadow: 0 0 15px #4dc247;
    transition: all 0.5s ease;
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 25%;
    position: relative;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const iFacebook = styled.i`
  color: #d8e2dc;
  margin-top: 20px;
  transition: all 0.5s ease;
`;

/* -------------------- ~> Skip Line <~ --------------------*/

export const UserfulLinks = styled.div`
  width: 90%;
  height: 60vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 auto;
  padding: 0px 10px;

  & > ul {
    margin-top: 50px;
    width: 100%;
    height: 65%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  & > ul::after {
    content: "";
    flex: auto;
  }

  & > ul > li {
    width: 40%;
    height: 40px;
  }

  & > ul > li > a {
    text-decoration: none;
    font-family: var(--font-secondary-inter);
    color: var(--color-white-mode);
    font-weight: var(--font-weight-400);
    font-size: var(--font-text-16);
  }

  & > ul > li > a:hover {
    color: var(--main-yellow);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 30%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const TitlesShine = styled.div`
  margin-top: 50px;

  & > h3 {
    color: var(--color-primary);
    font-size: var(--font-subtitle-24);
    font-weight: var(--font-weight-700);
    text-decoration: none;
    display: inline-block;
    position: relative;
    font-family: var(--font-secondary-inter);
    letter-spacing: 1px;
  }

  & > h3:hover {
    mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    mask-size: 200%;
    animation: ${Shine} 2s infinite;
  }
`;

/* -------------------- ~> Skip Line <~ --------------------*/

export const Subscribe = styled.div`
  width: 90%;
  height: 30%;
  padding: 0px 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 40%;
    height: 60%;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const SubInfo = styled.div`
  width: 100%;
  height: 30%;
  padding-right: 30px;
  margin-top: 30px;

  & > p {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight-500);
    line-height: var(--font-line-height-24);
    color: var(--color-white-mode);
    letter-spacing: 1px;
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 80%;
    padding-right: 30px;
    margin-top: 50px;

    & > p {
      margin-bottom: 20px;
    }
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const FooterEmailForm = styled.form`
  width: 100%;
  height: 80px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;

  & > input {
    width: 80%;
    height: 50px;
    border: none;
    outline: none;
    background-color: var(--color-grey-3);
    padding-left: 20px;
  }

  & > input::placeholder {
    color: var(--color-grey-0);
    letter-spacing: 2px;
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-16);
    font-weight: var(--font-weight);
  }

  & > input:focus::placeholder {
    color: transparent;
  }

  & > button {
    width: 50px;
    height: 50px;
    background-color: var(--color-primary);
    transition: all 0.5s ease;
    border: none;
    cursor: pointer;
  }
`;

/* -------------------- ~> Skip Line <~ --------------------*/

export const CopyRightSpace = styled.div`
  width: 100%;
  height: 10%;
  background-color: var(--color-grey-5);
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 10%;
    background-color: var(--color-grey-5);
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const CopyRightText = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid var(--color-black-mode);

  & > p {
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-400);
    color: var(--color-white-mode);
    letter-spacing: 2px;
    text-align: center;
    line-height: var(--font-line-height-24);
  }

  & > p > span {
    color: var(--color-primary);
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 35%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-left: 40px;
    border: none;

    & > p {
      text-align: left;
    }
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const MenuCopyRight = styled.div`
  width: 100%;
  height: 50%;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
    height: 100%;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;

export const NavMenu = styled.ul`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  overflow: auto;

  & > li {
    min-width: 100px;
  }

  & > li > a {
    color: #f6f4e6;
    text-decoration: none;
    font-family: var(--font-secondary-inter);
    font-size: var(--font-text-14);
    text-transform: uppercase;
    font-weight: 500;
    display: inline-block;
    width: 80px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  & > li > a:hover {
    color: #fddb3a;
  }

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    overflow: auto;
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (max-width: 1920px) {
  }
`;
