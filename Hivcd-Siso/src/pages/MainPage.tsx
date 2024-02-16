import DesktopHeader from '../views/@common/components/DesktopHeader';
import styled from 'styled-components';
import Footer from '../views/@common/components/Footer';
import ExhibitionSection from '../views/MainPage/components/ExhibitionSection';
import MapSection from '../views/MainPage/components/MapSection';
import EventSection from '../views/MainPage/components/EventSection';
import GoodsSection from '../views/MainPage/components/GoodsSection';

const MainPage = () => {
  return (
    <>
      <DesktopHeader />
      <MainPageBox>
        <ExhibitionSection />
        <MapSection />
        <GoodsSection />
        <EventSection />
      </MainPageBox>
      <Footer />
    </>
  );
};

const MainPageBox = styled.section`
  width: 100vw;

  /* stylelint-disable-next-line order/properties-order */
  padding: 0 8.2rem;
`;

export default MainPage;
