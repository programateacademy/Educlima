
import './App.css';
import Polucion from './Components/contaminacion';
import GraficoAnillo from './Components/graficoTorta';
import TablaPolucion from './Components/tablaPolucion';

function App() {
  return (
    <div>
      <Polucion />
      <TablaPolucion />
      <GraficoAnillo/> 
    </div>
    
  );
}

export default App;
