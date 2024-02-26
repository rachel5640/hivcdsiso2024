import styled from 'styled-components';
import Background from './Background';

import { MainPageLogo, MainPageSubtext, ExhibitionDateMobile, HivcdLogo, InstagramIcon } from '../../assets';

const SplashMobile = () => {
  return (
    <SplashMobileSection>
      <BackgroundWrapper>
        <Background />
      </BackgroundWrapper>
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
  height: 100dvh;
`;

const BackgroundWrapper = styled.section`
  position: absolute;

  width: 100%;
  height: 100%;
`;

const SvgArea = styled.section`
  position: absolute;
  z-index: 300;

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
