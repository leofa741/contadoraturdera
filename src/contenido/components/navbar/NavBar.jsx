import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link, NavLink,Navigate } from 'react-router-dom';

import {IoReorderThreeOutline} from "react-icons/io5";

import './navbar.css';

export const NavBar = () => {

  //contraer menu
  const handleCollapse = () => {
    const nav = document.querySelector('.auto');
    nav.classList.remove('show');
  }




  return (

    <Navbar className="nav-color"  collapseOnSelect={true} expand="lg" fixed="top"  >
 
      <Container>
        <Navbar.Brand className="nav-logo" to="/">MG & Asoc</Navbar.Brand>
        <Navbar.Toggle  style={{textDecoration:"none"}}> <IoReorderThreeOutline style={{color: 'white',fontSize: '2rem',}}/></Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav" className="auto">
          <Nav className="me-auto">
          <NavLink  className="nav-link " onClick={handleCollapse}  to="/home" >Home</NavLink >
          <NavLink  className="nav-link" onClick={handleCollapse} to="/about" >About</NavLink >
          <NavLink  className="nav-link" onClick={handleCollapse} to="/contact" >Contact</NavLink >
          
          <div className="dropdown" >
  <button >Servicios</button>
  <div className="dropdown-content">
  <NavLink  className="nav-link-drop" onClick={handleCollapse} to="/contables" > <a >Contables</a></NavLink >
  <NavLink  className="nav-link-drop" onClick={handleCollapse} to="/impositivos" > <a >Impositivos</a></NavLink >
  <NavLink  className="nav-link-drop" onClick={handleCollapse} to="/societarios" > <a >Societarios</a></NavLink >
  <NavLink  className="nav-link-drop" onClick={handleCollapse} to="/laborales" > <a >Laborales</a></NavLink >
  <NavLink  className="nav-link-drop" onClick={handleCollapse} to="/generales" > <a >Generales</a></NavLink >
  </div>
</div>


            {/* <NavDropdown  title="Servicios" id="basic-nav-dropdown" >
            <div className="dropdown-content">
             <a><NavLink  className="nav-link-drop" to="/contables" >Contables</NavLink ></a> 
             <a> <NavLink  className="nav-link-drop" to="/impositivos" >Impositivos</NavLink ></a>
             <a> <NavLink  className="nav-link-drop" to="/societarios" >Societarios</NavLink ></a>
             <a> <NavLink  className="nav-link-drop" to="/laborales" >Laborales</NavLink ></a>
             <a> <NavLink  className="nav-link-drop" to="/generales" >Generales</NavLink ></a>
            
              
           
              <NavDropdown.Divider />
              <a> <NavLink  className="nav-link-drop" to="/contact"> Contacto  </NavLink ></a>
              </div>
            </NavDropdown> */}

          
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  
  )
}
