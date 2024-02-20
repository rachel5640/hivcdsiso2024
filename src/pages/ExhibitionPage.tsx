import { Mobile, Desktop } from '../views/@common/components/mediaQuery';
import ExhibitionDesktopPage from './Desktop/ExhibitionPageDesktop';
import ExhibitionPageMobile from './Mobile/ExhibitionPageMobile';

const ExhibitionPage = () => {
  return (
    <>
      <Mobile>
        <ExhibitionPageMobile />
      </Mobile>
      <Desktop>
        <ExhibitionDesktopPage />
      </Desktop>
    </>
  );
};

export default ExhibitionPage;
