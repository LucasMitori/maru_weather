import {
  BrazilBtn,
  DashboardAdm,
  FormSpace,
  Header,
  ImageDiv,
  InformationSpace,
  NavBar,
  SearchInputSpace,
  SpaceBtn,
  USABtn,
} from "./styles";
import { IconContext } from "react-icons";
import { useTranslation } from "react-i18next";
import { GiBrazilFlag } from "react-icons/gi";
import { FaFlagUsa } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AiOutlineSearch } from "react-icons/ai";
import MaruWeather from "../../assets/logo/weather_logo.png";

const HeaderSpace = ({ show }) => {
  const { currentLanguage, setCurrentLanguage, fetchWeatherData } =
    useContext(AuthContext);

  const { t, i18n } = useTranslation();

  const changeLanguage = (value) => {
    i18n
      .changeLanguage(value)
      .then(() => {
        setCurrentLanguage(value);
      })
      .catch((err) => console.log(err));
  };

  const formSchema = yup.object().shape({
    cityName: yup.string().required("nome da cidade obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <Header show={show}>
        <InformationSpace>
          <ImageDiv>
            <DashboardAdm to={`/home`}>
              <img src={MaruWeather} alt="weather logo" />
            </DashboardAdm>
            <h2>Maru Weather</h2>
          </ImageDiv>

          <NavBar>
            <FormSpace onSubmit={handleSubmit(fetchWeatherData)}>
              <label>Digite o nome da cidade que deseja procurar</label>
              <SearchInputSpace>
                <input
                  type="string"
                  placeholder="Nome da cidade"
                  {...register("cityName")}
                />
                <p>{errors.cityName?.message}</p>
                <button type="submit">
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1.8em",
                    }}
                  >
                    <AiOutlineSearch />
                  </IconContext.Provider>
                </button>
              </SearchInputSpace>
            </FormSpace>
          </NavBar>

          <SpaceBtn>
            <h3>{t("Change the language")}:</h3>
            <BrazilBtn
              onClick={() => changeLanguage("pt")}
              currentLanguage={currentLanguage}
            >
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "2em",
                }}
              >
                <GiBrazilFlag />
              </IconContext.Provider>
            </BrazilBtn>

            <USABtn
              onClick={() => changeLanguage("en")}
              currentLanguage={currentLanguage}
            >
              <IconContext.Provider
                value={{
                  color: "var(--color-grey-0)",
                  size: "1em",
                }}
              >
                <FaFlagUsa />
              </IconContext.Provider>
            </USABtn>
          </SpaceBtn>
        </InformationSpace>
      </Header>
    </>
  );
};

export default HeaderSpace;
