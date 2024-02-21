import MobileHeader from '../../views/@common/components/MobileHeader';
import MobileFooter from '../../views/@common/components/MobileFooter';
import styled from 'styled-components';
import TimeLine from '../../views/LecturePage/components/TimeLine';

const LecturePageMobile = () => {
  return (
    <>
      <MobileHeader />
      <LecturePageMobileSection>
        <TimeLine onClick={1} isMobile={true} />
      </LecturePageMobileSection>

      <MobileFooter />
    </>
  );
};

const LecturePageMobileSection = styled.section`
  width: 100vw;
  margin-top: 8.2rem;
  padding: 0 1.6rem;
`;

export default LecturePageMobile;
