
import React from 'react';
import blog_0 from '../images/blog_0.png';
// import blog_1 from '../images/blog_1.png';
// import blog_2 from '../images/blog_2.png';
import logo from '../images/logo.png';

const Blogs = (props) => {
    console.log(props);
    return (
        <div className="parent_container background shadow">
            <div className={props.fade == 'out' ? "about_container fade_transition fade_out" : "about_container fade_transition fade_in"}>
                <img className='logo_2'  src={logo} alt="/" />
                <div className="blog_container">
                    {props.blogs.map(item => {
                        return <div className="blog_card shadow" data-aos="slide-up" >
                            <img className='shadow blog-thumbnail' src={blog_0} alt="/" />
                            <h1>{item.name}</h1>
                            <p><strong>{item.date}</strong></p>
                            <p>{item.article}</p>
                            <div className="blog_card_bottom">
                                <a className="blogs_page" id="blogs_page" onClick={props.click_blogs}>read more...</a>
                                <img className="blog_logo" src={logo} alt='/' />
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Blogs;