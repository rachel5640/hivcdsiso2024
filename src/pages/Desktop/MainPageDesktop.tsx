import DesktopHeader from '../../views/@common/components/DesktopHeader';
import styled from 'styled-components';
import DesktopFooter from '../../views/@common/components/DestopFooter';
import ExhibitionSection from '../../views/MainPage/components/ExhibitionSection';
import MapSection from '../../views/MainPage/components/MapSection';
import EventSection from '../../views/MainPage/components/EventSection';
import GoodsSection from '../../views/MainPage/components/GoodsSection';
import CommitteeSection from '../../views/MainPage/components/CommitteeSection';
import { useEffect } from 'react';
import Splash from '../../views/MainPage/components/Splash';

const MainPageDesktop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Splash />
      <MainPageDesktopBox>
        <DesktopHeader isSticky={true} />
        <MainPageBox>
          <ExhibitionSection />
          <MapSection />
          <GoodsSection />
          <EventSection />
          <CommitteeSection />
        </MainPageBox>
        <DesktopFooter />
      </MainPageDesktopBox>
    </>
  );
};

const MainPageDesktopBox = styled.section`
  width: 100vw;
`;

const MainPageBox = styled.section`
  width: 100vw;
  padding: 0 8.2rem;
`;

export default MainPageDesktop;
