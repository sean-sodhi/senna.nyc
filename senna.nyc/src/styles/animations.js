import { keyframes } from 'styled-components';

export const fadeInUp = keyframes`
  0% {
    opacity:0;
    transform:translateY(50px);
  }
  100% {
    opacity:1;
    transform:translateY(0px);
  }
`;