import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from "./Components/Weather";
import Sidebar from "./Components/Sidebar";
// import Historicos from "./components/Historicos";
import Actuales from "./Components/Actuales";
import Polucion from "./Components/Polucion";

import "./Components/Weather.css";
import "./Components/Sidebar.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          {/* <Route path="/" element={<Historicos />} /> */}
          <Route path="/Actuales" element={<Actuales />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/polucion" element={<Polucion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
