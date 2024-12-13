import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Wrapper = styled.section`
  width:100%;
  min-height:100vh;
  background:#111;
  padding:100px 20px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

const Title = styled(motion.h2)`
  font-size:clamp(2rem,5vw,4rem);
  color:#fff;
  margin-bottom:40px;
`;

const FormWrapper = styled(motion.form)`
  max-width:500px;
  width:100%;
  display:flex;
  flex-direction:column;
  gap:20px;
`;

const Input = styled.input`
  width:100%;
  padding:15px;
  border-radius:5px;
  border:1px solid #333;
  background:#000;
  color:#fff;
  font-size:1rem;
  outline:none;
  &:focus {
    border-color:#09f;
  }
`;

const Textarea = styled.textarea`
  width:100%;
  padding:15px;
  border-radius:5px;
  border:1px solid #333;
  background:#000;
  color:#fff;
  font-size:1rem;
  height:150px;
  outline:none;
  &:focus {
    border-color:#09f;
  }
`;

const Submit = styled.button`
  background:#09f;
  border:none;
  padding:15px;
  font-size:1rem;
  border-radius:5px;
  cursor:pointer;
  color:#000;
  font-weight:bold;
  transition:background 0.3s ease;
  &:hover {
    background:#0af;
  }
`;

export default function ContactSection(){
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(ref.current, {autoAlpha:0}, {autoAlpha:1, duration:1, scrollTrigger:{
      trigger: ref.current,
      start:"top 80%"
    }});
  },[]);

  return (
    <Wrapper ref={ref} style={{opacity:0}}>
      <Title
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
      >
        Contact Me
      </Title>
      <FormWrapper
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        viewport={{once:true}}
        onSubmit={(e)=>{e.preventDefault(); alert('Form Submitted!');}}
      >
        <Input type="text" placeholder="Your Name"/>
        <Input type="email" placeholder="Your Email"/>
        <Textarea placeholder="Your Message"></Textarea>
        <Submit type="submit">Send</Submit>
      </FormWrapper>
    </Wrapper>
  );
}
