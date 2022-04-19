import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut, GoogleAuthProvider, signInWithPopup, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';

const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
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
    const createUser = (name, img, email, password, toast) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                setUser(user);
                updateProfile(auth.currentUser, {
                    displayName: `${name}`,
                    photoURL: `${img}`
                })
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        toast('Varification Mail Send')
                    })
                navigate(from, { replace: true });
            })
    }

    //? Create user with google account 
    const signinUserGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(userCredential => {
                const user = userCredential.user;
                setUser(user);
                navigate(from, { replace: true });
            })
    }

    //? Login user with Email and Password
    const loginUser = (email, password, setError) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                setUser(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }

    //? Sign Out User
    const handleSignOut = () => {
        signOut(auth)
    }

    //? Reset Password
    const resetPasswordOfUser = (email, toast) => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            toast('Reset Mail Send');
        })
    }

    return {
        createUser,
        signinUserGoogle,
        loginUser,
        handleSignOut,
        resetPasswordOfUser,
        user,
    }
}

export default useFirebase;