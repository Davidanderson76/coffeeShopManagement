import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAxOfqg1QVvq01TGz2TMi7guKeePEdJpOE",
  authDomain: "time-flow-dd98c.firebaseapp.com",
  projectId: "time-flow-dd98c",
  storageBucket: "time-flow-dd98c.appspot.com",
  messagingSenderId: "306420797152",
  appId: "1:306420797152:web:922685a4dcbfe9835dca85",
  measurementId: "G-7B7PEQ9YKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        // console.log(result);
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('profilePic', profilePic);
        
    }).catch((error) => {
        console.log(error);
    })
};