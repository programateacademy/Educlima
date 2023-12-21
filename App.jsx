import React, { useEffect, useRef, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import './index.css'; 
import tempImage from './temp.png'; // Ruta relativa desde TemperatureInfo.js al archivo temp.png
import TemperatureInfoBox from './TemperatureInfoBox';

const App = () => {
    const chartRef = useRef();
    const [beijingData, setBeijingData] = useState(null);
    const [oviedoData, setOviedoData] = useState(null);
    const apiKey = 'e317cf38ac66d2bee0cca64e197709d8';

    useEffect(() => {
    const fetchData = async () => {
        try {
        const beijingResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=39.9075&lon=116.39723&appid=${apiKey}&units=metric`
        );
        const beijingJson = await beijingResponse.json();
        setBeijingData(beijingJson);

        const oviedoResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=43.36029&lon=-5.84476&appid=${apiKey}&units=metric`
        );
        const oviedoJson = await oviedoResponse.json();
        setOviedoData(oviedoJson);
        } catch (error) {
        console.error('Error al obtener datos de las ciudades', error);
        }

    };

    fetchData();
    }, []);

    if (!beijingData || !oviedoData) {
    return <p>Cargando datos...</p>;
    }

    const temperatures = [beijingData.main.temp, oviedoData.main.temp];

    const labels = ['Beijing', 'Oviedo'];
    const backgroundColors = ['#FFD700', '#FF6347'];

  // Encontrar la temperatura más alta y resaltar la ciudad correspondiente
    const maxTemperature = Math.max(...temperatures);
    const maxTemperatureIndex = temperatures.indexOf(maxTemperature);
    const highlightedColors = backgroundColors.map((color, index) =>
        index === maxTemperatureIndex ? '#FF0000' : color
    );

    const data = {
    labels: labels,
    datasets: [
        {
        data: temperatures,
        backgroundColor: highlightedColors,
        hoverBackgroundColor: highlightedColors,
        },
    ],
    };

    const options = {
    maintainAspectRatio: true,
    };

    return (
        <>
            <h2>Comparación de temperatura entre Beijing y Oviedo</h2>
            <div className="chart-container">
            <Doughnut className="chart" data={data} options={options} />
            </div>
            <div className="center-vertically"> {/* Nuevo contenedor para centrar verticalmente */}
        <h2 className="image-title">Temperatura estimada por mes</h2>
        <div className="img-container">
        </div>
            <img
                src={tempImage}
                alt="Descripción de la imagen"
            />
            </div>
            <div className="temperature-info-container"> {/* Aplica la clase CSS aquí */}
        <TemperatureInfoBox city="Beijing" apiKey={apiKey} />
        <TemperatureInfoBox city="Oviedo" apiKey={apiKey} />
        </div>
        </>
        );
};

    
export default App;
