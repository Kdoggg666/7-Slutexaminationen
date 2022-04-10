import React from "react";
import headImage from ".//assets/graphics/graphics-header.svg";

export default function MenuItems(props) {

  const displayMenuItems = (props) => {
    const {beans} = props;
    if (beans.length > 0) {
      return(
        beans.map((item, index) => {
          return(
            <li key={index} >{item.title}</li>
          )
        })
      )
    } else {
      return(<h3>No notes yet</h3>)
    }
  }

  return (
    <>
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
            {displayMenuItems(props)}
          </ul>
        </div>
      </div>
    </>
  );
}
