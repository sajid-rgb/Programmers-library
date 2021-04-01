import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="text-center d-flex flex-column justify-content-center align-items-center  mt-5 ">
            
            <form action="" className='d-flex flex-column justify-content-center align-items-center rounded bg-light w-75' style={{height:'80vh'}}>
            <h6 className='text-dark mt-5'>PROGRAMMER</h6>
            <h6 className=' text-success' style={{letterSpacing:'7px'}}>LIBRARY</h6>
            <h4 className='mt-3'>Create Account Here</h4>
            <input type="text" className="form-control  mt-3 w-75" placeholder="Enter Full Name"/>
                <input type="text" className="form-control mt-2  w-75" placeholder="Enter email"/>
                <input type="password" className="form-control mt-2 w-75" placeholder="Enter Password"/>
                <input type="password" className="form-control mt-2 w-75" placeholder="Confirm Password"/>
                <div className="d-flex flex-md-row flex-column mt-md-3 mt-0">
                <button className='btn btn-primary mt-2 mb-3'>Sign Up</button>
                <Link className='mt-md-3 mt-0 ml-3'>Remember Me</Link>
                </div>
                <Link to='/signin'>I have all ready an account</Link>
            </form>
            <div className="d-flex flex-md-row flex-column">
            <button  className="btn btn-info mt-3">Continue With Google</button>
            <button  className="btn btn-info mt-3 ml-2">Continue With Facebook</button>
            </div>
            {/* <div className="d-flex flex-md-row flex-column">
            <button  className="btn btn-info mt-3">Continue With Instragram</button>
            <button className="btn btn-info mt-3 ml-2 mb-4 mb-md-0">Continue With Twitter</button>
            </div> */}
        </div>
    );
};

export default SignUp;