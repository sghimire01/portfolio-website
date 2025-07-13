import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png"

// Modern font family
const fontFamily = `"Inter", "Segoe UI", "Roboto", "Arial", sans-serif`;

const Nav = styled.nav<{ scrolled: boolean }>`
  width: 100vw;
  left: 0;
  background: ${({ scrolled }) =>
    scrolled
      ? "rgba(16,16,16,0.97)"
      : "linear-gradient(180deg, rgba(16,16,16,0.2) 85%, rgba(16,16,16,0) 100%)"};
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 100;
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 2px 10px rgba(0,0,0,0.10)" : "none"};
  transition: background 0.36s cubic-bezier(.4,0,.2,1), box-shadow 0.36s cubic-bezier(.4,0,.2,1);
  font-family: ${fontFamily};
`;

const NavContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 1.2vw;
`;



const Logo = styled.a`
  font-size: 1.58rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  letter-spacing: 2px;
  margin-left: 12px; /* Pull logo left */
  font-family: ${fontFamily};
  text-shadow: 0 1px 4px rgba(20,20,30,0.05);
  transition: color 0.18s;
  &:hover {
    color: #22d3ee;
  }
`;


const NavLinks = styled.ul<{ open: boolean }>`
  display: flex;
  gap: 2.1rem;
  list-style: none;
  align-items: center;
  margin-left: auto;

  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    top: 60px;
    width: 100vw;
    height: calc(100vh - 60px);
    background: #18181b;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    justify-content: flex-start;
    padding-top: 2.5rem;
    transition: all 0.3s;
    transform: ${({ open }) =>
      open ? "translateY(0%)" : "translateY(-120%)"};
    opacity: ${({ open }) => (open ? 1 : 0)};
    pointer-events: ${({ open }) => (open ? "auto" : "none")};
    z-index: 99;
    margin-left: 0;
    padding-right: 0;
  }
`;

const NavLink = styled.a`
  font-size: 1.10rem;
  font-weight: 400;
  color: #f3f3f6;
  text-decoration: none;
  cursor: pointer;
  font-family: ${fontFamily};
  padding: 0.24rem 0.6rem;
  border-radius: 7px;
  transition: color 0.18s, background 0.18s;
  text-shadow: 0 1px 6px rgba(24,24,30,0.06);

  &:hover {
    color: #22d3ee;
    background: rgba(34,211,238,0.11);
  }
`;

const Hamburger = styled.div<{ open: boolean }>`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 101;
  margin-left: 12px;
  span {
    height: 3px;
    width: 28px;
    background: #fff;
    margin: 4px 0;
    border-radius: 2px;
    transition: 0.4s;
  }
  ${({ open }) =>
    open &&
    `
      span:nth-child(1) { transform: rotate(45deg) translateY(9px); }
      span:nth-child(2) { opacity: 0; }
      span:nth-child(3) { transform: rotate(-45deg) translateY(-9px); }
    `}
  @media (max-width: 800px) {
    display: flex;
  }
`;

// Component
const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Listen to scroll for background
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close nav menu on link click (mobile)
  const handleNavClick = () => setMenuOpen(false);

  const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  setMenuOpen(false);
};


  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
      <Logo href="#home" onClick={e => { e.preventDefault(); scrollToSection("home"); }}>
        <img src={logo} alt="Logo" style={{ height: 36, display: 'block' }} />
      </Logo>
        <Hamburger open={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <NavLinks open={menuOpen}>
        <li>
          <NavLink href="#home" onClick={e => { e.preventDefault(); scrollToSection("home"); }}>Home</NavLink>
        </li>
        <li>
          <NavLink href="#projects" onClick={e => { e.preventDefault(); scrollToSection("projects"); }}>Projects</NavLink>
        </li>
        <li>
          <NavLink href="#about" onClick={e => { e.preventDefault(); scrollToSection("about"); }}>About</NavLink>
        </li>
      </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
