import React from 'react';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
           <Navbar bg="" expand="lg" className='d-flex justify-content-md-between'>
  <Navbar.Brand href="#home" className='ml-3 mt-3'><h6 className='text-dark'>PROGRAMMER</h6><h5 className=' text-success'>LIBRARY</h5></Navbar.Brand>
  <div>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/orders">Orders</Nav.Link>
      <Nav.Link href="/admin">admin</Nav.Link>
      <Nav.Link href="/signin">Sign In</Nav.Link>
    </Nav>

  </Navbar.Collapse>
  </div>
</Navbar>
        </div>
    );
};

export default Header;