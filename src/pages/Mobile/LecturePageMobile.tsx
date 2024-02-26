import { useState, useEffect } from 'react';

import MobileHeader from '../../views/@common/components/MobileHeader';
import MobileFooter from '../../views/@common/components/MobileFooter';
import styled from 'styled-components';
import TimeLine from '../../views/LecturePage/components/TimeLine';
import { LECTURE_DATA } from '../../views/LecturePage/constant/text';
import Lecturebox from '../../views/LecturePage/components/LectureBox';

const LecturePageMobile = () => {
  const [clickedNumber, setClickedNumber] = useState<number | null>(null);

  const handleTimeLineClick = (number: number) => {
    setClickedNumber(number); // 클릭된 값 업데이트
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MobileHeader />
      <LecturePageMobileSection>
        <TimeLine onClick={handleTimeLineClick} isMobile={true} />
        <LectureBoxWrapper>
          {LECTURE_DATA.map((content, index) => (
            <Lecturebox
              key={index}
              number={content.number}
              title={content.title}
              date={content.date}
              description={content.description}
              instagram={content.instagram}
              website={content.website}
              clickedNumber={clickedNumber}
              isMobile={true}
            />
          ))}
        </LectureBoxWrapper>
      </LecturePageMobileSection>

      <MobileFooter />
    </>
  );
};

const LecturePageMobileSection = styled.section`
  width: 100vw;
  margin: 8.2rem 0 5rem;
  padding: 0 1.6rem;
`;

const LectureBoxWrapper = styled.section`
  width: 100%;
  margin-top: 5rem;
`;
export default LecturePageMobile;
