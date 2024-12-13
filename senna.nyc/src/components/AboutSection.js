import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';

const Wrapper = styled.section`
  width:100%;
  min-height:100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:100px 20px;
  flex-direction:column;
  background:linear-gradient(to bottom, #111 30%, #000 100%);
`;

const Container = styled.div`
  max-width:800px;
  text-align:center;
  color:#ffffff;
`;

const Title = styled(motion.h2)`
  font-size:clamp(2rem, 5vw,4rem);
  margin-bottom:20px;
`;

const Subtitle = styled(motion.p)`
  font-size:clamp(1rem,2vw,1.5rem);
  line-height:1.5;
  margin-bottom:40px;
  color:#ccc;
`;

const Content = styled(motion.div)`
  font-size:clamp(0.9rem, 1.8vw, 1.2rem);
  line-height:1.7;
  color:#aaa;
`;

export default function AboutSection(){
  const ref = useRef(null);
  const inView = useInView(ref, {margin:'-100px'});

  useEffect(() => {
    if(inView){
      gsap.to(ref.current, {autoAlpha:1, duration:1});
    }
  }, [inView]);

  return (
    <Wrapper ref={ref} style={{opacity:0}}>
      <Container>
        <Title
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1,ease:'easeOut'}}
          viewport={{once:true}}
        >
          About Me
        </Title>
        <Subtitle
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1,delay:0.2,ease:'easeOut'}}
          viewport={{once:true}}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Subtitle>
        <Content
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1,delay:0.4,ease:'easeOut'}}
          viewport={{once:true}}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor sapien nulla, in egestas massa ultricies id. Vivamus finibus magna at fermentum posuere. Curabitur eleifend sed diam vitae vehicula. Aliquam erat volutpat. In ornare metus id ex scelerisque rutrum. Cras non odio sed neque sollicitudin lobortis a eget risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisis mauris et magna tempus, et rhoncus velit euismod.
          <br/><br/>
          Morbi mollis vehicula lacus vitae gravida. Fusce turpis magna, tincidunt vel mi in, accumsan viverra lorem. Suspendisse convallis malesuada felis, ac lacinia tortor euismod sit amet. Duis bibendum lacus ut sapien faucibus, non consequat nisi luctus. Maecenas mollis dui nec velit sollicitudin bibendum. Integer scelerisque, libero vel ultricies dictum, elit purus sodales quam, ullamcorper placerat massa erat ut urna.
          <br/><br/>
          Vivamus faucibus volutpat diam, in suscipit lectus efficitur vitae. Pellentesque varius, arcu a varius ultricies, metus neque tristique ligula, et placerat elit sapien sed erat.
        </Content>
      </Container>
    </Wrapper>
  );
}
