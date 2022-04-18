import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="NotFound">
            <div className="inner__notFound container">
                <div className="notFound__content">
                    <h2>404</h2>
                    <p>We coulden't find the page you are looking for!</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;