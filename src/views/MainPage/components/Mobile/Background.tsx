import styled from 'styled-components';
import { keyframes } from 'styled-components';
import {
  RightBottomMobileOne,
  RightBottomMobileTwo,
  RightBottomMobileThree,
  RightBottomMobileFour,
  RightBottomMobileFive,
  LeftBottomMobileOne,
  LeftBottomMobileTwo,
  LeftBottomMobileThree,
  LeftBottomMobileFour,
  LeftBottomMobileFive,
  TopRightMobileOne,
  TopRightMobileTwo,
  TopRightMobileThree,
  TopRightMobileFour,
  TopLeftMobileFour,
  TopLeftMobileThree,
  TopLeftMobileTwo,
  TopLeftMobileOne,
  TopMiddleOne,
  TopMiddleTwo,
  TopMiddleThree,
} from '../../assets';

const Background = () => {
  return (
    <>
      <BackgroundSection>
        <LeftTop>
          <TopLeftMobileFour />
          <TopLeftMobileThree />
          <TopLeftMobileTwo />
          <TopLeftMobileOne />
        </LeftTop>
        <MiddleTop>
          <TopMiddleThree />
          <TopMiddleTwo />
          <TopMiddleOne />
        </MiddleTop>
        <RightTop>
          <TopRightMobileFour />
          <TopRightMobileThree />
          <TopRightMobileTwo />
          <TopRightMobileOne />
        </RightTop>
        <LeftBottom>
          <LeftBottomMobileFive />
          <LeftBottomMobileFour />
          <LeftBottomMobileThree />
          <LeftBottomMobileTwo />
          <LeftBottomMobileOne />
        </LeftBottom>
        <RightBottom>
          <RightBottomMobileFive />
          <RightBottomMobileFour />
          <RightBottomMobileThree />
          <RightBottomMobileTwo />
          <RightBottomMobileOne />
        </RightBottom>
      </BackgroundSection>
    </>
  );
};

const SlideInTop = keyframes`
  from {
    transform: translateY(-100%) ;
  }

  to {
    transform: translateX(0) ;
  }
`;
const SlideInBottom = keyframes`
  from {
    transform: translateY(100%) ;
  }

  to {
    transform: translateX(0) ;
  }
`;

const SlideInTopLeft = keyframes`
  from {
    transform: translateX(-100%) translateY(-100%) ;
  }

  to {
    transform: translateX(0) translateY(0);
  }
`;

const SlideInRightBottom = keyframes`
  from {
    transform: translateY(100%) translateX(100%);
  }

  to {
    transform: translateX(0) translateY(0);
  }
`;

const SlideInRightTop = keyframes`
  from {
    transform: translateY(-100%) translateX(100%);
  }

  to {
    transform: translateX(0) translateY(0);
  }
`;

const SlideInRight = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0) ;
  }
`;
const SlideInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0) ;
  }
`;

const BackgroundSection = styled.section`
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100vw;
  height: 100dvh;

  & > div {
    position: absolute;
  }

  & > div > svg {
    position: absolute;
  }
`;

const LeftTop = styled.div`
  top: 0;
  left: 0;

  width: 20vw;
  min-height: 30vh;

  & > svg {
    top: 0;
    left: 0;

    width: 100%;
    height: auto;
  }

  & > *:nth-child(1) {
    animation: ${SlideInTop} 0.7s;
  }

  & > *:nth-child(2) {
    animation: ${SlideInLeft} 0.9s;
  }

  & > *:nth-child(3) {
    animation: ${SlideInTopLeft} 1.1s;
  }

  & > *:nth-child(4) {
    animation: ${SlideInTopLeft} 0.5s;
  }
`;
const MiddleTop = styled.div`
  top: 0;
  left: 27vw;

  width: 40vw;
  height: 50rem;

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
  transform-origin: 0 0%;

  & > svg {
    top: 0;
    right: 0;

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
    animation: ${SlideInRight} 0.7s;
  }

  & > *:nth-child(4) {
    animation: ${SlideInRightTop} 0.5s;
  }
`;

const LeftBottom = styled.div`
  transform-origin: 0% 100%;

  bottom: 0;
  left: 0;

  width: 35vw;

  & > svg {
    bottom: 0;
    left: 0;

    width: 35vw;
    height: auto;
  }

  & > *:nth-child(1) {
    animation: ${SlideInLeft} 0.5s;
  }

  & > *:nth-child(2) {
    animation: ${SlideInBottom} 0.7s;
  }

  & > *:nth-child(3) {
    animation: ${SlideInLeft} 1.1s;
  }

  & > *:nth-child(4) {
    animation: ${SlideInBottom} 1.2s;
  }

  & > *:nth-child(5) {
    animation: ${SlideInLeft} 0.9s;
  }
`;
const RightBottom = styled.div`
  transform-origin: 100% 100%;

  right: 0;
  bottom: 0;

  transition-timing-function: ease-in-out;

  & > svg {
    right: 0;
    bottom: 0;

    width: 50vw;
    height: auto;
  }

  & > *:nth-child(1) {
    animation: ${SlideInRight} 0.5s;
  }

  & > *:nth-child(2) {
    animation: ${SlideInBottom} 0.7s;
  }

  & > *:nth-child(3) {
    animation: ${SlideInBottom} 1.1s;
  }

  & > *:nth-child(4) {
    animation: ${SlideInRight} 1.2s;
  }

  & > *:nth-child(5) {
    animation: ${SlideInRightBottom} 0.9s;
  }
`;
export default Background;