
import React from 'react';
// components
import logo from '../images/logo.png';
import linguistics from '../images/new/linguistics.png';

const About = (props) => {
    return (
        <div className="parent_container shadow background">
            <div className="about_container">
                <div className={props.fade == 'out' ? "secondary_section fade_transition fade_out" : "secondary_section fade_transition fade_in"}>
                    <img className='logo_2' src={logo} alt="/" />
                    <p>
                        The Topics page has its own with more routes
                        that build on the /topics URL path. You can think of the
                        2nd here as an "index" page for all topics, or
                        the page that is shown when no topic is selected
                        The Topics page has its own with more routes
                        that build on the /topics URL path. You can think of the
                        2nd here as an "index" page for all topics, or
                        the page that is shown when no topic is selected
                        <br /><br />
                        The Topics page has its own with more routes
                        that build on the /topics URL path. You can think of the
                        2nd here as an "index" page for all topics, or
                        the page that is shown when no topic is selected
                        The Topics page has its own with more routes
                        that build on the /topics URL path. You can think of the
                        2nd here as an "index" page for all topics, or
                        the page that is shown when no topic is selected
                        <br /><br />
                        The Topics page has its own with more routes
                        that build on the /topics URL path. You can think of the
                        2nd here as an "index" page for all topics, or
                        the page that is shown when no topic is selected
                        The Topics page has its own with more routes
                        that build on the /topics URL path. You can think of the
                        2nd here as an "index" page for all topics, or
                        the page that is shown when no topic is selected
                    </p>
                    <img className="about-icon" src={linguistics} alt="linguistics word map" />
                </div>
            </div>
        </div>
    )
}

export default About;