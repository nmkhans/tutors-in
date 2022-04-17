import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
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
    const createUser = (name, img, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            setUser(user);
            updateProfile(auth.currentUser, {
            displayName: `${name}`,
            photoURL: `${img}`
        })
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

    //? Sign Out User
    const handleSignOut = () => [
        signOut(auth)
    ]

    return {
        createUser,
        loginUser,
        handleSignOut,
        user
    }
}

export default useFirebase;