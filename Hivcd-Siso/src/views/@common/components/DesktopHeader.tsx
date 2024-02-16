import { ArchiveBtn, ExhibitionBtn, LectureBtn, OurIndexLogo } from '../../../assets';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const DesktopHeader = () => {
  const navigate = useNavigate();

  const handleExhibitionClick = () => {
    navigate('/Exhibition');
  };

  const handleLectureClick = () => {
    navigate('/Lecture');
  };

  const handleArchiveClick = () => {
    navigate('/Archive');
  };

  return (
    <HeaderBox>
      <OurIndexLogo />
      <div>
        <HeaderBtn onClick={handleExhibitionClick}>
          <ExhibitionBtn />
        </HeaderBtn>
        <HeaderBtn onClick={handleLectureClick}>
          <LectureBtn />
        </HeaderBtn>
        <HeaderBtn onClick={handleArchiveClick}>
          <ArchiveBtn />
        </HeaderBtn>
      </div>
    </HeaderBox>
  );
};

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  width: 100vw;
  height: 8.8rem;
  margin: 2.67rem 0;
  padding: 0 8.2rem;

  & > div {
    /* stylelint-disable-next-line declaration-empty-line-before */
    display: flex;
    align-items: center;
  }
`;

const HeaderBtn = styled.button`
  margin-left: 4.5rem;

  cursor: pointer;
`;

export default DesktopHeader;
