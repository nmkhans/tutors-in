import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import LinkTo from './LinkTo/LinkTo';

const Header = () => {
    return (
        <div className="Header">
            <div className="inner__header__area container">
                <div className="header__content">
                    <div className="header__logo__area">
                        <Link to='/'>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <nav className="header__nav__area">
                        <ul>
                            <li><LinkTo to='/'>Home</LinkTo></li>
                            <li><LinkTo to='/services'>Services</LinkTo></li>
                            <li><LinkTo to='/about'>About</LinkTo></li>
                            <li><LinkTo to='/blog'>Blog</LinkTo></li>
                        </ul>   
                    </nav>
                    <div className="header__user__area">
                        <div className="user__login">
                        <Link to='/login'>login</Link>
                        </div>
                        {/* <div className="user__info">
                            <div className="user__icon">
                            <FontAwesomeIcon icon={faUser} />
                            </div>
                            <div className="user__name">
                                <p>Moin Khan</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;