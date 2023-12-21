import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Historico from './Historico';
import './App.css';



function App() {
  return (

    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Historico/>} />
        </Routes>
      </div>


    </Router>
  );
}

export default App;


