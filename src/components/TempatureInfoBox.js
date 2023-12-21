// TemperatureInfoBox.js

import React, { useState, useEffect } from 'react';

const TemperatureInfoBox = ({ city, apiKey }) => {
  const [temperature, setTemperature] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = await response.json();

        // Asegurémonos de que los datos se están obteniendo correctamente
        console.log('Datos de la API:', data);

        // Actualizamos los estados con los datos relevantes
        setTemperature(data.main.temp);
        setFeelsLike(data.main.feels_like);
        setHumidity(data.main.humidity);
      } catch (error) {
        console.error('Error al obtener datos de la API', error);
      }
    };

    fetchData();
  }, [apiKey, city]);

  if (temperature === null || feelsLike === null || humidity === null) {
    // Muestra un mensaje de carga mientras se obtienen los datos
    return <p>Cargando datos...</p>;
  }

  return (
    <div className="temperature-info-box">
      <p style={{ color: 'orange' }}>Sensación Térmica: {feelsLike}°C</p>
      <p style={{ color: '#0484F9' }}>Humedad: {humidity}%</p>
    </div>
  );
};

export default TemperatureInfoBox;