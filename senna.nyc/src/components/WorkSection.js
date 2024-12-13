import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

const Wrapper = styled.section`
  width:100%;
  min-height:100vh;
  background:#000;
  padding:100px 20px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

const Title = styled(motion.h2)`
  font-size:clamp(2rem,5vw,4rem);
  color:#fff;
  margin-bottom:50px;
  text-align:center;
`;

const Grid = styled(motion.div)`
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(300px,1fr));
  gap:30px;
  width:100%;
  max-width:1200px;
`;

const Card = styled(motion.div)`
  background:#111;
  border:1px solid #333;
  border-radius:10px;
  overflow:hidden;
  position:relative;
  cursor:pointer;
  &:hover .overlay {
    opacity:1;
  }
`;

const ImageWrapper = styled.div`
  width:100%;
  height:200px;
  background:#222;
`;

const Overlay = styled.div`
  position:absolute;
  top:0; left:0; right:0; bottom:0;
  background:rgba(0,0,0,0.7);
  opacity:0;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:20px;
  transition: all 0.3s ease;
`;

const OverlayText = styled.div`
  color:#fff;
  text-align:center;
  font-size:clamp(1rem,2vw,1.5rem);
`;

const Content = styled.div`
  padding:20px;
  color:#ccc;
`;

const cardVariants = {
  initial:{opacity:0,y:50},
  animate:{opacity:1,y:0,transition:{duration:0.5}}
};

export default function WorkSection(){
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
        My Work
      </Title>
      <Grid
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}
      >
        {Array.from({length:8}).map((_,i)=>
          <Card key={i} variants={cardVariants}>
            <ImageWrapper>
              {/* Placeholder for project image */}
            </ImageWrapper>
            <Overlay className="overlay">
              <OverlayText>Project {i+1}<br/>Lorem ipsum dolor sit amet.</OverlayText>
            </Overlay>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales elit at dictum pretium. 
            </Content>
          </Card>
        )}
      </Grid>
    </Wrapper>
  );
}
