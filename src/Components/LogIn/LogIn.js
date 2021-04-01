import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
const LogIn = () => {
    const [user,setUser] = useState({
        name:'',
        email:''
    })
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleSignIn = ()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
  .then((result) => {
    const us = result.user;
    const newUser = {...user}
    newUser.email=us.email
    newUser.name=us.displayName
    setUser(newUser)
    setLoggedInUser(newUser)
    history.replace(from);
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
}
    
    return (
        <div className="text-center mt-5">
            <button onClick={handleSignIn} className="btn btn-info">Google Sign In</button>
        </div>
    );
};

export default LogIn;