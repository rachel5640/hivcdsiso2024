import styled from 'styled-components';
import { IcHivcd } from '../assets';
import { IcInstagram } from '../assets';

interface DesktopFooterProps {
  isfixed?: boolean;
}

const DesktopFooter = ({ isfixed }: DesktopFooterProps) => {
  return (
    <FooterBox isfixed={isfixed}>
      <ContentBox>
        <FooterText>
          2024 HIVCD CLUB FESTIVAL <div>:</div> SISO
        </FooterText>
        <FooterText>《OUR INDEX》</FooterText>
        <ButtonBox>
          <a href="https://www.instagram.com/hivcdsiso/" target="_blank">
            <IcInstagram />
          </a>
          <a href="https://sidi.hongik.ac.kr" target="_blank">
            <IcHivcd />
          </a>
        </ButtonBox>
      </ContentBox>
    </FooterBox>
  );
};

const FooterBox = styled.section<DesktopFooterProps>`
  position: ${({ isfixed }) => (isfixed ? 'fixed' : 'static')};
  bottom: 0;
  scroll-snap-align: start;

  width: 100vw;
  height: 8.8rem;
  margin: auto;
  padding: 0 8.2rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding: 1.3rem 0;
  border-top: 3px solid black;
`;

const FooterText = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.label1};

  &:nth-child(2) {
    margin-right: 2rem;
    margin-left: 1rem;
  }

  & > div {
    ${({ theme }) => theme.fonts.label1};

    margin: -0.3rem 0.4rem 0;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 1.5rem;

  & > a {
    cursor: pointer;
  }
`;
export default DesktopFooter;
