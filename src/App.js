import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from "./Components/Weather";
import Sidebar from "./Components/Sidebar";
import Historicos from "./Components/Historicos";
import Actuales from "./Components/Actuales";
import Polucion from "./Components/polucion";

import "./Components/Weather.css";
import "./Components/Sidebar.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Historicos />} />
          <Route path="/actuales" element={<Actuales />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/polucion" element={<Polucion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
