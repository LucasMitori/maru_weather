import emailjs from "@emailjs/browser";
import { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import api from "../services/api.js";

export const AuthContext = createContext();

const GeneralProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("pt");
  const [show, setShow] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  /*-------------------- Skip line --------------------*/

  async function SubmitFunction(data) {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email,
    };

    console.log(templateParams);

    emailjs
      .send(
        "service_vjasrhp",
        "template_83sakw3",
        templateParams,
        "BwXWctA1WZJmzYuvQ"
      )
      .then((res) => {
        console.log(res);
        toast.success("E-mail has been sent!", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((err) =>
        toast.error("E-mail was not sent.", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        })
      );
  }

  /*-------------------- Skip line --------------------*/

  async function fetchWeatherData(city) {
    try {
      const response = await api.get(
        `/weather?q=${city.cityName}&appid=e3a728bea2fc08f453cf8b3fbb6f1b53&lang=pt_br`
      );
      setWeatherData(response.data);
      toast.success("Cidade encontrada!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "var(--color-feedback-success)",
          color: "var(--color-black-mode)",
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Cidade não encontrada, tente novamente", {
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "var(--color-feedback-warning)",
          color: "var(--color-black-mode)",
        },
      });
    }
  }

  /*-------------------- Skip line --------------------*/

  return (
    <>
      <AuthContext.Provider
        value={{
          setCurrentLanguage,
          fetchWeatherData,
          SubmitFunction,
          currentLanguage,
          show,
          weatherData,
          setShow,
        }}
      >
        {children}
      </AuthContext.Provider>
      <Toaster position="bottom-right" reverseOrder={true} />
    </>
  );
};

export default GeneralProvider;
