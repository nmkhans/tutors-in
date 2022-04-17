import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import LinkTo from './../LinkTo/LinkTo';

const Header = () => {
    return (
        <div className="Header">
            <div className="inner__header container">
                <div className="header__content">
                    <div className="header__logo">
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li><LinkTo to="/">Home</LinkTo></li>
                            <li><LinkTo to="/services">Service</LinkTo></li>
                            <li><LinkTo to="/about">About</LinkTo></li>
                            <li><LinkTo to="/checkout">Checkout</LinkTo></li>
                        </ul>
                    </nav>
                    <div className="header__profile">
                        <div className="profine__info">
                            <div className="profile__avater">
                                <img src="https://i.ibb.co/12fC5JT/client-4.jpg" alt="" />
                            </div>
                            <div className="profile__name">
                                <p>Moin Khan</p>
                            </div>
                        </div>
                        <div className="account">
                            <Link to="/login">Login</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;