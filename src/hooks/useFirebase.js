import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const useFirebase = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    //? hook state Observer
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        });
    }, [])


    //? Create new user with Email and Password
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            setUser(user);
            navigate('/');
        })
    }

    //? Login user with Email and Password
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            setUser(user);
            navigate('/');
        })
    }

    return {
        createUser,
        loginUser,
        user
    }
}

export default useFirebase;