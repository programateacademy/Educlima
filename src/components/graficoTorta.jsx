import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const GraficoAnillo = () => {
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
                cutout: '50%',
            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="graficoAnillo" >
            <h2>Puntaje de polución</h2>
            <canvas ref={chartContainer} /* width="50%" height="auto" */></canvas>
        </div>
    );
};

export default GraficoAnillo;
