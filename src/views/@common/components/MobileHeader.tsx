import { useState } from 'react';
import { IcMenu, OurIndexLogo } from '../assets';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface MobileHeaderProps {
  isopen: boolean;
}

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const handleClickLogo = () => navigate('/');
  const handleClickExhibition = () => navigate('/Exhibition');
  const handleClickLecture = () => navigate('/Lecture');
  const handleClickArchive = () => navigate('/Archive');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // 메뉴를 열거나 닫음
  };

  return (
    <HeaderWrapper>
      <MobileHeaderBox>
        <OurIndexLogoBox onClick={handleClickLogo}>
          <OurIndexLogo />
        </OurIndexLogoBox>
        <MenuBox onClick={toggleMenu}>
          <IcMenu />
        </MenuBox>
      </MobileHeaderBox>
      <GradientBox />
      {menuOpen && (
        <>
          <BackDim />
          <MenuItem isopen={menuOpen}>
            <div onClick={handleClickLecture}>Lecture</div>
            <div onClick={handleClickExhibition}>Exhibition</div>
            <div onClick={handleClickArchive}>Archive</div>
          </MenuItem>
        </>
      )}
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

const GradientBox = styled.section`
  width: 100vw;
  height: 0.5rem;

  background: linear-gradient(180deg, #fff 0%, rgb(255 255 255 / 0%) 75%);
`;

const BackDim = styled.section`
  z-index: 50;

  width: 100vw;
  height: 100vh;

  background: black;

  opacity: 0.4;
`;

const MenuItem = styled.section<MobileHeaderProps>`
  overflow: hidden;
  position: absolute;
  top: 4.8rem;

  width: 100vw;

  & > div {
    display: flex;
    align-items: center;

    padding: 1.2rem 0 1.2rem 1.6rem;
    border-top: 1px solid black;

    background-color: ${({ theme }) => theme.colors.white};
    ${({ theme }) => theme.fonts.label3};

    cursor: pointer;
  }
`;

export default MobileHeader;
