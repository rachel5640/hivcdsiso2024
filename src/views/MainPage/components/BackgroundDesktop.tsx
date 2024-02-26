import styled from 'styled-components';
import {
  SlideInBottom,
  SlideInLeft,
  SlideInRight,
  SlideInRightBottom,
  SlideInRightTop,
  SlideInTop,
  SlideInTopLeft,
} from '../utils/keyframes';

import {
  LeftBottomFive,
  LeftBottomFour,
  LeftBottomOne,
  LeftBottomThree,
  LeftBottomTwo,
  LeftTopFour,
  LeftTopOne,
  LeftTopThree,
  LeftTopTwo,
  MiddleTopOne,
  MiddleTopThree,
  MiddleTopTwo,
  RightBottomFive,
  RightBottomFour,
  RightBottomOne,
  RightBottomThree,
  RightBottomTwo,
  RightTopFour,
  RightTopOne,
  RightTopThree,
  RightTopTwo,
} from '../assets';

const BackgroundDesktop = () => {
  return (
    <Background>
      <LeftTop>
        <LeftTopOne />
        <LeftTopTwo />
        <LeftTopThree />
        <LeftTopFour />
      </LeftTop>
      <MiddleTop>
        <MiddleTopOne />
        <MiddleTopTwo />
        <MiddleTopThree />
      </MiddleTop>
      <RightTop>
        <RightTopOne />
        <RightTopTwo />
        <RightTopThree />
        <RightTopFour />
      </RightTop>
      <LeftBottom>
        <LeftBottomOne />
        <LeftBottomTwo />
        <LeftBottomThree />
        <LeftBottomFour />
        <LeftBottomFive />
      </LeftBottom>
      <RightBottom>
        <RightBottomOne />
        <RightBottomTwo />
        <RightBottomThree />
        <RightBottomFour />
        <RightBottomFive />
      </RightBottom>
    </Background>
  );
};

export default BackgroundDesktop;

const Background = styled.section`
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100vw;
  height: 100vh;

  & > div {
    position: absolute;

    height: auto;
  }

  & > div > svg {
    position: absolute;

    height: auto;
  }
`;

const LeftTop = styled.div`
  top: 0;
  left: 0;

  width: 20vw;

  & > svg {
    width: 100%;
    height: auto;
  }

  & > *:nth-child(1) {
    animation: ${SlideInLeft} 0.9s;
  }

  & > *:nth-child(2) {
    animation: ${SlideInTopLeft} 1.1s;
  }

  & > *:nth-child(3) {
    animation: ${SlideInTop} 0.7s;
  }

  & > *:nth-child(4) {
    animation: ${SlideInTopLeft} 0.5s;
  }
`;

const MiddleTop = styled.div`
  top: 0;
  left: 30vw;

  width: 43vw;

  & > svg {
    width: 100%;
    height: auto;
  }

  & > *:nth-child(1) {
    animation: ${SlideInTop} 0.5s;
  }

  & > *:nth-child(2) {
    animation: ${SlideInTop} 1.1s;
  }

  & > *:nth-child(3) {
    animation: ${SlideInTop} 0.7s;
  }
`;

const RightTop = styled.div`
  top: 0;
  right: 0;

  width: 20vw;

  & > svg {
    width: 100%;
    height: auto;
  }

  & > *:nth-child(1) {
    animation: ${SlideInRight} 1.1s;
  }

  & > *:nth-child(2) {
    animation: ${SlideInRightTop} 0.9s;
  }

  & > *:nth-child(3) {
    animation: ${SlideInRightTop} 0.5s;
  }

  & > *:nth-child(4) {
    animation: ${SlideInRight} 0.7s;
  }
`;

const LeftBottom = styled.div`
  bottom: 0;
  left: 0;

  & > svg {
    bottom: 0;
    left: 0;

    width: 34vw;
    height: auto;
  }

  & > *:nth-child(1) {
    animation: ${SlideInLeft} 0.5s;
  }

  & > *:nth-child(2) {
    animation: ${SlideInLeft} 1.2s;
  }

  & > *:nth-child(3) {
    animation: ${SlideInLeft} 1.1s;
  }

  & > *:nth-child(4) {
    animation: ${SlideInBottom} 0.9s;
  }

  & > *:nth-child(5) {
    animation: ${SlideInBottom} 0.7s;
  }
`;

const RightBottom = styled.div`
  right: 0;
  bottom: 0;

  width: 38vw;

  & > svg {
    right: 0;
    bottom: 0;

    width: 30vw;
    height: auto;
  }

  & > *:nth-child(1) {
    animation: ${SlideInBottom} 0.7s;
  }

  & > *:nth-child(2) {
    animation: ${SlideInBottom} 0.5s;
  }

  & > *:nth-child(3) {
    animation: ${SlideInRight} 1.1s;
  }

  & > *:nth-child(4) {
    animation: ${SlideInRight} 1.2s;
  }

  & > *:nth-child(5) {
    animation: ${SlideInRightBottom} 0.9s;
  }
`;
