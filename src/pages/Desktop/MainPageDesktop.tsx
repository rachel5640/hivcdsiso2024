import DesktopHeader from '../../views/@common/components/DesktopHeader';
import styled from 'styled-components';
import DesktopFooter from '../../views/@common/components/DestopFooter';
import ExhibitionSection from '../../views/MainPage/components/ExhibitionSection';
import MapSection from '../../views/MainPage/components/MapSection';
import EventSection from '../../views/MainPage/components/EventSection';
import GoodsSection from '../../views/MainPage/components/GoodsSection';
import CommitteeSection from '../../views/MainPage/components/CommitteeSection';
import { useEffect, useRef } from 'react';
import Splash from '../../views/MainPage/components/Splash';

const MainPageDesktop = () => {
  const stickBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToStickBox = () => {
    stickBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollWrapper>
      <Splash scrollToStickBox={scrollToStickBox} />

      <div ref={stickBoxRef}>
        <DesktopHeader issticky={true} />
        <MainPageBox>
          <ExhibitionSection />
          <MapSection />
          <GoodsSection />
          <EventSection />
          <CommitteeSection />
        </MainPageBox>
      </div>
      <DesktopFooter />
    </ScrollWrapper>
  );
};

const ScrollWrapper = styled.section`
  overflow-y: scroll;

  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

const MainPageBox = styled.section`
  width: 100vw;
  padding: 0 8.2rem;
  scroll-snap-align: start;
  scroll-behavior: smooth;
`;

export default MainPageDesktop;
