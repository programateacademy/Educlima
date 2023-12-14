import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../index.css';

const Polucion = () => {
    const [beijingData, setBeijingData] = useState(null);
    const [oviedoData, setOviedoData] = useState(null);
    const apiKey = 'f0e1fcd262705a1036cbc830d06fd67f';
    const chartRef = useRef();

    useEffect(() => {
        const fetchPolucion= async () => {
            try {
                const beijingResponse = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=39.9042&lon=116.4074&appid=${apiKey}`);
                const beijingJson = await beijingResponse.json();
                setBeijingData(beijingJson);

                const oviedoResponse = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=43.3614&lon=-5.8497&appid=${apiKey}`);
                const oviedoJson = await oviedoResponse.json();
                setOviedoData(oviedoJson);
            } catch (error) {
                console.error('Error al obtener datos de contaminación del aire:', error);
            }
        };

        fetchPolucion();
    }, []);

    useEffect(() => {
        if (beijingData && oviedoData) {
            const ctx = chartRef.current.getContext('2d');

            if (chartRef.current.chart) {
                chartRef.current.chart.destroy();
            }

            chartRef.current.chart = new Chart(ctx, {
                type: 'line',
                
                data: {
                    labels: ['SO2', 'NO2', 'PM10', 'PM2.5', 'O3', 'CO'],
                    datasets: [
                        {
                            label: 'Beijing',
                            data: [
                                beijingData.list[0].components.so2,
                                beijingData.list[0].components.no2,
                                beijingData.list[0].components.pm10,
                                beijingData.list[0].components.pm2_5,
                                beijingData.list[0].components.o3,
                                beijingData.list[0].components.co,
                            ],
                            borderColor: '#3D8EF8',
                            borderWidth: 2,
                            pointRadius: 5,
                            pointBorderColor: 'transparent',
                            pointBackgroundColor:'#3D8EF8',
                            pointHoverBackgroundColor: '#3D8EF8',
                            fill: true,
                            backgroundColor: 'rgba(61, 142, 248, 0.2)',
                        },
                        {
                            label: ' Oviedo',
                            data: [
                                oviedoData.list[0].components.so2,
                                oviedoData.list[0].components.no2,
                                oviedoData.list[0].components.pm10,
                                oviedoData.list[0].components.pm2_5,
                                oviedoData.list[0].components.o3,
                                oviedoData.list[0].components.co,
                            ],
                            borderColor: '#11C46E',
                            borderWidth: 2,
                            pointRadius: 5,
                            pointBackgroundColor: '#11C46E',
                            pointBorderColor: 'transparent',
                            pointHoverBackgroundColor: '#11C46E',
                            fill: true,

                            backgroundColor: 'rgba(17, 196, 110, 0.2)',
                        },
                    ],
                },
                options: {
                    responsive: false,
                    
                        },
                    
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                    
                
            });
        }
    }, [beijingData, oviedoData]);


    return (
        <div>
            <h2>Comparación de la polución entre: Beijing y Oviedo</h2>
            <canvas className='graficaLineas' ref={chartRef} width={500} height={500}/>;
        </div>
    );
    
};


export default Polucion;
