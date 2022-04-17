import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <div className="inner__home">
                <div className="home__content">
                    <div className="hero__area">
                        <div className="inner__hero__area container">
                            <div className="hero__content">
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
                    <div className="package__area">
                        <div className="inner__package__area container">
                            <div className="package__content">
                                <div className="packages">
                                    <div className="package__icon">
                                        <img src="https://i.ibb.co/Q8WnnGs/online-class.png" alt="" />
                                    </div>
                                    <div className="package__title">
                                        <h4>Online Coaching</h4>
                                    </div>
                                    <div className="package__desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna</p>
                                    </div>
                                    <div className="package__button">
                                        <button>Read More</button>
                                    </div>
                                </div>
                                <div className="packages">
                                    <div className="package__icon">
                                        <img src="https://i.ibb.co/kmJdd3W/personal.png" alt="" />
                                    </div>
                                    <div className="package__title">
                                        <h4>Persolanized Learning</h4>
                                    </div>
                                    <div className="package__desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna</p>
                                    </div>
                                    <div className="package__button">
                                        <button>Read More</button>
                                    </div>
                                </div>
                                <div className="packages">
                                    <div className="package__icon">
                                        <img src="https://i.ibb.co/2Ns5j7d/guide.png" alt="" />
                                    </div>
                                    <div className="package__title">
                                        <h4>Study Guidence</h4>
                                    </div>
                                    <div className="package__desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inci didunt ut labore et dolore magna</p>
                                    </div>
                                    <div className="package__button">
                                        <button>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;