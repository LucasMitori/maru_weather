import {
  DashboardSpace,
  NavBarMenuBtn,
  Video,
  VideoBackground,
} from "./styles";
import backgroundVideo from "../../assets/videos/storm_bg.mp4";
import fallbackImg from "../../assets/img/fallback.jpg";
import HeaderSpace from "../../components/HeaderSpace/HeaderSpace";
import FooterSpace from "../../components/FooterSpace/FooterSpace";
import WeatherCardSpace from "../../components/WeatherCards/WeatherCards";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";

const DashBoardPage = () => {
  const { show, setShow } = useContext(AuthContext);

  function openMenu() {
    setShow((current) => !current);
  }
  return (
    <>
      <NavBarMenuBtn onClick={() => openMenu()}>
        <IconContext.Provider
          value={{
            color: "var(--color-grey-0)",
          }}
        >
          <GiHamburgerMenu />
        </IconContext.Provider>
      </NavBarMenuBtn>
      <VideoBackground>
        <Video autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          <img src={fallbackImg} alt="Fallback" />
        </Video>
      </VideoBackground>
      <HeaderSpace show={show} />
      <DashboardSpace>
        <WeatherCardSpace />
      </DashboardSpace>
      <FooterSpace />
    </>
  );
};

export default DashBoardPage;
