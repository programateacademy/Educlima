import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DonutChart = () => {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        const ctx = chartContainer.current.getContext('2d');

        const data = {
            labels: ['Beijin', 'Oviedo'],
            datasets: [{
                label: 'Puntaje:',
                data: [27, 30],
                backgroundColor: [
                    '#3D8EF8',
                    '#11C46E'
                ],
                borderColor: [
                    '#3D8EF8',
                    '#11C46E'
                ],
                borderWidth: 1,
            }]
        };


        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
            type: 'doughnut', 
            data: data,
            options: {
                responsive: false,
                maintainAspectRatio: false,
                cutout: '70%',
            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div>
            <h2>Puntaje de polución</h2>
            <canvas className="graficoAnillo" ref={chartContainer} width="250px" height="250px"></canvas>
        </div>
    );
};

export default DonutChart;
