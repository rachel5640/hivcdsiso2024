import { ReactNode, useState } from 'react';
import { OurIndexLogo } from '../assets';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from './MenuIcon';

interface MobileHeaderProps {
  isopen?: boolean;
  issticky?: boolean;
  isnavigate?: boolean;
  children?: ReactNode;
}

const MobileHeader = ({ issticky, isnavigate, children }: MobileHeaderProps) => {
  const [menuopen, setMenuopen] = useState(false);
  const navigate = useNavigate();
  const handleClickLogo = () => navigate('/');
  const handleClickExhibition = () => navigate('/Exhibition');
  const handleClickLecture = () => navigate('/Lecture');
  const handleClickArchive = () => navigate('/Archive');

  const toggleMenu = () => {
    setMenuopen(!menuopen); // 메뉴를 열거나 닫음
  };

  return (
    <HeaderWrapper issticky={issticky}>
      <BackDim onClick={toggleMenu} style={{ display: menuopen ? 'block' : 'none' }} />
      <MenuItem isopen={menuopen} style={{ top: menuopen ? '4.8rem' : '-16.5rem' }}>
        <div onClick={handleClickLecture}>Lecture</div>
        <div onClick={handleClickExhibition}>Exhibition</div>
        <div onClick={handleClickArchive}>Archive</div>
      </MenuItem>
      <MobileHeaderBox>
        <OurIndexLogoBox onClick={handleClickLogo}>
          <OurIndexLogo />
        </OurIndexLogoBox>
        <MenuBox onClick={toggleMenu}>
          <MenuIcon menuOpen={menuopen} />
        </MenuBox>
      </MobileHeaderBox>
      {isnavigate && <Navigation>{children}</Navigation>}
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div<{ issticky?: boolean }>`
  position: ${({ issticky }) => (issticky ? 'sticky' : 'fixed')};
  top: 0;
  z-index: 200;
`;
const MobileHeaderBox = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

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

const BackDim = styled.section<{ isopen?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: black;

  opacity: 0.4;
`;

const MenuItem = styled.section<MobileHeaderProps>`
  overflow: hidden;
  position: absolute;

  width: 100vw;

  transition: top 0.3s ease;

  & > div {
    display: flex;
    align-items: center;

    height: 5.2rem;
    padding: 0 0 0 1.6rem;
    border-bottom: 1.5px solid black;

    background-color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.label3};

    cursor: pointer;
    pointer-events: ${({ isopen }) => (isopen ? 'auto' : 'none')};
  }

  & > div:first-child {
    border-top: 1.5px solid black;
  }
`;

const Navigation = styled.div`
  width: 100%;
`;

export default MobileHeader;
