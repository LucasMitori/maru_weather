import {
  FooterSection,
  FooterCTA,
  FooterIcons,
  IconDiv,
  IconText,
  Container,
  FooterInfoSpace,
  FooterLogoSpace,
  LogoTextDiv,
  FollowUsDiv,
  UserfulLinks,
  TitlesShine,
  Subscribe,
  SubInfo,
  FooterEmailForm,
  CopyRightSpace,
  MenuCopyRight,
  NavMenu,
  CopyRightText,
  StitchSpace,
} from "./styles";
import { SiGooglemaps } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsGoogle,
  BsWhatsapp,
} from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { IconContext } from "react-icons";
import Stitch from "../../assets/img/stitch_02.gif";

const FooterSpace = () => {
  return (
    <>
      <FooterSection>
        <Container>
          <FooterCTA>
            <FooterIcons>
              <IconDiv>
                <IconContext.Provider
                  value={{
                    color: "orange",
                    size: "1.8em",
                  }}
                >
                  <SiGooglemaps />
                </IconContext.Provider>
                <IconText>
                  <h4>Localização</h4>
                  <span>Atualmente em descoberta</span>
                </IconText>
              </IconDiv>

              <IconDiv>
                <IconContext.Provider
                  value={{
                    color: "orange",
                    size: "1.8em",
                  }}
                >
                  <IoIosCall />
                </IconContext.Provider>
                <IconText>
                  <h4>Contato</h4>
                  <span>+55 (11) 97749-2121</span>
                </IconText>
              </IconDiv>

              <IconDiv>
                <IconContext.Provider
                  value={{
                    color: "orange",
                    size: "1.8em",
                  }}
                >
                  <MdEmail />
                </IconContext.Provider>
                <IconText>
                  <h4>Fale comigo</h4>
                  <span>lucas.mitori@hotmail.com</span>
                </IconText>
              </IconDiv>
            </FooterIcons>
          </FooterCTA>

          <FooterInfoSpace>
            <FooterLogoSpace>
              <StitchSpace>
                <img src={Stitch} alt="stitch gif" />
              </StitchSpace>
              <LogoTextDiv>
                <p>
                  Desenvolvedor Fullstack em busca de novos conhecimentos e
                  aventuras. Obrigado por ter acompanhado até aqui.
                </p>
              </LogoTextDiv>
              <FollowUsDiv>
                <h2>Mídias Sociais</h2>
                <ul>
                  <li className="facebook">
                    <a href="https://www.facebook.com/LucasMitori">
                      <IconContext.Provider
                        value={{
                          color: "var(--color-grey-0)",
                          size: "1.5em",
                        }}
                      >
                        <BsFacebook />
                      </IconContext.Provider>
                    </a>
                  </li>

                  <li className="twitter">
                    <a href="#index">
                      <IconContext.Provider
                        value={{
                          color: "var(--color-grey-0)",
                          size: "1.5em",
                        }}
                      >
                        <BsTwitter />
                      </IconContext.Provider>
                    </a>
                  </li>

                  <li className="instagram">
                    <a href="https://www.instagram.com/lucasokumura/">
                      <IconContext.Provider
                        value={{
                          color: "var(--color-grey-0)",
                          size: "1.5em",
                        }}
                      >
                        <BsInstagram />
                      </IconContext.Provider>
                    </a>
                  </li>

                  <li className="google">
                    <a href="#index">
                      <IconContext.Provider
                        value={{
                          color: "var(--color-grey-0)",
                          size: "1.5em",
                        }}
                      >
                        <BsGoogle />
                      </IconContext.Provider>
                    </a>
                  </li>

                  <li className="whatsapp">
                    <a href="https://api.whatsapp.com/send?phone=5511977492121">
                      <IconContext.Provider
                        value={{
                          color: "var(--color-grey-0)",
                          size: "1.5em",
                        }}
                      >
                        <BsWhatsapp />
                      </IconContext.Provider>
                    </a>
                  </li>
                </ul>
              </FollowUsDiv>
            </FooterLogoSpace>

            <UserfulLinks>
              <TitlesShine>
                <h3>Links Úteis</h3>
              </TitlesShine>
              <ul>
                <li>
                  <a href="index">Inicio</a>
                </li>
                <li>
                  <a href="index">Sobre</a>
                </li>
                <li>
                  <a href="index">Serviços</a>
                </li>
                <li>
                  <a href="index">Contato</a>
                </li>
              </ul>
            </UserfulLinks>

            <Subscribe>
              <TitlesShine>
                <h3>Me Acompanhe</h3>
              </TitlesShine>
              <SubInfo>
                <p>Fique por dentro de todas as novidades.</p>
              </SubInfo>
              <FooterEmailForm>
                <input type="email" placeholder="Digite seu e-mail" />
                <button>
                  <IconContext.Provider
                    value={{
                      color: "var(--color-grey-0)",
                      size: "1.8em",
                    }}
                  >
                    <FaTelegramPlane />
                  </IconContext.Provider>
                </button>
              </FooterEmailForm>
            </Subscribe>
          </FooterInfoSpace>
        </Container>
        <CopyRightSpace>
          <CopyRightText>
            <p>
              Copyright &copy; 2022, All Right Reserved{" "}
              <span>Lucas Mitori</span>
            </p>
          </CopyRightText>

          <MenuCopyRight>
            <NavMenu>
              <li>
                <a href="index">Inicio</a>
              </li>
              <li>
                <a href="index">Projetos</a>
              </li>
              <li>
                <a href="index">Contato</a>
              </li>
            </NavMenu>
          </MenuCopyRight>
        </CopyRightSpace>
      </FooterSection>
    </>
  );
};

export default FooterSpace;
