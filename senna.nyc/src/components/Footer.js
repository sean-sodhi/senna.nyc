import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Wrapper = styled.footer`
  width:100%;
  background:#000;
  padding:40px 20px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  color:#888;
  text-align:center;
`;

const Icons = styled.div`
  display:flex;
  gap:20px;
  margin-bottom:20px;
`;

const IconLink = styled.a`
  color:#888;
  font-size:1.5rem;
  transition:color 0.3s;
  &:hover{
    color:#09f;
  }
`;

const Copyright = styled.p`
  font-size:0.9rem;
`;

export default function Footer(){
  return (
    <Wrapper
      as={motion.footer}
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      transition={{duration:1}}
    >
      <Icons>
        <IconLink href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub}/>
        </IconLink>
        <IconLink href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin}/>
        </IconLink>
        <IconLink href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter}/>
        </IconLink>
      </Icons>
      <motion.div
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:1, delay:0.3}}
      >
        <p>Made with ♥ by [Your Name]</p>
      </motion.div>
      <motion.div
        initial={{opacity:0,y:20}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:1, delay:0.6}}
      >
        <Copyright>
          © {new Date().getFullYear()} All rights reserved.
        </Copyright>
      </motion.div>
    </Wrapper>
  );
}
