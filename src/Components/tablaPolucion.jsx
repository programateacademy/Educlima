import React from 'react';
import './tablaPolucion.css';

class TablaPolucion extends React.Component {
    render() {
        const data = [
            { nombreCualitativo: 'Bueno (5)', rango1: '[0; 20)', rango2: '[0; 40)', rango3: '[0; 20)', rango4: '[0; 10)', rango5: '	[0; 60)', rango6: '[0; 4400)' },
            { nombreCualitativo: 'Justo (4)', rango1: '[20; 80)', rango2: '[40; 70)', rango3: '[20; 50)', rango4: '[10; 25)', rango5: '[60; 100)', rango6: '[4400; 9400)' },
            { nombreCualitativo: 'Moderado (3)', rango1: '[80; 250)', rango2: '[70; 150)', rango3: '[50; 100)', rango4: '[25; 50)', rango5: '[100; 140)', rango6: '[9400; 12400)' },
            { nombreCualitativo: 'Pobre (2)', rango1: '[250; 350]', rango2: '[150; 200]', rango3: '[100; 200)', rango4: '[50; 75)', rango5: '[140; 180]', rango6: '[12400; 15400]' },
            { nombreCualitativo: 'Muy pobre (1)', rango1: '	⩾350', rango2: '⩾200', rango3: '⩾200', rango4: '⩾75', rango5: '⩾180', rango6: '⩾15400' },
        ];

        return (
            <div className='tablaPolucion'>
                <h2>Tabla de Concentración de contaminante en μg/m3</h2>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Nombre Cualitativo</th>
                            <th>Dióxido de Azufre (SO2)</th>
                            <th>Dióxido de Nitrógeno (NO2)</th>
                            <th>Partículas suspendidas de tamaño 10 micrómetros o menos (PM10)</th>
                            <th>Partículas suspendidas de tamaño 2.5 micrómetros o menos (PM2.5)</th>
                            <th>Ozono (O3)</th>
                            <th>Monóxido de Carbono (CO)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>{row.nombreCualitativo}</td>
                                <td>{row.rango1}</td>
                                <td>{row.rango2}</td>
                                <td>{row.rango3}</td>
                                <td>{row.rango4}</td>
                                <td>{row.rango5}</td>
                                <td>{row.rango6}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        );
    }
    
}

export default TablaPolucion;