import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link, NavLink,Navigate } from 'react-router-dom';

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
              <NavLink  className="nav-link-drop" to="/contact" >Contact</NavLink >
              <NavLink  className="nav-link-drop" to="/contact" >Contact</NavLink >
              <NavLink  className="nav-link-drop" to="/contact" >Contact</NavLink >
              <NavLink  className="nav-link-drop" to="/contact" >Contact</NavLink >
              <NavLink  className="nav-link-drop" to="/contact" >Contact</NavLink >
            
              
           
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-link" href="#action/3.4"> Separated link  </NavDropdown.Item>
            </NavDropdown>
              <NavLink  className="nav-link" to="/contact" >Contact</NavLink >
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  
  )
}
