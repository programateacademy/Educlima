import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from "./components/Weather";
import Sidebar from "./components/Sidebar";
/* import Historicos from "./components/Historicos";
import Actuales from "./components/Actuales"; */
import Polucion from "./components/Polucion";

import "./components/Weather.css";
import "./components/Sidebar.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          {/* <Route path="/" element={<Historicos />} />
          <Route path="/actuales" element={<Actuales />} /> */}
          <Route path="/" element={<Weather />} />
          <Route path="/polucion" element={<Polucion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
