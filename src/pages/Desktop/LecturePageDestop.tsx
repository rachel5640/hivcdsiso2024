import styled from 'styled-components';
import DesktopFooter from '../../views/@common/components/DestopFooter';
import DesktopHeader from '../../views/@common/components/DesktopHeader';
import { useState } from 'react';
import { useEffect } from 'react';

import Lecturebox from '../../views/LecturePage/components/LectureBox';
import { LECTURE_DATA } from '../../views/LecturePage/constant/text';
import TimeLine from '../../views/LecturePage/components/TimeLine';

const LecturePageDesktop = () => {
  const [clickedNumber, setClickedNumber] = useState<number | null>(null);

  const handleTimeLineClick = (number: number) => {
    setClickedNumber(number); // 클릭된 값 업데이트
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <DesktopHeader />
      <LecturePageBox>
        <TimeTable>
          <TimeLine onClick={handleTimeLineClick} />
        </TimeTable>
        <LineBox>
          <Line />
        </LineBox>

        <TextArea>
          {LECTURE_DATA.map((content, index) => (
            <Lecturebox
              key={index}
              number={content.number}
              blacknumber={content.blacknumber}
              title={content.title}
              date={content.date}
              description={content.description}
              instagram={content.instagram}
              website={content.website}
              clickedNumber={clickedNumber}
            />
          ))}
        </TextArea>
      </LecturePageBox>
      <DesktopFooter $isfixed={true} />
    </>
  );
};
const LecturePageBox = styled.section`
  display: grid;

  height: calc(100vh - 18.8rem);
  min-height: 65rem;
  margin-top: 9rem;
  padding: 0 8.2rem;

  grid-column-gap: 1rem;
  grid-template-columns: repeat(36, 1fr);
`;

const TimeTable = styled.section`
  height: 100%;
  border-top: 3px solid;

  grid-column: span 22;
`;

const LineBox = styled.div`
  display: flex;
  justify-content: center;

  grid-column: span 1;
`;

const Line = styled.div`
  width: 3px;
  height: calc(100vh - 18.8rem);
  min-height: 65rem;

  background-color: black;
`;

const TextArea = styled.section`
  overflow-y: scroll;

  height: calc(100vh - 18.8rem);
  min-height: 65rem;
  border-top: 3px solid;

  grid-column: span 13;
`;

export default LecturePageDesktop;
