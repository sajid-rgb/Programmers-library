import React, { useContext, useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
const LogIn = () => {
    const [user,setUser] = useState({
        name:'',
        email:'',
        isSignIn:true
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
    newUser.isSignIn = false
    // localStorage.setItem('user', newUser.email);
    setLoggedInUser(newUser)
    history.replace(from);
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
}
const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase
  .auth()
  .signInWithPopup(fbProvider)
  .then((result) => {
 
    const use = result.user;
    const newUser = {...user}
    newUser.email=use.email
    newUser.name=use.displayName
    setUser(newUser)
    newUser.isSignIn = false
    // localStorage.setItem('user', newUser.email);
    setLoggedInUser(newUser)
    history.replace(from);
  })
  .catch((error) => {
    const errorMessage = error.message;
  });
}

    return (
        <div className="text-center d-flex flex-column justify-content-center align-items-center  mt-5 ">
                        {/* <form action="" className='d-flex flex-column justify-content-center align-items-center rounded bg-light w-75' style={{height:'75vh'}}>
            <h6 className='text-dark mt-5'>PROGRAMMER</h6>
            <h6 className=' text-success' style={{letterSpacing:'7px'}}>LIBRARY</h6>
            <h4>Please Sign In First</h4>
                <input type="text" className="form-control  mt-4 w-75" placeholder="Enter email"/>
                <input type="password" className="form-control mt-2 w-75" placeholder="Enter Password"/>
                <div className="d-flex flex-md-row flex-column mt-md-3 mt-0">
                <button className='btn btn-primary mt-2 mb-3'>Sign In</button>
                <Link className='mt-md-3 mt-0 ml-3'>forget password?</Link>
                </div>
                <Link to='/signUp'>I have no account</Link>
            </form> */}
            <div className="d-flex  flex-column bg-light w-75 mt-5  justify-content-center align-items-center rounded" style={{height:'0%'}}>
            <h6 className='text-dark mt-5'>PROGRAMMER</h6>
            <h6 className=' text-success' style={{letterSpacing:'7px'}}>LIBRARY</h6>
            <h4>Please Sign In First</h4>
            <button onClick={handleSignIn} className="btn btn-info mt-3 mb-3 p-3"><FontAwesomeIcon icon={faGoogle} style={{color: 'yellow',marginRight:'5px',fontSize:'17px'}}></FontAwesomeIcon>Continue With Google</button>
            <button onClick={handleFbSignIn} className="btn btn-info mt-3 ml-1 mb-5 p-3" ><FontAwesomeIcon icon={faFacebookF} style={{color: 'blue',marginRight:'5px',fontSize:'17px'}}/>Continue With Facebook</button>
            </div>
        </div>
    );
};

export default LogIn;