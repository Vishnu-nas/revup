import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav, NavDropdown,Container} from 'react-bootstrap';
import Logo from '../images/logo.png';
function NavBar() {
  const [scroll, setScroll] = useState(false);
  useEffect(()=>{
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
  },[])
  return (
  <div className={"menuNav " + (scroll ? "stickyMenu animated fadeInDown" : "staticMenu")}>
      <Navbar expand="lg" className="navBar">
        <Container>
            <Navbar.Brand href="#home" className="revupLogo">
                <img src={Logo} alt="Logo Revup" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto1">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/shop">Shop</Nav.Link>
                {/* <NavDropdown title="Services" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link href="#Works">How it Works</Nav.Link>
                <Nav.Link href="#FAQ">FAQ's</Nav.Link>
                <Nav.Link href="/contact-us">Contact</Nav.Link>
                <Nav.Link href="/login" className='loginRup menuReg'>Login</Nav.Link>
                <Nav.Link href="/create-account" className='signRup menuReg'>Sign Up</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  </div>
  );
}

export default NavBar;
