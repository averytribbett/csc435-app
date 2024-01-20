import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

/*
<header className="App-header">
        <p>Avery Tribbett</p>
        <p>CSC435 - Adv Web App Dev</p>
        <p>Assignment 1</p>
        <p>01/13/2024</p>
      </header>
*/
