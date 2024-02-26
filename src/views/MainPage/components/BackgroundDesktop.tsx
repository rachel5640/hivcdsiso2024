import styled from 'styled-components';
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
  height: 100dvh;

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

  width: 18vw;

  & > svg {
    width: 100%;
    height: auto;
  }
`;

const MiddleTop = styled.div`
  top: 0;
  left: 30vw;

  width: 40vw;

  & > svg {
    width: 100%;
    height: auto;
  }
`;

const RightTop = styled.div`
  top: 0;
  right: 0;

  width: 18vw;

  & > svg {
    width: 100%;
    height: auto;
  }
`;

const LeftBottom = styled.div`
  bottom: 0;
  left: 0;

  & > svg {
    bottom: 0;
    left: 0;

    width: 27vw;
    height: auto;
  }
`;

const RightBottom = styled.div`
  right: 0;
  bottom: 0;

  width: 30vw;

  & > svg {
    right: 0;
    bottom: 0;

    width: 30vw;
    height: auto;
  }
`;
