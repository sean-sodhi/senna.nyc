import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutSection from '../components/AboutSection';
import WorkSection from '../components/WorkSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';

// Dynamically import the component that uses GSAP
const HeroSection = dynamic(() => import('../components/HeroSection'), {
  ssr: false,
});

gsap.registerPlugin(ScrollTrigger);

const MainWrapper = styled.div`
  width:100%;
  overflow:hidden;
  background-color: ${({theme})=>theme.colors.secondary};
  color: ${({theme})=>theme.colors.primary};
`;

const Spacer = styled.div`
  height:100vh;
  width:100%;
`;

export default function HomePage() {
  const mainRef = useRef(null);

  useEffect(() => {
    // Example initial GSAP animations
    gsap.fromTo(mainRef.current, {autoAlpha:0}, {autoAlpha:1, duration:2, delay:0.5});
  }, []);

  return (
    <MainWrapper ref={mainRef}>
      <HeroSection/>
      <AboutSection/>
      <WorkSection/>
      <ContactSection/>
      <Footer/>
    </MainWrapper>
  );
}
