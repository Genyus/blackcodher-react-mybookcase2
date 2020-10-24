import React from 'react'
// import { Link } from 'react-router-dom'
import "../App.css"
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

function Header() {
    return(
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">The Bookcase</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="mr-auto">
                <Nav.Link href="/mybookcase">Home</Nav.Link>
                <Nav.Link href="/pages/About">About</Nav.Link>
                <Nav.Link href="/pages/Search">Search</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Food</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Subject2</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Subject3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            </Navbar.Collapse>
            <Nav>
            <Nav.Item><div id="shelf"></div></Nav.Item>
            </Nav>
        </Navbar>

    )
}

export default Header
/* <React.Fragment>
<div className="header">
            <h1>My Bookcase</h1>
            <Link to='/' className="bookLink">Home</Link>
            <Link to="/pages/About" className="bookLink">About</Link>
            <Link to='/pages/Search' className="bookLink">Search</Link>
            <Link to="/bookcase" className="bookLink">Bookcase</Link>
            <br></br>
            </div>
        </React.Fragment>
 */