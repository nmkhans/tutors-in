import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBzvc6KNDguD84IzHWDpgh8EBbllcNuWSE",
    authDomain: "tutors-in.firebaseapp.com",
    projectId: "tutors-in",
    storageBucket: "tutors-in.appspot.com",
    messagingSenderId: "980561470391",
    appId: "1:980561470391:web:5f71a40a0095e84ab0fe32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;