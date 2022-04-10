import React from "react";
import headImage from ".//assets/graphics/graphics-header.svg";
import Axios from "axios";
import { useState } from "react";

function Menu() {
  
  let menuItems = fetch("http://localhost:5000/api/beans").then((response) => response.json())
  .then((data) => {
    return data;
  });

  const coffeeItems = async () => {
    const a = await menuItems;
    console.log(a);
    return a;
  };



      
         
    
   
  const [beans, setBeans] = useState([coffeeItems()]);

  

  return (
    <div>
      <div className="row menu">
        <div
          className="col head-section-menu"
          style={{
            backgroundImage: `url(${headImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
      <div className="row menu-row">
        <div className="col menu-items-section">
          <h1>Meny</h1>
          <ul>
            {beans.map((item) => (
              <li key={item} >{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;
