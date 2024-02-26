import { keyframes } from 'styled-components';

export const SlideInTop = keyframes`
  from {
    transform: translateY(-100%) ;
  }

  to {
    transform: translateX(0) ;
  }
`;
export const SlideInBottom = keyframes`
  from {
    transform: translateY(100%) ;
  }

  to {
    transform: translateX(0) ;
  }
`;

export const SlideInTopLeft = keyframes`
  from {
    transform: translateX(-100%) translateY(-100%) ;
  }

  to {
    transform: translateX(0) translateY(0);
  }
`;

export const SlideInRightBottom = keyframes`
  from {
    transform: translateY(100%) translateX(100%);
  }

  to {
    transform: translateX(0) translateY(0);
  }
`;

export const SlideInRightTop = keyframes`
  from {
    transform: translateY(-100%) translateX(100%);
  }

  to {
    transform: translateX(0) translateY(0);
  }
`;

export const SlideInRight = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0) ;
  }
`;
export const SlideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0) ;
  }
`;
