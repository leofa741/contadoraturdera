import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link, NavLink } from 'react-router-dom';

import {IoReorderThreeOutline} from "react-icons/io5";

export const NavBar = () => {




  return (

    <Navbar className="nav-color"  collapseOnSelect={true} expand="lg" fixed="top"  >
 
      <Container>
        <Navbar.Brand className="nav-logo" to="/">MG & Asoc</Navbar.Brand>
        <Navbar.Toggle  style={{textDecoration:"none"}}> <IoReorderThreeOutline style={{color: 'white',fontSize: '2rem',}}/></Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink  className="nav-link" to="/home" >Home</NavLink >
          <NavLink  className="nav-link" to="/about" >About</NavLink >
         
            <NavDropdown  title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item className="nav-link-drop" href="#action/3.1"  >Action</NavDropdown.Item>
              <NavDropdown.Item className="nav-link-drop" href="#action/3.2"  >Another action </NavDropdown.Item>
              <NavDropdown.Item className="nav-link-drop" href="#action/3.3" >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-link" href="#action/3.4"> Separated link  </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  className="nav-link" href="#link">contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  
  )
}
