
import React from 'react';
import blog_1 from '../images/blog_1.png';
import logo from '../images/logo.png';

const Blogs_Page = (props) => {
    return (
        <div className="parent_container shadow background">
            <div className={props.fade == 'out' ? "blog_container fade_transition fade_out" : "blog_container fade_transition fade_in"}>
                <div className="secondary_section" data-aos="slide-up">
                <img className='logo_2'  src={logo} alt="/" />
                    <h1>Water is wet</h1>
                    <img className="blog_page_img shadow" src={blog_1} alt="/" />
                    <p>
                        <strong>12/11/20</strong><br />
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
                </div>
            </div>
        </div>
    )
}

export default Blogs_Page;