import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import googleIcon from '../../images/google.png';
import logo2 from '../../images/logo-2.png';
   
const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then((result) => { 
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {name: displayName, email: email, photo: photoURL}
            setLoggedInUser(signedInUser)
            history.replace(from)
        })
        .catch((error) => {
            const errorMessage = error.message;
        });
    }
    
    return (
        <div>
            <div className="text-center mt-5 pt-5">
                <img src={logo2} alt=""/>
            </div>
            <div className="login-container"> 
                <h3 className="fw-bold my-5">Login With</h3>
                <div className="google-auth" onClick={handleGoogleSignIn}>
                    <img src={googleIcon} alt="Google Icon"/>
                    <h5>Continue With Google</h5>
                </div>
                <p className="my-3">Don't have an Account? <span className="create-account">Create an account!</span></p>
            </div>
        </div>
    );
};

export default Login;