import React from "react";
import { Bar } from 'react-chartjs-2';
import { Beijing, Oviedo } from "./data";

export function data(cityData) {
  return {
    labels: cityData.map(item => item.Title),
    datasets: [
      {
        label: 'Temperatura',
        data: cityData.map(item => Number(item.Temperatura.split(' ')[0])),
        backgroundColor: 'rgba(945,192,192,0.4)',                                                                                                                                              
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      }                                                                             
    ]
  };
}

const Historico = () => {
  return (
    <div>
      <h1 className='bg-info text-center font-monospace fw-bold lh-base'>Graficas Historico</h1>

      <div>
        <p className='m-2'><b>Grafica Beijing</b></p>
        <Bar data={data(Beijing)} />
      </div>

      <div>
        <p className='m-2'><b>Grafica Oviedo</b></p>
        <Bar data={data(Oviedo)} />
      </div>
    </div>
  );
}

export default Historico 