import React, { useContext, useState } from 'react';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext)
  const [isSignIn,setIsSignIn] = useState(true)
  console.log('email',loggedInUser.email);
  
  const handleSignOut = ()=>{
    setLoggedInUser({})
  }
    return (
        <div className='bg-light'>
           <Navbar bg="" expand="lg" className='d-flex justify-content-md-between'>
  <Navbar.Brand href="#home" className='ml-3 mt-3'><h5 className='text-dark'>PROGRAMMER</h5><h5 className=' text-success' style={{letterSpacing:'10px'}}>LIBRARY</h5></Navbar.Brand>
  <div>
  <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white" />
  <Navbar.Collapse id="basic-navbar-nav" className="text-white">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/home" className="text-secondary">Home</Nav.Link>
      <Nav.Link as={Link} to="/orders" className="text-secondary">Orders</Nav.Link>
      <Nav.Link as={Link} to="/admin" className="text-secondary">admin</Nav.Link>
      {
        isSignIn ?<Nav.Link as={Link} to="/signin" className="text-secondary">Sign In</Nav.Link>:<div><p>{loggedInUser.name}</p>
        <button onClick={handleSignOut}>Sign Out</button></div>
      }
      
      
    </Nav>

  </Navbar.Collapse>
  </div>
</Navbar>
        </div>
    );
};

export default Header;