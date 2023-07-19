import styled from "styled-components";

export const WeatherCardDiv = styled.div`
  width: 90%;
  height: 800px;
  background-color: var(--blur-effect-02);
  border: 4px solid var(--color-white-mode);
  border-radius: var(--radius-8);
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
  justify-content: ${(props) => {
    if (props !== null) {
      return "space-evenly";
    } else {
      return "center";
    }
  }};
  align-items: center;

  & > h1 {
    color: var(--color-white-mode);
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-20);
    font-weight: var(--font-weight-600);
  }

  & > h1 > label {
    color: var(--color-bubbles-pink);
  }

  & > h2 {
    color: var(--color-feedback-success);
    font-family: var(--font-primary-nunito);
    font-size: var(--font-subtitle-18);
    font-weight: var(--font-weight-600);
  }

  & > h2 > label {
    color: var(--color-primary);
  }

  & > h3 {
    color: var(--color-white-mode);
    font-family: var(--font-primary-nunito);
    font-size: var(--font-text-14);
    font-weight: var(--font-weight-400);
  }

  & > h3 > label {
    color: var(--color-shadow-box-03);
  }

  @media screen and (min-width: 370px) {
  }
  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 600px) {
  }
  @media screen and (min-width: 768px) {
    width: 600px;
    height: 800px;
  }
  @media screen and (min-width: 1024px) {
  }
  @media screen and (min-width: 1200px) {
  }
  @media screen and (min-width: 1920px) {
  }
`;

export const TemperatureSelector = styled.div`
  margin-top: 10px;
  color: var(--color-white-mode);

  label {
    margin-right: 10px;
    cursor: pointer;
  }

  input[type="radio"] {
    margin-right: 5px;
    cursor: pointer;
  }
`;
