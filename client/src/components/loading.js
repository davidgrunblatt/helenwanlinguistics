
import React from 'react';
import logo from '../images/logo.png';
import loading from '../images/loading.png';

const Loading = (props) => {
    return (
        <div className="loading_container">
            <img className="logo" src={logo} alt='' />
            <img className="loading" src={loading} alt='' />
        </div>
    )
}

export default Loading;