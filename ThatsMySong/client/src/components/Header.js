import React, { useState } from 'react';
import { NavLink as RRNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { logout } from '../modules/authManager';

export default function Header({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={RRNavLink} to="/">That's My Song</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            { /* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn &&
              <NavbarBrand>
                <NavLink tag={RRNavLink} to="/">Home</NavLink>
             </NavbarBrand>
            }
          </Nav>
          <Nav className="mr-auto" navbar>
            { /* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn &&
              <NavbarBrand>
                <NavLink tag={RRNavLink} to="/samples">Samples</NavLink>
              </NavbarBrand>
              }
          </Nav>
          <Nav className="mr-auto" navbar>
            { /* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn &&
              <NavbarBrand>
                <NavLink tag={RRNavLink} to="/hiphopsongs">Hip Hop Songs</NavLink>
              </NavbarBrand>
              }
          </Nav>
          <Nav className="mr-auto" navbar>
            { /* When isLoggedIn === true, we will render the Home link */}
            {isLoggedIn &&
              <NavbarBrand>
                <NavLink tag={RRNavLink} to="/sampledsongs">Sampled Songs</NavLink>
              </NavbarBrand>
              }
          </Nav>
          <Nav navbar>
            {isLoggedIn &&
              <>
                <NavbarBrand>
                  {/* <a aria-current="page" className="nav-link"
                    style={{ cursor: "pointer" }} onClick={logout}>Logout</a> */}
                    <NavLink onClick={logout} tag={RRNavLink} to ="/login">Logout</NavLink>
                </NavbarBrand>
               
              </>
            }
            {!isLoggedIn &&
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/register">Register</NavLink>
                </NavItem>
              </>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
            