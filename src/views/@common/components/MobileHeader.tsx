import { IcMenu, OurIndexLogo } from '../assets';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MobileHeader = () => {
  const navigate = useNavigate();
  const handleClickLogo = () => navigate('/');

  return (
    <HeaderWrapper>
      <MobileHeaderBox>
        <OurIndexLogoBox onClick={handleClickLogo}>
          <OurIndexLogo />
        </OurIndexLogoBox>
        <MenuBox>
          <IcMenu />
        </MenuBox>
      </MobileHeaderBox>
      <GradientBox />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
`;
const MobileHeaderBox = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100vw;
  height: 4.8rem;
  padding: 1.2rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const OurIndexLogoBox = styled.div`
  flex-grow: 1;

  & > svg {
    width: auto;
    height: 2.4rem;
  }
`;

const MenuBox = styled.div`
  cursor: pointer;
`;

const GradientBox = styled.section`
  width: 100vw;
  height: 0.5rem;

  background: linear-gradient(180deg, #fff 0%, rgb(255 255 255 / 0%) 75%);
`;
export default MobileHeader;
