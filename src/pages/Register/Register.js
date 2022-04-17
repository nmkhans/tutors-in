import React, { useRef } from 'react';
import './Register.css';
import useFirebase from './../../hooks/useFirebase';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const nameRef = useRef('');
    const imgRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const {createUser} = useFirebase();
    const navigate = useNavigate();

    // Handle Form
    const handleForm = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const img = imgRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if(password === confirmPassword) {
            createUser(name, img, email, password);
        }
    }

    return (
        <div className="Register">
            <div className="inner__register container">
                <div className="register__form">
                    <form onSubmit={handleForm}>
                        <div className="form__title">
                            <h2>Register</h2>
                        </div>
                        <div className="form__group">
                            <div className="input__group">
                                <label htmlFor="name">Name</label>
                                <input ref={nameRef} type="text" name="name" id="name" />
                            </div>
                            <div className="input__group">
                                <label htmlFor="image">Image</label>
                                <input ref={imgRef} type="text" name="image" id="image" />
                            </div>
                            <div className="input__group">
                                <label htmlFor="email">Email</label>
                                <input ref={emailRef} type="email" name="email" id="email" />
                            </div>
                            <div className="input__group">
                                <label htmlFor="password">Password</label>
                                <input ref={passwordRef} type="password" name="password" id="password" />
                            </div>
                            <div className="input__group">
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input ref={confirmPasswordRef} type="password" name="password" id="confirm-password" />
                            </div>
                            <div className="form__text">
                                <p>Already Have an Account?</p>
                                <button onClick={() => navigate('/login')}>Login</button>
                            </div>
                            <div className="form__submit__btn">
                                <input type="submit" value="Register" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;