import {
  LandingSpace,
  LinkToDashboard,
  TextSpace,
  Video,
  VideoBackground,
} from "./styles";
import backgroundVideo from "../../assets/videos/bg_11.mp4";
import fallbackImg from "../../assets/img/fallback.jpg";

const LandingPage = () => {
  return (
    <>
      <LandingSpace>
        <VideoBackground>
          <Video autoPlay muted loop>
            <source src={backgroundVideo} type="video/mp4" />
            <img src={fallbackImg} alt="Fallback" />
          </Video>
        </VideoBackground>
        <TextSpace>
          <LinkToDashboard to={"/dashboard"}>
            <button>Bem-vindos ao Maru Weather</button>
          </LinkToDashboard>
        </TextSpace>
      </LandingSpace>
    </>
  );
};

export default LandingPage;
