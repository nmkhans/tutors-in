import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="About">
            <div className="inner__about container">
                <div className="about__content">
                    <div className="about__title">
                        <h2>About Me</h2>
                    </div>
                    <div className="about__intro">
                        <div className="about__intro__desc">
                            <h2>Hi! I am Moin Khan.</h2>
                            <h4>Front-End Web application Developer</h4>
                            <p>I am a Moin Khan. I want to be a Mern stack web application developer. Its my dream. Now I am working very hard to achive my dream. With hardwork and effort I have learnt many technology. HTML, CSS, Javascript, React is the main gems in my achivement list. And This will go on. I will work harder and soon become a fullstack web application developer.</p>
                        </div>
                        <div className="about__intro__img">
                            <img src="https://i.ibb.co/s6LY73P/Programming-pana.png" alt="" />
                        </div>
                    </div>
                    <div className="about__detail">
                        <div className="about__detail__list">
                            <h2>Personal Info:</h2>
                            <ul>
                                <li><span>Name:</span> Moin Khan</li>
                                <li><span>Nationality:</span> Bangladesh</li>
                                <li><span>Location:</span> Dhaka</li>
                                <li><span>Phone:</span> 0132456789</li>
                                <li><span>Email:</span> nurmoin05@gmail.com</li>
                            </ul>
                        </div>
                        <div className="about__detail__skils">
                            <h2>Developement Skills:</h2>
                            <div className="skills__list">
                                <span><p>HTML</p></span>
                                <span><p>CSS</p></span>
                                <span><p>Bootstrap</p></span>
                                <span><p>Tailwind</p></span>
                                <span><p>Javascript</p></span>
                                <span><p>React.js</p></span>
                                <span><p>Node.js</p></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;