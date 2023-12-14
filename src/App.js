
import './App.css';
import Polucion from './Components/contaminacion';
import DonutChart from './Components/graficoTorta';
import TablaPolucion from './Components/tablaPolucion';

function App() {
  return (
    <div>
      <Polucion />
      <TablaPolucion />
      <DonutChart/> 
    </div>
    
  );
}

export default App;
