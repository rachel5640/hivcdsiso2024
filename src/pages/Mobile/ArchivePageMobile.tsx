import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import MobileHeader from '../../views/@common/components/MobileHeader';
import MobileFooter from '../../views/@common/components/MobileFooter';
import ImageSection from '../../views/ArchivePage/constant/components/components/ImageSection';
import ViewSection from '../../views/ArchivePage/constant/components/components/ViewSection';
import { ClubViewBtn, ExhibitViewBtn } from '../../views/ArchivePage/constant/components/assets';

const ArchivePageMobile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const Exhibitionref = useRef<HTMLDivElement>(null);
  const Clubref = useRef<HTMLDivElement>(null);

  const onExhibitionClick = () => {
    Exhibitionref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onClubClick = () => {
    Clubref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <MobileHeader isnavigate={true}>
        <Navigation>
          <div onClick={onExhibitionClick}>
            <ExhibitViewBtn />
          </div>
          <div onClick={onClubClick}>
            <ClubViewBtn />
          </div>
        </Navigation>
      </MobileHeader>
      <ImageBoxMobile>
        <ViewSection ref={Exhibitionref} />
        <ImageSection ref={Clubref} />
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
  padding-top: 10rem;
  padding-bottom: 1rem;

  & > div > img {
    width: 100%;
    margin-bottom: 0.3rem;
  }

  & > div > div {
    margin-bottom: 0.3rem;

    cursor: pointer;
    grid-gap: 0.3rem;
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 4rem;
  padding: 0 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};

  & > div {
    display: flex;

    cursor: pointer;
  }

  & > div > svg {
    width: auto;
    height: 2rem;
    margin-right: 0.9rem;
  }
`;

export default ArchivePageMobile;
