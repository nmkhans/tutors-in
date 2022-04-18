import React from 'react';
import Service from '../../components/Service/Service';
import { useService } from '../../hooks/useData';
import './Home.css';

const Home = () => {
    const {services} = useService();

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
                    <div className="intro__area">
                        <div className="inner__intro__area container">
                            <div className="intro__content">
                                <div className="intro__left__img">
                                    <img src="https://i.ibb.co/nDBc85s/Internship-pana.png" alt="" />
                                </div>
                                <div className="intro__right__desc">
                                    <h2>Hi I'm Alex Costa!</h2>
                                    <h3>Personal and Professional Tutor</h3>
                                    <p>I am a professional and passionated Home Tutor who can make your study easier and enjoyable in an effective and innovative way. I am here to help you out with your study and make you improve your self day by day without even any boaringness. You can let me take care of your study and make you improve. I can teach you personally and in a customizable study program according to your requirement. You can have me to guide you to the right path way toward your success. So without any further grab one package and start with me today.</p>
                                    <button>Choose a Plan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="services__area">
                        <div className="inner__services__area container">
                            <div className="services__title">
                                <h2>My Services</h2>
                                <h3>My Providing service courses</h3>
                            </div>
                            <div className="services__content">
                                {
                                    services.map(service => <Service key={service.id} service={service} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;