import { ArchiveBtn, ExhibitionBtn, LectureBtn, OurIndexLogo } from '../assets/index';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface DesktopHeaderProps {
  isSticky?: boolean;
}

const DesktopHeader = ({ isSticky }: DesktopHeaderProps) => {
  const navigate = useNavigate();
  const handleClickLogo = () => navigate('/');

  const buttons = [
    { icon: <ExhibitionBtn />, onClick: () => navigate('/Exhibition') },
    { icon: <LectureBtn />, onClick: () => navigate('/Lecture') },
    { icon: <ArchiveBtn />, onClick: () => navigate('/Archive') },
  ];

  return (
    <HeaderWrapper isSticky={isSticky}>
      <HeaderBox>
        <LogoBtn onClick={handleClickLogo}>
          <OurIndexLogo />
        </LogoBtn>
        <div>
          {buttons.map((button, index) => (
            <HeaderBtn key={index} onClick={button.onClick}>
              {button.icon}
            </HeaderBtn>
          ))}
        </div>
      </HeaderBox>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.section<{ isSticky?: boolean }>`
  position: ${({ isSticky }) => (isSticky ? 'sticky' : 'fixed')};
  top: 0;
  z-index: 100;

  width: 100vw;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 7.6rem;
  margin: 0 auto;
  padding-top: 0.3rem;

  background-color: ${({ theme }) => theme.colors.white};

  & > div {
    display: flex;
    align-items: center;

    margin-right: 8.2rem;
  }
`;

const LogoBtn = styled.button`
  margin-left: 8.2rem;

  cursor: pointer;
`;

const HeaderBtn = styled.button`
  margin-left: 4.5rem;

  cursor: pointer;
`;

export default DesktopHeader;
