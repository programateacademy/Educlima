// src/components/Weather.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [apiKey] = useState("0d4e2bcc39b0e6e44a385d4558b4dcf8");
  const [weatherCode, setWeatherCode] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
        );

        if (response.data && response.data.list) {
          setWeatherData(response.data);

          if (response.data.list.length > 0 && response.data.list[0].weather) {
            setWeatherCode(response.data.list[0].weather[0].icon);
          }
        } else {
          console.error("Weather data or list not available in the response.");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData(); // Llamada inicial al cargar el componente
  }, [city, apiKey]);

  const fetchWeatherData = async () => {
    // El código para obtener datos del clima se ha movido al useEffect
  };

  return (
    <div className="main-container">
      <div className="weather-container">
        <h2>Pronóstico del tiempo</h2>
        <input
          type="text"
          placeholder="Ingresar ciudad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeatherData}>Buscar</button>

        {weatherData && weatherData.list && (
          <div>
            <h3>{weatherData.city.name} Estado del tiempo</h3>
            <div className="card-container">
              {weatherData.list.map((item) => (
                <div className="card" key={item.dt}>
                  <img className="card-img"
                    src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                    alt={item.weather[0].description}
                  />
                  
                  <p className="card-temp">
                    {convertKelvinToCelsius(item.main.temp)
                      .toFixed(0)
                      .padStart(2, "0")}
                    °
                  </p>
                  <p className="card-city">{weatherData.city.name}</p>
                  <p className="card-time">
                    {moment(item.dt_txt).format("dddd D MMMM")}
                    <br />
                    {moment(item.dt_txt).format("h:mm a")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const convertKelvinToCelsius = (kelvin) => kelvin - 273.15;

export default Weather;
