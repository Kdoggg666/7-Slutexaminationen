import React from 'react';
import headImage from './/assets/graphics/graphics-header.svg';


function Menu() {

    return (
        <div>
        <div className="row menu">
            <div className="col head-section-menu" style={{
                backgroundImage: `url(${headImage})`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} >
                </div>            


        </div>
        <div className="row menu-row">
            <div className="col menu-items-section">
                <h1>Meny</h1>
                
            </div>
        </div>
        </div>
    )
}

export default Menu;