import React, { Suspense, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion, useAnimation } from 'framer-motion';

const Section = styled.section`
  position:relative;
  width:100%;
  height:100vh;
  overflow:hidden;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  background: radial-gradient(circle at center, #111 0%, #000 100%);
`;

const OverlayText = styled(motion.div)`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  text-align:center;
  color:#fff;
  z-index:10;
  pointer-events:none;
  font-weight:700;
  font-size:clamp(2rem, 5vw, 5rem);
  line-height:1.2;
`;

const SubText = styled(motion.div)`
  margin-top:20px;
  font-size:clamp(1rem, 2vw, 2rem);
  font-weight:300;
  color:#ccc;
`;

function RotatingMesh({ position, args, color }) {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.001;
  });
  return (
    <mesh position={position} ref={mesh}>
      <icosahedronGeometry args={args}/>
      <meshStandardMaterial color={color} wireframe/>
    </mesh>
  );
}

export default function HeroSection(){
  const controls = useAnimation();
  const subControls = useAnimation();

  useEffect(() => {
    (async ()=>{
      await controls.start({opacity:1, y:0, transition:{duration:1, ease:"easeOut"}});
      await subControls.start({opacity:1, y:0, transition:{duration:1, ease:"easeOut"}});
    })();
  }, [controls, subControls]);

  return (
    <Section>
      <Canvas camera={{position:[0,0,5], fov:75}}>
        <ambientLight intensity={0.2}/>
        <pointLight position={[10,10,10]} intensity={0.5}/>
        <Suspense fallback={null}>
          <RotatingMesh position={[0,0,0]} args={[1,1]} color="#09f"/>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0}/>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      <OverlayText initial={{opacity:0, y:50}} animate={controls}>
        Welcome to My World
      </OverlayText>
      <SubText initial={{opacity:0, y:50}} animate={subControls}>
        A Universe of Creativity & Code
      </SubText>
    </Section>
  );
}
