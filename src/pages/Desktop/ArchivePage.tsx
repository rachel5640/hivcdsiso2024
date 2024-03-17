import DesktopHeader from '../../views/@common/components/DesktopHeader';
import DesktopFooter from '../../views/@common/components/DestopFooter';
import { useEffect } from 'react';
import styled from 'styled-components';
import ImageSection from '../../views/ArchivePage/constant/components/components/ImageSection';
const ArchiveDesktopPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <DesktopHeader />
      <ImageSectionBox>
        <ImageSection />
      </ImageSectionBox>
      <DesktopFooter />
    </>
  );
};

const ImageSectionBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  padding: 13rem 8.2rem 3rem;
  grid-gap: 1.3rem;

  & > img {
    width: 100%;
  }
`;

export default ArchiveDesktopPage;
