import logo from "./logo.svg";
import "./App.css";
import Landing from "./Landing.js";
import Menu from "./Menu.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";

function App() {
  let [menuItem1, setMenuItem1] = useState("");

  const getMenu = () => {
    Axios.get("http://localhost:5000/api/beans").then((response) => {
      console.log(response.data.menu);
      menuItem1 = response.data.menu[0].title;
      console.log(menuItem1);
      
    });
  };
  return (
    <Router>
      <div className="App" onLoad={getMenu}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
