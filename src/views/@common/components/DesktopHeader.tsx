import { ArchiveBtn, ExhibitionBtn, LectureBtn, OurIndexLogo } from '../assets/index';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface DesktopHeaderProps {
  issticky?: boolean;
}

const DesktopHeader = ({ issticky }: DesktopHeaderProps) => {
  const navigate = useNavigate();
  const handleClickLogo = () => navigate('/');

  const buttons = [
    { icon: <ExhibitionBtn />, onClick: () => navigate('/Exhibition') },
    { icon: <LectureBtn />, onClick: () => navigate('/Lecture') },
    { icon: <ArchiveBtn />, onClick: () => navigate('/Archive') },
  ];

  return (
    <HeaderWrapper issticky={issticky}>
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

const HeaderWrapper = styled.section<{ issticky?: boolean }>`
  position: ${({ issticky }) => (issticky ? 'sticky' : 'fixed')};
  top: 0;
  z-index: 100;

  width: 100vw;
`;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-y: none;

  width: 100vw;
  height: 7.6rem;
  padding: 0 8.2rem;

  background-color: ${({ theme }) => theme.colors.white};

  & > div {
    display: flex;
    align-items: center;
  }
`;

const LogoBtn = styled.button`
  cursor: pointer;
`;

const HeaderBtn = styled.button`
  margin-left: 4rem;

  cursor: pointer;
`;

export default DesktopHeader;
