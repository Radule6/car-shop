import React, { Component } from 'react';
import Navbar from './Navbar';
import Style from './Header.module.css';
import { Outlet} from "react-router-dom";


class Header extends Component {
    state = {}
    render() {
        return (
            <>
            <header className={Style._header}>
                <Navbar />
                <div className={Style.container}>
                    <div className={Style.info}>
                        <div className={Style.title}>
                            <h1>Car Delivery</h1><br />
                            <span></span>
                        </div>
                        <div className={Style.desc}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Assumenda nihil dignissimos voluptatum molestiae totam non!
                                Rerum nostrum fugit modi ipsa?
                            </p>
                        </div>
                    </div>
                    <div className={Style.pic}></div>
                </div>
            </header>

            <Outlet /></>
        );
    }
}

export default Header;