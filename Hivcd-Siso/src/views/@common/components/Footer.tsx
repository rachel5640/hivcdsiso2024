import styled from 'styled-components';
import { IcHivcd } from '../assets';
import { IcInstagram } from '../assets';

const Footer = () => {
  return (
    <FooterBox>
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
    </FooterBox>
  );
};

const FooterBox = styled.section`
  display: flex;
  justify-content: space-between;

  width: calc(100vw - 16.4rem);
  margin: auto;
  padding: 2.61rem 0 2.1rem;
  border-top: 3px solid;
`;
const FooterText = styled.p`
  display: flex;
  ${({ theme }) => theme.fonts.label1};

  &:nth-child(2) {
    /* stylelint-disable-next-line declaration-empty-line-before */
    margin-right: 3rem;
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
    /* stylelint-disable-next-line declaration-empty-line-before */
    cursor: pointer;
  }
`;
export default Footer;
