import './style/App.css';
import Dashboard from './Dashboard';
import Login from './Login'
import Fridge from './Fridge'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Recipe from './Recipe';

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
           <Route path="/" element={<Login />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fridge" element={<Fridge />} />
        <Route path="/Recipe" element={<Recipe />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
