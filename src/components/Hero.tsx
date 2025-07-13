import React, { MouseEvent } from "react";
import styled, { keyframes } from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import bgImg from "../assets/head-bg.gif";

/*  ─────────────────────────  HELPERS  ──────────────────────────── */

const HEADER_HEIGHT = "72px";           // -- keeps nav from overlapping
const bounce = keyframes`
  0%,20%,50%,80%,100%{transform:translate(-50%,0);}
  40%{transform:translate(-50%,-10px);}
  60%{transform:translate(-50%,-6px);}
`;

/* custom smooth-scroll identical to NavBar.tsx */
const NAV_HEIGHT = 60;          // keep in sync with NavBar
const SCROLL_DURATION = 670;    // ms

const smoothScrollTo = (target: HTMLElement) => {
  const viewportH = window.innerHeight;
  const elementH  = target.offsetHeight;

  const startY    = window.pageYOffset;
  const targetY   =
    elementH < viewportH - NAV_HEIGHT
      ? target.getBoundingClientRect().top +
        startY -
        (viewportH - elementH) / 2
      : target.getBoundingClientRect().top + startY - NAV_HEIGHT;

  const distance  = targetY - startY;
  let   startTime: number | null = null;

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const step = (ts: number) => {
    if (startTime === null) startTime = ts;
    const elapsed  = ts - startTime;
    const progress = Math.min(elapsed / SCROLL_DURATION, 1);
    const eased    = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);
    if (elapsed < SCROLL_DURATION) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};


/*  ─────────────────────────  LAYOUT  ───────────────────────────── */

const HeroSection = styled.section`
  /* full-bleed hero that always centres its children */
  height: 100vh;
  min-height: 100dvh;                 /* keeps things sane on very short screens */
  width: 100%;
  padding: 0 16px;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;
  background: url(${bgImg}) center/cover no-repeat fixed;

  &::before{                         /* legacy dark overlay */
    content: "";
    position: absolute; inset: 0;
    background: rgba(23,23,24,.8);
    pointer-events:none;
  }
  > *{ position:relative; z-index:1; }

  /* mobile tweaks */
  @media (max-width: 768px){
    height: calc(100dvh - ${HEADER_HEIGHT});
    padding: 0 12px;
    background-attachment:scroll;    /* fixes Safari iOS jerkiness */
    gap: 1.5rem;                     /* breathing room between title/sub/button */
  }
`;

/*  ─────────────────────────  CONTROLS  ─────────────────────────── */

const ScrollDownBtn = styled.button`
  position: absolute;
  left: 50%; bottom: 32px;
  transform: translateX(-50%);
  width: 38px; height: 38px;
  padding: 4px;
  border: 2px solid rgba(255,255,255,.7);
  border-radius: 50%;
  background: none; color: inherit;
  cursor: pointer;
  animation: ${bounce} 2s infinite;

  @media (hover:hover){ &:hover{ animation-play-state:paused; } }
  @media (max-width:768px){ display:none; }   /* arrow hidden on phones */
`;

/*  ─────────────────────────  TYPOGRAPHY  ───────────────────────── */

const HeroTitle = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 900;
  letter-spacing: 2px;
  line-height: 1.05;
  margin: 0;
  font-size: 5rem;                   /* desktop */

  @media (max-width:992px){ font-size:3rem; }
  @media (max-width:768px){ font-size:2.1rem; }
  @media (max-width:480px){ font-size:1.6rem; }
`;

const HeroSubtitle = styled.p`
  font-family: "Lato", sans-serif;
  font-weight: 400;
  color: #b6b6d8;
  max-width: 620px;
  margin: 0 auto;
  font-size: 1.35rem;

  @media (max-width:992px){ font-size:1.1rem; }
`;

const HeroButton = styled.a`
  display: inline-block;
  margin-top: 0.75rem;
  padding: 14px 34px;
  font-size: 1.13rem;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  background: linear-gradient(90deg,#7f5af0 40%,#2cb67d 100%);
  border-radius: 2rem;
  box-shadow: 0 6px 18px rgba(0,0,0,.07);
  transition: transform .18s, box-shadow .18s;

  &:hover,
  &:focus{
    transform: translateY(-3px) scale(1.04);
    box-shadow: 0 10px 28px rgba(127,90,240,.18);
    background: linear-gradient(90deg,#2cb67d 0%,#7f5af0 60%);
  }
`;

/*  ─────────────────────────  COMPONENT  ───────────────────────── */

const Hero: React.FC = () => {
  const scrollNext = (e: MouseEvent) => {
    e.preventDefault();
    const about = document.getElementById("about");
    if (about) smoothScrollTo(about);
  };


  return (
    <HeroSection id="home">
      <HeroTitle>
        <Typewriter
          words={["SAMYAK GHIMIRE"]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={90}
          deleteSpeed={90}
          delaySpeed={1000}
        />
      </HeroTitle>

      <motion.div
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ delay:1.8, duration:.8 }}
      >
        <HeroSubtitle>
          Building elegant solutions to complex problems.<br/>
          Software Engineering • Data Engineering • AI / ML
        </HeroSubtitle>

        <HeroButton
          href="/Sam_Ghimire_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </HeroButton>
      </motion.div>

      <ScrollDownBtn aria-label="Scroll to next section" onClick={scrollNext}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 16.25a1 1 0 01-.7-.29l-6.46-6.46a1 1 0 011.42-1.42L12 13.79l5.74-5.71a1 1 0 111.42 1.42l-6.46 6.46a1 1 0 01-.7.29z"/>
        </svg>
      </ScrollDownBtn>
    </HeroSection>
  );
};

export default Hero;
