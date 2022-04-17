import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';

const useFirebase = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

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
            navigate(from, {replace: true});
        })
    }

    //? Login user with Email and Password
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            setUser(user);
            navigate(from, {replace: true});
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