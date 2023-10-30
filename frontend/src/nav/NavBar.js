import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
// import "./NavBar.css";
import {useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText, Button  } from "reactstrap";

function NavBar({data, currentUser, logout}) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  
    console.log(isLoggedIn)
    console.log(currentUser)
  
    const navIfLoggedIn = () => {
      return(
      <div>
        <Navbar horizontal="end" color="secondary" >
          <NavbarBrand href="/" >Jobly</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen}  navbar >
            <Nav className="me-auto" navbar >
              <NavLink exact to="/profile"> Update Profile </NavLink>
              <NavLink exact to="/companies" > Companies </NavLink>
              <NavLink exact to="/jobs" > Jobs </NavLink> 
              <NavLink exact to="/" onClick={logout}> Log Out </NavLink>         
            </Nav>
          </Collapse>
          <p></p>
        </Navbar>
      </div>
      )
    }

    const navIfNotLoggedIn = () => {
      return(
      <div>
         <Navbar horizontal="end" color="secondary" >
          <NavbarBrand href="/" >Jobly</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen}  navbar >
           <Nav className="me-auto" navbar >
             <NavLink exact to="/login" >Login</NavLink>
             <NavLink exact to="/signup"> Sign Up </NavLink>
           </Nav>
           </Collapse>
           <p></p>
         </Navbar>
      </div>
      )
    }
    
    return (
      <div>
        {currentUser ? navIfLoggedIn() : navIfNotLoggedIn()}
      </div>
    )
  }
  

export default NavBar;

//Below is for future use to see examples of dropdown menus if needed.
  {/* <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
