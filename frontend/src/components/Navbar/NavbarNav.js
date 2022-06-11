import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { navItem, navSignupLogin } from '../../data';
import Logo from '../../images/luxury-living-logo.png';
import styles from './NavbarNav.module.css';

export default function NavbarNav() {
  const activeStyle = {
    color: '#251d58',
  };

  return (
    <Navbar className={styles.navbar__nav} expand="lg">
      <Container>
        <Link to="/" className={styles.nav__logo} href="#home">
          <img src={Logo} alt="luxury-living-logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItem.map((item) => (
              <NavLink
                to={item.path}
                className="nav-link px-3 mx-2"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                key={item.id}
              >
                {item.title}
              </NavLink>
            ))}
            {navSignupLogin.map((item) => (
              <NavLink
                to={item.path}
                className="nav-link px-3 mx-2 mx-2 btn"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                key={item.id}
              >
                {item.title}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
