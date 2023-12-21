import './App.css';
import Historico from "./Historico";

function App() {
  return (

    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Historicos />} />
        </Routes>
      </div>


    </Router>
  );
}

export default App;





