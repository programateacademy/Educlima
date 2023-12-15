import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const WeatherComparisonChart = () => {
    const [data, setData] = useState(null);
    const apiKey = 'f0e1fcd262705a1036cbc830d06fd67f';

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Obtén datos históricos para Beijin 
                const beijinResponse = await axios.get(
                    `https://history.openweathermap.org/data/3.0/history/timemachine?lat=39.9075&lon=116.39723&dt=2023-11-14&appid=${apiKey}`
                );

                // Obtén datos históricos para Oviedo 
                const oviedoResponse = await axios.get(
                    `https://history.openweathermap.org/data/3.0/history/timemachine?lat=43.3614&lon=5.8497&dt=2023-11-14&appid=${apiKey}`
                );

                // Mapea los datos a un formato que Chart.js pueda entender 
                const chartData = {
                    labels: beijinResponse.data.hourly.map(
                        (hour) => new Date(hour.dt * 1000).toLocaleTimeString()
                    ),
                    datasets: [
                        {
                            label: 'Temperatura Beijin (°C)',
                            data: beijinResponse.data.hourly.map((hour) => hour.temp - 273.15),
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderWidth: 1,
                        },
                        {
                            label: 'Temperatura Oviedo (°C)',
                            data: oviedoResponse.data.hourly.map((hour) => hour.temp - 273.15),
                            backgroundColor: 'rgba(255,99,132,0.4)',
                            borderColor: 'rgba(255,99,132,1)',
                            borderWidth: 1,
                        },
                    ],
                };

                setData(chartData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <Bar
                    data={data}
                    options={{
                        scales: {
                            x: {
                                type: 'time',
                                time: {
                                    unit: 'hour',
                                },
                                title: {
                                    display: true,
                                    text: 'Hora',
                                },
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'Temperatura (°C)',
                                },
                            },
                        },
                    }}
                />
            ) : (
                <p>Cargando datos...</p>
            )}
        </div>
    );
};

export default WeatherComparisonChart;
