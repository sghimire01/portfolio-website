import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;

const Logo = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
`;

const Menu = styled.ul`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: #fff;
  &:hover {
    color: #60a5fa;
  }
`;

const NavBar: React.FC = () => (
  <Nav id="navbar">
    <Logo>My Portfolio</Logo>
    <Menu>
      <li><NavLink href="#projects">Projects</NavLink></li>
    </Menu>
  </Nav>
);

export default NavBar;
