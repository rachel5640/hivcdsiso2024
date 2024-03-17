import styled from 'styled-components';
import { useEffect } from 'react';
import MobileHeader from '../../views/@common/components/MobileHeader';
import MobileFooter from '../../views/@common/components/MobileFooter';
import ImageSection from '../../views/ArchivePage/constant/components/components/ImageSection';

const ArchivePageMobile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <MobileHeader />
      <ImageBoxMobile>
        <ImageSection />
      </ImageBoxMobile>
      <MobileFooter />
    </>
  );
};

const ImageBoxMobile = styled.div`
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0 1.6rem;
  padding-top: 5rem;
  padding-bottom: 1rem;

  & > img {
    width: 100%;
    margin-bottom: 0.3rem;
  }
`;

export default ArchivePageMobile;
