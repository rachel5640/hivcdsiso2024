import { ArchiveBtn, ExhibitionBtn, LectureBtn, OurIndexLogo } from '../assets/index';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DesktopHeader = () => {
  const navigate = useNavigate();

  const buttons = [
    { icon: <ExhibitionBtn />, onClick: () => navigate('/Exhibition') },
    { icon: <LectureBtn />, onClick: () => navigate('/Lecture') },
    { icon: <ArchiveBtn />, onClick: () => navigate('/Archive') },
  ];

  return (
    <HeaderBox>
      <LogoBtn>
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
  );
};

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;

  width: 100vw;
  height: 8.8rem;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.white};

  & > div {
    /* stylelint-disable-next-line declaration-empty-line-before */
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
