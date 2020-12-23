
import React from 'react';
// images
import logo from '../images/logo.png';
// components
import Navbar_Footer from './nav_footer.js';
import dwd from '../images/djanky.png';
import linked from '../images/new/linked.png';

const Footer = (props) => {
    return (
        <div className="parent_container">
            <div>
                <div className="footer_container">

                        <div className="dwd_signature">
                           <a href="https://www.davidwebdevelopment.com">
                            <img src={dwd} alt='/' />
                            David Web Development &#169;
                           </a>
                       </div>

                        <div>
                            <div data-aos="fade-up" className="logo">
                                <a href="./">
                                    <img src={logo} alt="Company logo" />
                                    <p>Helen Wan - Inspirational slogan</p>
                                </a>
                            </div>
                            <Navbar_Footer />
                       </div>

                       <div className="socials_container">
                            <img src={linked} alt='/' />
                       </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Footer;