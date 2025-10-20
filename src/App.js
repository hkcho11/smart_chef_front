import './App.css';
import Dashboard from './Dashboard';
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
           <Route path="/" element={<Login />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
