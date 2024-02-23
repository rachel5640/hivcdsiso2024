import styled from 'styled-components';
import {
  MainPageLogo,
  MainPageSubtext,
  ExhibitionDateMobile,
  HivcdLogo,
  InstagramIcon,
  LeftBottomMobile,
  LeftTopMobile,
  RightBottomtMobile,
  RightTopMobile,
  MiddleTopMobile,
} from '../../assets';

const SplashMobile = () => {
  return (
    <SplashMobileSection>
      <Background>
        <LeftTopMobile />
        <MiddleTopMobile />
        <RightTopMobile />
        <LeftBottomMobile />
        <RightBottomtMobile />
      </Background>
      <SvgArea>
        <MainPageLogo />
        <SubTextBox>
          <MainPageSubtext />
        </SubTextBox>
        <footer>
          <ExhibitionDateMobile />
          <div>
            <InstagramIcon />
            <HivcdLogo />
          </div>
        </footer>
      </SvgArea>
    </SplashMobileSection>
  );
};

const SplashMobileSection = styled.section`
  position: relative;

  width: 100vw;
  height: 100vh;
`;

const Background = styled.section`
  position: absolute;
  top: 0;
  z-index: 1;

  width: 100vw;
  height: 100dvh;

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

    width: 40vw;
  }

  & > svg:nth-child(3) {
    top: 0;
    right: 0;

    width: 20vw;
  }

  & > svg:nth-child(4) {
    bottom: 0;
    left: 0;

    width: 35vw;
  }

  & > svg:nth-child(5) {
    right: 0;
    bottom: 0;

    width: 50vw;
  }
`;
const SvgArea = styled.section`
  position: absolute;
  z-index: 30;

  width: 100vw;
  height: 100dvh;
  padding: 0 4.6rem;

  & > svg {
    width: 100%;
    height: auto;
    margin-top: 16vh;
  }

  & > footer {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100vw;
    padding: 0 2rem;
    padding-bottom: 2rem;
  }

  & > footer > div {
    display: flex;
    gap: 1.6rem;
    align-items: flex-end;

    width: 30vw;
  }

  & > footer > svg {
    bottom: 0;
    left: 0;

    width: 45vw;
    height: auto;
  }
`;

const SubTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 1.6rem;

  & > svg {
    width: 40%;
    height: auto;
    margin-top: 1rem;
  }
`;
export default SplashMobile;
