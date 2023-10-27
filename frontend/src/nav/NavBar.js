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

function NavBar({data, currentUser}) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggle2 = () => {
      setIsLoggedIn(!isLoggedIn);
      console.log(isLoggedIn + "isLoggedIn")
    }

    return (
      <div>
      <Navbar horizontal="end" color="secondary" >
        <NavbarBrand href="/" >Jobly</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen}  navbar >
          <Nav className="me-auto" navbar >
            <NavLink exact to="/login" onClick={toggle2}>Login</NavLink>
            <NavLink exact to="/signup"> Sign Up </NavLink>
            <NavLink exact to="/" onClick={toggle2}> Log Out </NavLink>
            <NavLink exact to="/profile" onClick={toggle2}> Profile </NavLink>
            <NavLink exact to="/company" > Companies </NavLink>
          
          </Nav>
        </Collapse>
        <p>{toggle2}</p>
      </Navbar>
    </div>
  
    );
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
