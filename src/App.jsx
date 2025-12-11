import './style/App.css';
import Dashboard from './component/Dashboard';
import Login from './component/Login'
import Fridge from './component/Fridge'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Recipe from './component/Recipe';
import Stat from './component/Stat';

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
           <Route path="/" element={<Login />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fridge" element={<Fridge />} />
        <Route path="/Recipe" element={<Recipe />} />
        <Route path="/Stat" element={<Stat />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
