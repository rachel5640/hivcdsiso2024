import { Desktop, Mobile } from '../views/@common/components/mediaQuery';
import ArchiveDesktopPage from './Desktop/ArchivePage';
import ArchivePageMobile from './Mobile/ArchivePageMobile';

const ArchivePage = () => {
  return (
    <>
      <Mobile>
        <ArchivePageMobile />
      </Mobile>
      <Desktop>
        <ArchiveDesktopPage />
      </Desktop>
    </>
  );
};

export default ArchivePage;
