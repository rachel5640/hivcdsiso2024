import { Desktop, Mobile } from '../views/@common/components/mediaQuery';
import MainPageDesktop from './Desktop/MainPageDesktop';
import MainPageMobile from './Mobile/MainPageMobile';

const MainPage = () => {
  return (
    <>
      <Mobile>
        <MainPageMobile />
      </Mobile>
      <Desktop>
        <MainPageDesktop />
      </Desktop>
    </>
  );
};

export default MainPage;
