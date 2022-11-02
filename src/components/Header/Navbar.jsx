import React, { Component } from 'react';
import {BsList} from 'react-icons/bs';
import Style from './Navbar.module.css';

class Navbar extends Component {
    state = {
        show_links: false,
        links: ["Home","Vehicles","About us", "Log in"]
    }

    burger = () => {
        this.setState({
            show_links: !this.state.show_links,
        });
        console.log(this.state.show_links);
    }

    render_nav_links(){
        console.log(this.state.show_links)
        if(window.innerWidth>800 || this.state.show_links === true){
            return <div className={Style.nav_links}>
                    <a href="#" className={Style.active}>{this.state.links[0]}</a>
                    {this.state.links.slice(1).map(
                        link => <a href="#" key={link}>{link}</a> 
                    )}
                    </div>; 
        }
        return null;
    }

    render() {
        return (
            <nav className={Style._nav}>
                <div className={Style.nav_logo}>
                    <a href="#" className={Style.logo}>Logo</a>
                </div>
                {this.render_nav_links()}
                <div className={Style.nav_burger}>
                    <button onClick={this.burger}>
                        <BsList color="white" fontSize="2.2rem"/>
                        </button>
                </div>
            
            </nav>);
    }
}

export default Navbar;