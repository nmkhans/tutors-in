import React, { useRef } from 'react';
import './Login.css';
import useFirebase from './../../hooks/useFirebase';
import { useNavigate} from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const { loginUser } = useFirebase();
    const navigate = useNavigate();

    // Handle Form 
    const handleForm = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        loginUser(email, password);

    }

    return (
        <div className="Login">
            <div className="inner__login container">
                <div className="login__form">
                    <form onSubmit={handleForm}>
                        <div className="form__title">
                            <h2>Login</h2>
                        </div>
                        <div className="form__group">
                            <div className="input__group">
                                <label htmlFor="email">Email</label>
                                <input ref={emailRef} type="email" name="email" id="email" />
                            </div>
                            <div className="input__group">
                                <label htmlFor="password">Password</label>
                                <input ref={passwordRef} type="password" name="password" id="password" />
                            </div>
                            <div className="form__text">
                                <p>New Here?</p>
                                <button onClick={() => navigate('/register')}>Register</button>
                            </div>
                            <div className="form__submit__btn">
                                <input type="submit" value="Login" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;