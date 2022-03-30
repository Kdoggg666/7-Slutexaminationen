import logo from './logo.svg';
import './App.css';
import Landing from './Landing.js';
import Menu from './Menu.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { getAllMenu, createMenu } from './services/AirBeanApi.js';
import Axios from 'axios';



function App() {
  const getMenu = () => {
    Axios.get('http://localhost:5000/api/beans').then(
      (response) => {
        console.log(response);
      }
    );
  };


  return (
    <Router>
      <div className="App" onLoad={getMenu} >
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
