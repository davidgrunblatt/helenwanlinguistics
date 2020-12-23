
import React from 'react';
// Images
import logo from '../images/logo.png';
import home from '../images/a_home.png';
import about from '../images/a_about.png';
import contact from '../images/contact.png';
import blogs from '../images/a_blogs.png';
import Slide_Nav from './sidebar.js';
import Sidebar from "react-sidebar";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: false
        };
      }
    render() {
        return (
            <div className="header parent_container shadow">
    
                <div className = "navbar_container">
                    
                    <div className="logo">
                        <a href="./">
                            <img src={logo} alt="Company logo" />
                        </a>
                    </div>
                    <div className="navbar_nav">
                        <nav>
                            <a id="home" onClick={this.props.navigation}>
                                <img src={home} alt='home' />
                                Home
                            </a>
                            <a id="about" onClick={this.props.navigation}>
                                <img src={about} alt='about' />
                                About
                            </a>
                            <a id="blogs" onClick={this.props.navigation}>
                                <img src={blogs} alt='blogs' />
                                Blogs
                            </a>
                            {/* <a id="contact" onClick={this.props.navigation}>
                            <img src={contact} alt='blogs' />
                                Contact
                            </a> */}
                        </nav>                  
                    </div>
    
                {/* <Slide_Nav id="burger_btn"/> */}
                </div>
    
            </div>
        )
    }
}

export default Navbar;