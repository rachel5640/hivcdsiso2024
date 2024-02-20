import DesktopHeader from '../views/@common/components/DesktopHeader';
import styled from 'styled-components';
import Footer from '../views/@common/components/Footer';
import ExhibitionSection from '../views/MainPage/components/ExhibitionSection';
import MapSection from '../views/MainPage/components/MapSection';
import EventSection from '../views/MainPage/components/EventSection';
import GoodsSection from '../views/MainPage/components/GoodsSection';
import CommitteeSectionSection from '../views/MainPage/components/CommitteeSection';
import { useEffect } from 'react';

const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <DesktopHeader />
      <MainPageBox>
        <ExhibitionSection />
        <MapSection />
        <GoodsSection />
        <EventSection />
        <CommitteeSectionSection />
      </MainPageBox>
      <Footer />
    </>
  );
};

const MainPageBox = styled.section`
  max-width: 100vw;
  padding: 0 8.2rem;
`;

export default MainPage;
