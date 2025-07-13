import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

/* —————  CONSTANTS  ————— */
const NAV_HEIGHT = 60;                  // keep this in sync with <NavContainer/>
const SCROLL_DURATION = 670;

/* —————  STYLES  ————— */
const Nav = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
  background: ${({ scrolled }) =>
    scrolled
      ? "rgba(16, 16, 16, 0.97)"
      : "linear-gradient(180deg, rgba(16,16,16,0.2) 85%, rgba(16,16,16,0) 100%)"};
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 2px 10px rgba(0,0,0,0.10)" : "none"};
  color: #fff;
  transition: background 0.36s cubic-bezier(.4,0,.2,1),
              box-shadow 0.36s cubic-bezier(.4,0,.2,1);
  font-family: "Lato", sans-serif;
`;

const NavContainer = styled.div`
  height: ${NAV_HEIGHT}px;
  width: 100%;
  padding: 0 1.2vw;
  display: flex;
  align-items: center;
`;

const Logo = styled.a`
  display: block;
  margin-left: 12px;
  img { height: 36px; display: block; }
  text-decoration: none;
  transition: opacity 0.18s;
  &:hover { opacity: .8; }
`;

const NavLinks = styled.ul<{ open: boolean }>`
  display: flex;
  align-items: center;
  gap: 2.1rem;
  list-style: none;
  margin-left: auto;

  @media (max-width: 800px) {
    position: fixed;
    top: 0; right: 0;
    height: 100vh;
    width: 85vw;
    max-width: 340px;
    padding: 48px 28px 0;
    margin: 0;
    flex-direction: column;
    background: #18181b;
    box-shadow: -2px 0 32px rgba(0,0,0,0.18);
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    opacity: ${({ open }) => (open ? 1 : 0)};
    pointer-events: ${({ open }) => (open ? "auto" : "none")};
    transition: transform 0.36s cubic-bezier(.4,0,.2,1),
                opacity 0.2s;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 26px; right: 22px;
  border: none;
  background: none;
  font-size: 2rem;
  color: #e3e3e3;
  cursor: pointer;
  padding: 4px;
  @media (min-width: 801px) { display: none; }
`;

const NavLink = styled.a<{ active: boolean }>`
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  color: ${({ active }) => (active ? "#22d3ee" : "#f3f3f6")};
  background: ${({ active }) => (active ? "rgba(34,211,238,0.15)" : "transparent")};
  text-decoration: none;
  padding: 0.24rem 0.6rem;
  border-radius: 7px;
  transition: color 0.18s, background 0.18s;
  text-shadow: 0 1px 6px rgba(24,24,30,0.06);

  &:hover {
    color: #22d3ee;
    background: rgba(34,211,238,0.11);
  }
`;

const Hamburger = styled.div`
  display: none;
  position: absolute;
  top: 10px; right: 18px;
  width: 44px; height: 44px;
  cursor: pointer;
  z-index: 200;
  @media (max-width: 800px) { display: flex; }

  span {
    position: absolute;
    left: 50%;
    width: 28px; height: 3px;
    background: #fff;
    border-radius: 2px;
    transform: translateX(-50%);
    transition: 0.4s;
  }
  span:nth-child(1) { top: 14px; }
  span:nth-child(2) { top: 21px; }
  span:nth-child(3) { top: 28px; }
`;

/* —————  COMPONENT  ————— */
const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* background toggle */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* — custom, slightly slower scroll that centres short sections — */
  const smoothScroll = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const viewportH = window.innerHeight;
    const elementH = el.offsetHeight;

    // Decide where the top of the viewport should land
    const targetY =
      elementH < viewportH - NAV_HEIGHT
        ? el.getBoundingClientRect().top +
          window.pageYOffset -
          (viewportH - elementH) / 2
        : el.getBoundingClientRect().top + window.pageYOffset - NAV_HEIGHT;

    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (ts: number) => {
      if (startTime === null) startTime = ts;
      const elapsed = ts - startTime;
      const progress = Math.min(elapsed / SCROLL_DURATION, 1);
      const eased = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * eased);
      if (elapsed < SCROLL_DURATION) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
    setMenuOpen(false);
  }, []);

  /* section-in-view observer (unchanged) */
  useEffect(() => {
    const ids = ["home", "projects", "about"];
    const sections = ids
      .map(id => document.getElementById(id))
      .filter((s): s is HTMLElement => Boolean(s));

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      {
        threshold: 0.4,
        rootMargin: `-${NAV_HEIGHT}px 0px 0px 0px`
      }
    );

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <Nav scrolled={scrolled}>
      <NavContainer>
        <Logo href="#home" onClick={e => { e.preventDefault(); smoothScroll("home"); }}>
          <img src={logo} alt="Logo" />
        </Logo>

        <Hamburger
          style={{ display: menuOpen ? "none" : undefined }}
          onClick={() => setMenuOpen(true)}
        >
          <span /><span /><span />
        </Hamburger>

        <NavLinks open={menuOpen}>
          <CloseButton onClick={() => setMenuOpen(false)} aria-label="Close menu">
            &times;
          </CloseButton>

          <li><NavLink href="#home"     active={activeSection === "home"}     onClick={e => { e.preventDefault(); smoothScroll("home");     }}>Home</NavLink></li>
          <li><NavLink href="#projects" active={activeSection === "projects"} onClick={e => { e.preventDefault(); smoothScroll("projects"); }}>Projects</NavLink></li>
          <li><NavLink href="#about"    active={activeSection === "about"}    onClick={e => { e.preventDefault(); smoothScroll("about");    }}>About</NavLink></li>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
