import styled from 'styled-components';
import { MainPageLogo } from '../assets';
import { InstagramIcon } from '../assets';
import { HivcdLogo } from '../assets';
import { ExhibitionDate } from '../assets';
import { ExhibitionTitle } from '../assets';
import { ArrowIcon } from '../assets';
import { MainPageSubtext } from '../assets';
import BackgroundDesktop from './BackgroundDesktop';

interface SplashProps {
  scrollToStickBox: () => void;
}

const Splash = ({ scrollToStickBox }: SplashProps) => {
  return (
    <SplashSection>
      <BackgroundWrapper>
        <BackgroundDesktop />
      </BackgroundWrapper>
      <header>
        <InstagramIcon />
        <HivcdLogo />
      </header>

      <Body>
        <LogoBox>
          <MainPageLogo />
        </LogoBox>
        <SubBox>
          <MainPageSubtext />
        </SubBox>
      </Body>
      <footer>
        <ExhibitionTitle />
        <ExhibitionDate />
      </footer>
      <ArrowWrapper onClick={scrollToStickBox}>
        <ArrowIcon />
      </ArrowWrapper>
    </SplashSection>
  );
};

const SplashSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;

  position: relative;

  width: 100vw;

  & > header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: absolute;
    z-index: 32;

    width: 100vw;
    height: 10vh;
    padding: 3rem 3.8rem;
  }

  & > body {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 11vh;
    z-index: 32;

    margin-top: 8vh;
  }

  & > footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    z-index: 32;

    width: 100%;
    height: 35vh;
    padding: 3.8rem;

    & > svg {
      height: auto;
    }

    & > svg:first-child {
      min-width: 27vw;
      max-width: 100rem;
    }

    & > svg:last-child {
      min-width: 12vw;
      max-width: 30rem;
    }
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 11vh;
  z-index: 32;

  margin-top: 8vh;
`;

const BackgroundWrapper = styled.section`
  position: relative;

  width: 100%;
  height: 100%;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 59rem;
  max-width: 50vw;

  & > svg {
    height: 100%;
  }
`;

const SubBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 1rem;
  padding: 3rem;

  & > svg {
    min-width: 10rem;
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

export default Splash;
