import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <div className="inner__home container">
                <div className="home__content">
                    <div className="hero__area">
                        <div className="hero__left__text">
                            <h3>Your Personalized Learning Program</h3>
                            <h2>Learn effectively and in a innovative way that you never had before.</h2>
                            <button>Choose a Plan</button>
                        </div>
                        <div className="hero__right__img">
                            <img src="https://i.ibb.co/L8ggwWM/teacher.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;