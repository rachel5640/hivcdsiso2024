import MobileFooter from '../../views/@common/components/MobileFooter';
import MobileHeader from '../../views/@common/components/MobileHeader';
import ExhibitionSectionMobile from '../../views/MainPage/components/Mobile/ExhibitionSectionMobile';
import MapSectionMobile from '../../views/MainPage/components/Mobile/MapSectionMobile';
import styled from 'styled-components';
import SisoGoodsSectionMobile from '../../views/MainPage/components/Mobile/SisoGoodsSectionMobile';
import EventSectionMobile from '../../views/MainPage/components/Mobile/EventSectionMobile';
import ExhibitionCommitteeMobile from '../../views/MainPage/components/Mobile/ExhibitionCommitteeMobile';
import SplashMobile from '../../views/MainPage/components/Mobile/SplashMobile';
import { CommiteeBtn, InfoBtn, GoodsBtn, EventBtn } from '../../views/@common/assets';

import { useEffect, useRef } from 'react';

const MainPageMobile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Inforef = useRef<HTMLDivElement>(null);
  const Goodsref = useRef<HTMLDivElement>(null);
  const Eventref = useRef<HTMLDivElement>(null);
  const Committeeref = useRef<HTMLDivElement>(null);

  const onInfoClick = () => {
    Inforef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onGoodsClick = () => {
    Goodsref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onEventClick = () => {
    Eventref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onCommiteeClick = () => {
    Committeeref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ScrollSnapWrapper>
      <SplashMobile />
      <MobileHeader issticky={true} isnavigate={true}>
        <SubHeader>
          <div onClick={onInfoClick}>
            <InfoBtn />
          </div>
          <div onClick={onGoodsClick}>
            <GoodsBtn />
          </div>
          <div onClick={onEventClick}>
            <EventBtn />
          </div>
          <div onClick={onCommiteeClick}>
            <CommiteeBtn />
          </div>
        </SubHeader>
      </MobileHeader>
      <MainPageSection>
        <ExhibitionSectionMobile ref={Inforef} />
        <MapSectionMobile />
        <SisoGoodsSectionMobile ref={Goodsref} />
        <EventSectionMobile ref={Eventref} />
        <ExhibitionCommitteeMobile ref={Committeeref} />
      </MainPageSection>
      <MobileFooter />
    </ScrollSnapWrapper>
  );
};

const ScrollSnapWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

const MainPageSection = styled.section`
  width: 100%;
  padding: 1.6rem;
  scroll-snap-align: start;
`;

const SubHeader = styled.section`
  display: flex;
  align-items: center;

  width: 100vw;
  height: 4rem;
  padding: 0 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};

  & > div {
    cursor: pointer;
  }

  & > div > svg {
    width: auto;
    height: 2rem;
    margin-right: 0.9rem;
  }
`;

export default MainPageMobile;
