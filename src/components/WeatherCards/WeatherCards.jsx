import { WeatherCardDiv, TemperatureSelector } from "./styles";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const WeatherCardSpace = () => {
  const { weatherData } = useContext(AuthContext);
  const [unit, setUnit] = useState("kelvin");
  const [feelsLikeUnit, setFeelsLikeUnit] = useState("kelvin");
  const [tempMaxUnit, setTempMaxUnit] = useState("kelvin");
  const [tempMinUnit, setTempMinUnit] = useState("kelvin");

  // Utility function to convert temperature from Kelvin to Celsius
  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  // Utility function to convert temperature from Kelvin to Fahrenheit
  const kelvinToFahrenheit = (kelvin) => {
    return (kelvin - 273.15) * (9 / 5) + 32;
  };

  // Function to handle temperature unit selection
  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  // Function to handle feels like temperature unit selection
  const handleFeelsLikeUnitChange = (event) => {
    setFeelsLikeUnit(event.target.value);
  };

  // Function to handle temperature max unit selection
  const handleTempMaxUnitChange = (event) => {
    setTempMaxUnit(event.target.value);
  };

  // Function to handle temperature min unit selection
  const handleTempMinUnitChange = (event) => {
    setTempMinUnit(event.target.value);
  };

  // Utility function to convert Unix timestamp to local time
  const unixToLocalTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString();
  };

  // Function to handle sunrise and sunset time
  const getSunriseSunsetTime = (timestamp) => {
    return unixToLocalTime(timestamp);
  };

  // Function to get the current local time based on the timezone offset
  const getLocalTime = (timezoneOffset) => {
    const utcTime = Date.now(); // Get the current UTC time in milliseconds
    const localTime = utcTime + timezoneOffset * 1000; // Convert the timezone offset to milliseconds
    const localDate = new Date(localTime); // Create a new Date object using the local time
    const hours = localDate.getUTCHours().toString().padStart(2, "0");
    const minutes = localDate.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  // Function to get timezone
  const getTimezone = (timezoneOffset) => {
    return getLocalTime(timezoneOffset);
  };

  return (
    <>
      {weatherData !== null ? (
        <WeatherCardDiv weatherData={weatherData}>
          <h1>
            <label>País:</label> {weatherData.sys.country}
          </h1>
          <h1>
            <label>Nome da cidade:</label> {weatherData.name}
          </h1>
          <h3>
            <label>Coordenadas: longitude:</label> {weatherData.coord.lon},
            latidude: {weatherData.coord.lat}
          </h3>
          <h3>
            <label>Descrição do tempo:</label>{" "}
            {weatherData.weather[0].description} ({weatherData.weather[0].main}{" "}
            | {weatherData.clouds.all}%)
          </h3>
          <h2>
            <label>Temperatura:</label>{" "}
            {unit === "celsius"
              ? kelvinToCelsius(weatherData.main.temp).toFixed(2) + " °C"
              : unit === "fahrenheit"
              ? kelvinToFahrenheit(weatherData.main.temp).toFixed(2) + " °F"
              : weatherData.main.temp.toFixed(2) + " K"}
          </h2>
          <TemperatureSelector>
            <label>
              <input
                type="radio"
                value="celsius"
                checked={unit === "celsius"}
                onChange={handleUnitChange}
              />
              Celsius
            </label>
            <label>
              <input
                type="radio"
                value="fahrenheit"
                checked={unit === "fahrenheit"}
                onChange={handleUnitChange}
              />
              Fahrenheit
            </label>
            <label>
              <input
                type="radio"
                value="kelvin"
                checked={unit === "kelvin"}
                onChange={handleUnitChange}
              />
              Kelvin
            </label>
          </TemperatureSelector>
          <h2>
            <label>Sensação Térmica:</label>{" "}
            {feelsLikeUnit === "celsius"
              ? kelvinToCelsius(weatherData.main.feels_like).toFixed(2) + " °C"
              : feelsLikeUnit === "fahrenheit"
              ? kelvinToFahrenheit(weatherData.main.feels_like).toFixed(2) +
                " °F"
              : weatherData.main.feels_like.toFixed(2) + " K"}
          </h2>
          <TemperatureSelector>
            <label>
              <input
                type="radio"
                value="celsius"
                checked={feelsLikeUnit === "celsius"}
                onChange={handleFeelsLikeUnitChange}
              />
              Celsius
            </label>
            <label>
              <input
                type="radio"
                value="fahrenheit"
                checked={feelsLikeUnit === "fahrenheit"}
                onChange={handleFeelsLikeUnitChange}
              />
              Fahrenheit
            </label>
            <label>
              <input
                type="radio"
                value="kelvin"
                checked={feelsLikeUnit === "kelvin"}
                onChange={handleFeelsLikeUnitChange}
              />
              Kelvin
            </label>
          </TemperatureSelector>
          <h2>
            <label>Temperatura Máxima:</label>{" "}
            {tempMaxUnit === "celsius"
              ? kelvinToCelsius(weatherData.main.temp_max).toFixed(2) + " °C"
              : tempMaxUnit === "fahrenheit"
              ? kelvinToFahrenheit(weatherData.main.temp_max).toFixed(2) + " °F"
              : weatherData.main.temp_max.toFixed(2) + " K"}
          </h2>
          <TemperatureSelector>
            <label>
              <input
                type="radio"
                value="celsius"
                checked={tempMaxUnit === "celsius"}
                onChange={handleTempMaxUnitChange}
              />
              Celsius
            </label>
            <label>
              <input
                type="radio"
                value="fahrenheit"
                checked={tempMaxUnit === "fahrenheit"}
                onChange={handleTempMaxUnitChange}
              />
              Fahrenheit
            </label>
            <label>
              <input
                type="radio"
                value="kelvin"
                checked={tempMaxUnit === "kelvin"}
                onChange={handleTempMaxUnitChange}
              />
              Kelvin
            </label>
          </TemperatureSelector>
          <h2>
            <label>Temperatura Mínima:</label>{" "}
            {tempMinUnit === "celsius"
              ? kelvinToCelsius(weatherData.main.temp_min).toFixed(2) + " °C"
              : tempMinUnit === "fahrenheit"
              ? kelvinToFahrenheit(weatherData.main.temp_min).toFixed(2) + " °F"
              : weatherData.main.temp_min.toFixed(2) + " K"}
          </h2>
          <TemperatureSelector>
            <label>
              <input
                type="radio"
                value="celsius"
                checked={tempMinUnit === "celsius"}
                onChange={handleTempMinUnitChange}
              />
              Celsius
            </label>
            <label>
              <input
                type="radio"
                value="fahrenheit"
                checked={tempMinUnit === "fahrenheit"}
                onChange={handleTempMinUnitChange}
              />
              Fahrenheit
            </label>
            <label>
              <input
                type="radio"
                value="kelvin"
                checked={tempMinUnit === "kelvin"}
                onChange={handleTempMinUnitChange}
              />
              Kelvin
            </label>
          </TemperatureSelector>
          <h2>
            <label>Umidade do ar:</label> {weatherData.main.humidity}%
          </h2>
          <h2>
            <label>Pressão atmosférica:</label> {weatherData.main.pressure} Pa
          </h2>
          <h2>
            <label>Força do vento: veloc:</label> {weatherData.wind.speed}{" "}
            metr/seg
          </h2>
          <h2>
            <label>Nascer do Sol:</label>{" "}
            {getSunriseSunsetTime(weatherData.sys.sunrise)}
          </h2>
          <h2>
            <label>Pôr do sol:</label>{" "}
            {getSunriseSunsetTime(weatherData.sys.sunset)}
          </h2>
          <h2>
            <label>Hora atual:</label> {getTimezone(weatherData.timezone)}
          </h2>
        </WeatherCardDiv>
      ) : (
        <WeatherCardDiv weatherData={weatherData}>
          <h1>Nenhuma cidade selecionada para pesquisa</h1>
        </WeatherCardDiv>
      )}
    </>
  );
};

export default WeatherCardSpace;
