import React from "react";
import headImage from ".//assets/graphics/graphics-header.svg";
import plusImage from ".//assets/graphics/add.svg";

export default function MenuItems(props) {
  const displayMenuItems = (props) => {
    const { beans } = props;
    if (beans.length > 0) {
      return beans.map((item, index) => {
        return (
          <div className="row">
            <div className="col-1">
              <div className="plus-icon">
                <img className="plus-image" src={plusImage} alt="" />
              </div>
            </div>
            <div className="col menu-item-name">
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
            <div className="col trailing-line"></div>
            <div className="col price">
              <h5>{item.price} kr</h5>
            </div>
          </div>
        );
      });
    } else {
      return <h3>No notes yet</h3>;
    }
  };

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
          <ul>{displayMenuItems(props)}</ul>
        </div>
      </div>
    </>
  );
}
