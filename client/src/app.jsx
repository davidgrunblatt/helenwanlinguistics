
import React from 'react';
// components
import Navbar from './components/navbar';
import Footer from './components/footer';
import Loading from './components/loading';
import Sidebar from './components/sidebar.js';
// views 
import Home from './views/Home';
import About from './views/About';
import Blogs from './views/Blogs';
import Blogs_Page from './views/Blogs_Page';
// stylesheets
import './styles.css';
import './styles_fx.css';
import {blog_0, blog_1, blog_2, blog_3, blog_4, blog_5 } from './crud.js';
// AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            slogan: "Inspirational Slogan",
            page: "loading",
            blogs: [blog_0, blog_1, blog_2, blog_3, blog_4, blog_5],
            fade: 'out',
            sidebarOpen: false
        }
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }


    onSetSidebarOpen(open) {
        if (this.state.sidebarOpen === false) {
            this.setState({ sidebarOpen: open });
        } else {
            this.setState({ sidebarOpen: false });
        }
    }

    close = () => {
        setTimeout(() => {
            this.setState({ sidebarOpen: false });
        }, 800);
    }

    componentDidMount() {
        // ..
        AOS.init();

       if (this.state.page == 'loading') {
        setTimeout(() => {
            this.setState({ page: 'home' })
        }, 3000);
        setTimeout(() => {
            this.setState({fade: 'in'});
           }, 3500);
       }
       else {
        setTimeout(() => {
            this.setState({fade: 'in'});
           }, 2000);
       }
    }

    navigation = (e) => {
        if(e.target.id === "home") {
            this.setState({page: 'home'})
            this.close();
        }
        else if(e.target.id === "about") {
            this.setState({
                page: 'about'
            })
            this.close();
        }
        else if(e.target.id === "blogs") {
            this.setState({page: 'blogs'})
            this.close();
        }
        else if(e.target.id === "contact") {
            this.setState({page: 'contact'})
            this.close();
        }
        else if(e.target.id === 'blogs_page') {
            this.setState({page: 'blogs_page'})
            this.close();
        }
        
    }
    

    render() {
        if (this.state.page === 'home') {
            return(
                <div id='home'>
   
                    <Navbar navigation={this.navigation} />
                    <Sidebar navigation={this.navigation} sidebar={this.onSetSidebarOpen} sidebarOpen={this.state.sidebarOpen} />
                    <main className={this.state.fade == 'out' ? "fade_transition fade_out" : "fade_transition fade_in"}>
                        <Home slogan={this.state.slogan} />
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            )
        }
        else if (this.state.page === 'about') {
            return(
                <div className="parent_container">
                        <Navbar navigation={this.navigation} />
                        <Sidebar navigation={this.navigation} sidebar={this.onSetSidebarOpen} sidebarOpen={this.state.sidebarOpen} />
                    <main className={this.state.fade == 'out' ? "fade_transition fade_out" : "fade_transition fade_in"}>
                        <About fade={this.state.fade} slogan={this.state.slogan} />
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            )
        }
        else if (this.state.page === 'blogs') {
            return(
                <div className="parent_container">
                        <Navbar navigation={this.navigation} />
                        <Sidebar navigation={this.navigation} sidebar={this.onSetSidebarOpen} sidebarOpen={this.state.sidebarOpen} />
                    <main>
                        <Blogs click_blogs={this.navigation} fade={this.state.fade} blogs={this.state.blogs} />
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            )
        }
        else if (this.state.page === 'blogs_page') {
            return(
                <div className="parent_container">
                        <Navbar navigation={this.navigation} />
                        <Sidebar navigation={this.navigation} sidebar={this.onSetSidebarOpen} sidebarOpen={this.state.sidebarOpen} />
                    <main>
                        <Blogs_Page fade={this.state.fade} blogs={this.state.blogs} />
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
            )
        }
        else if (this.state.page == 'loading') {
            return(
                <div className="parent_container">
                    <Loading fade={this.state.fade} />
                </div>
            )
        }
    }
}
export default App;
 