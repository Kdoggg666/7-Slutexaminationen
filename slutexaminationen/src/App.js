import logo from './logo.svg';
import './App.css';
import Landing from './Landing.js';
import Menu from './Menu.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App" >
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
