import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import LinkTo from './../LinkTo/LinkTo';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const { user, handleSignOut } = useFirebase();
    console.log(user)
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
                        {user?.uid && (
                            <div className="profine__info">
                                <div className="profile__avater">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                                <div className="profile__name">
                                    <p>{user?.displayName}</p>
                                </div>
                            </div>
                        )}
                        <div className="account">
                            {user?.uid ? <button onClick={handleSignOut}>Sign Out</button> : <Link to="/login">Login</Link>}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;