
import React from 'react';
// carousel images 
import carousel_1 from '../images/jumbo_0.png';

const Jumbotron = (props) => {
    return(
        <div className="jumbotron_container shadow">
            <div>
                <img src={carousel_1} alt="/" />
            </div>
            <div className="slogan">
                <h1>{props.slogan}</h1>
            </div>
        </div>
    )
}

export default Jumbotron;