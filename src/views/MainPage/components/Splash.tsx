import styled from 'styled-components';
import { MainPageLogo } from '../assets';
import { InstagramIcon } from '../assets';
import { HivcdLogo } from '../assets';
import { ExhibitionDate } from '../assets';
import { ExhibitionTitle } from '../assets';
import { ArrowIcon } from '../assets';
import { MainPageSubtext } from '../assets';

import { MiddelTop } from '../assets';
import { RightBottom } from '../assets';
import { RightTop } from '../assets';
import { LeftBottom } from '../assets';
import { LeftTop } from '../assets';

const Splash = () => {
  const scrollToMainSection = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <SplashSection>
      <Background>
        <LeftTop />
        <MiddelTop />
        <RightTop />
        <LeftBottom />
        <RightBottom />
      </Background>
      <header>
        <InstagramIcon />
        <HivcdLogo />
      </header>

      <body>
        <LogoBox>
          <MainPageLogo />
        </LogoBox>
        <SubBox>
          <MainPageSubtext />
        </SubBox>
      </body>
      <footer>
        <ExhibitionTitle />
        <ExhibitionDate />
      </footer>
      <ArrowWrapper onClick={scrollToMainSection}>
        <ArrowIcon />
      </ArrowWrapper>
    </SplashSection>
  );
};

const SplashSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  position: relative;
  z-index: 30;

  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;

  & > header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    z-index: 32;

    width: 100vw;
    height: 10vh;
    padding: 3rem 3.8rem;
  }

  & > body {
    display: flex;
    flex-direction: column;
    z-index: 32;

    margin-top: 5vh;
  }

  & > footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    z-index: 32;

    width: 100vw;
    height: 35vh;
    padding: 3.8rem;

    & > svg {
      height: fit-content;
    }

    & > svg:first-child {
      min-width: 30vw;
      max-width: 38vw;
    }

    & > svg:last-child {
      min-width: 15vw;
      max-width: 22vw;
    }
  }
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 51vw;

  & > svg {
    height: 100%;
  }
`;

const SubBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 3rem;

  & > svg {
    max-width: 23vw;
  }
`;

const ArrowWrapper = styled.div`
  position: absolute;
  bottom: 3rem;
  z-index: 50;

  cursor: pointer;
  transition: transform 0.6s ease;
`;

const Background = styled.section`
  z-index: 1;

  & > svg {
    position: absolute;

    height: auto;
  }

  & > svg:nth-child(1) {
    top: 0;
    left: 0;

    width: 20vw;
  }

  & > svg:nth-child(2) {
    top: 0;
    left: 30vw;

    width: 30vw;
  }

  & > svg:nth-child(3) {
    top: 0;
    right: 0;

    width: 20vw;
  }

  & > svg:nth-child(4) {
    bottom: 0;
    left: 0;

    width: 30vw;
  }

  & > svg:nth-child(5) {
    right: 0;
    bottom: 0;

    width: 35vw;
  }
`;

export default Splash;
