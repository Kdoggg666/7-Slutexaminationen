import React from 'react';
import imageLeft from './/assets/graphics/intro-graphic-left.svg';
import imageRight from './/assets/graphics/intro-graphic-right.svg';
import landingImage from './/assets/graphics/airbean-landing.svg';
import Button from 'react-bootstrap/Button';


function Landing() {
    return (

        <div className="row">
            <div className="col intro_column" style={{
                backgroundImage: `url(${imageLeft})`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="center">
                <img src={landingImage} alt="airbean" />
            </div>
                <div >
                </div>
            </div>
            <div className="col intro_column" style={{
                backgroundImage: `url(${imageRight})`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>

            </div>
            
        </div>

    )
}

export default Landing;