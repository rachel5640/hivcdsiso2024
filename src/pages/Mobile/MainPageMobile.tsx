import MobileFooter from '../../views/@common/components/MobileFooter';
import MobileHeader from '../../views/@common/components/MobileHeader';
import ExhibitionSectionMobile from '../../views/MainPage/components/Mobile/ExhibitionSectionMobile';
import MapSectionMobile from '../../views/MainPage/components/Mobile/MapSectionMobile';
import styled from 'styled-components';
import SisoGoodsSectionMobile from '../../views/MainPage/components/Mobile/SisoGoodsSectionMobile';
import EventSectionMobile from '../../views/MainPage/components/Mobile/EventSectionMobile';
import ExhibitionCommitteeMobile from '../../views/MainPage/components/Mobile/ExhibitionCommitteeMobile';

const MainPageMobile = () => {
  return (
    <>
      <MobileHeader />
      <MainPageSection>
        <ExhibitionSectionMobile />
        <MapSectionMobile />
        <SisoGoodsSectionMobile />
        <EventSectionMobile />
        <ExhibitionCommitteeMobile />
      </MainPageSection>
      <MobileFooter />
    </>
  );
};

const MainPageSection = styled.section`
  width: 100vw;
  margin-top: 6rem;
  padding: 1.6rem;
`;
export default MainPageMobile;
