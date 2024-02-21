import { Desktop, Mobile } from '../views/@common/components/mediaQuery';
import LecturePageDesktop from './Desktop/LecturePageDestop';
import LecturePageMobile from './Mobile/LecturePageMobile';

const LecturePage = () => {
  return (
    <>
      <Mobile>
        <LecturePageMobile />
      </Mobile>
      <Desktop>
        <LecturePageDesktop />
      </Desktop>
    </>
  );
};

export default LecturePage;
