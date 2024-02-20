import styled from 'styled-components';
import DesktopHeader from '../views/@common/components/DesktopHeader';
import Footer from '../views/@common/components/Footer';
import { useEffect } from 'react';
import Lecturebox from '../views/LecturePage/components/LectureBox';
import { LECTURE_DATA } from '../views/LecturePage/constant/text';
import TimeLine from '../views/LecturePage/components/TimeLine';
import ScrollBarBox from '../views/@common/components/ScrollBar';

const LecturePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <DesktopHeader />
      <LecturePageBox>
        <TimeTable>
          <TimeLine />
        </TimeTable>
        <LineBox>
          <Line />
        </LineBox>
        <TextArea>
          <ScrollBarBox>
            {LECTURE_DATA.map((content, index) => (
              <Lecturebox
                key={index}
                number={content.number}
                title={content.title}
                date={content.date}
                description={content.description}
                instagram={content.instagram}
                website={content.website}
              />
            ))}
          </ScrollBarBox>
        </TextArea>
      </LecturePageBox>
      <Footer isfixed={true} />
    </>
  );
};
const LecturePageBox = styled.section`
  display: grid;

  max-width: 100vw;
  max-height: 100vh;
  padding: 0 8.2rem;
  padding-top: 14rem;
  padding-bottom: 8.8rem;

  grid-column-gap: 1rem;
  grid-template-columns: repeat(36, 1fr);
`;

const TimeTable = styled.section`
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
  height: calc(100vh - 24rem);

  background-color: black;
`;
const TextArea = styled.section`
  overflow-y: auto;

  height: 100%;
  border-top: 3px solid;

  grid-column: span 13;
`;

export default LecturePage;
