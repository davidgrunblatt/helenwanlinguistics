import React from "react";
import Sidebar from "react-sidebar";
// Images
import logo from '../images/logo.png';
import home from '../images/a_home.png';
import about from '../images/a_about.png';
import blogs from '../images/a_blogs.png';
import contact from '../images/contact.png';

 
class Slide_Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  render() {
    return (
      <Sidebar
        sidebar={<b>
            <div className="logo">
                    <a href="./">
                        <img src={logo} alt="Company logo" />
                    </a>
                </div>
                <div className="sidebar_nav">
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
        </b>}
        open={this.props.sidebarOpen}
        onSetOpen={this.props.sidebar}
        styles={{ 
            sidebar: { 
            background: "white", 
            marginTop: "100px", 
            width: '300px',
            height: '500px',
            position: 'fixed',
            top: 0,
            borderRight: "solid thick rgb(255, 123, 0)",
            borderTop: "solid thick rgb(255, 123, 0)",
            borderBottom: "solid thick rgb(255, 123, 0)"
        } }}
      >
        <button id="burger_btn" styles={{float: 'right'}} onClick={() => this.props.sidebar(true)}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </Sidebar>
    );
  }
}
 
export default Slide_Nav;