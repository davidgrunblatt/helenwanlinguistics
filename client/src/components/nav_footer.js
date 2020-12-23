
import React from 'react';
// Images
const Navbar_Footer = (props) => {
    return (
        <div className="parent_container">

            <div className = "nav_footer">
                <div className="navbar_nav">
                    <nav>
                        <a href="./">Home</a>
                        <a href="./">About</a>
                        <a href="./">Blog</a>
                        <a href="./">Contact</a>
                    </nav>
                    <nav className="footer_statements">
                        <a href="./">Privacy Policy</a>
                        <a href="./">Terms of use</a>
                        <a href="./">Accessibility Statement</a>
                    </nav>
                </div>

            </div>

        </div>
    )
}

export default Navbar_Footer;