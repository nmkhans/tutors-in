import React, { useRef } from 'react';
import './Register.css';
import useFirebase from './../../hooks/useFirebase';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const {createUser} = useFirebase();

    // Handle Form
    const handleForm = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        if(password === confirmPassword) {
            createUser(email, password);
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