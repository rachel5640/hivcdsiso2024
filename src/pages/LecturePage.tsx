import styled from 'styled-components';
import DesktopHeader from '../views/@common/components/DesktopHeader';
import Footer from '../views/@common/components/Footer';
import { useEffect } from 'react';
import Lecturebox from '../views/LecturePage/components/LectureBox';
import { LECTURE_DATA } from '../views/LecturePage/constant/text';

const LecturePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <DesktopHeader />
      <LecturePageBox>
        <TimeTable>시간표</TimeTable>
        <LineBox>
          <Line />
        </LineBox>
        <TextArea>
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
        </TextArea>
      </LecturePageBox>
      <Footer />
    </>
  );
};
const LecturePageBox = styled.section`
  display: grid;
  overflow-y: hidden;
  position: relative;

  width: 100vw;
  height: 80dvh;
  margin-top: 14rem;
  margin-bottom: 4.1rem;
  padding: 0 8.2rem;

  grid-column-gap: 1rem;
  grid-template-columns: repeat(36, 1fr);
`;

const TimeTable = styled.section`
  overflow-y: auto;

  height: 100;
  border-top: 3px solid;

  grid-column: span 20;
`;

const LineBox = styled.div`
  display: flex;
  justify-content: center;

  height: 80dvh;

  grid-column: span 1;
`;

const Line = styled.div`
  width: 3px;
  height: 80dvh;

  background-color: black;
`;
const TextArea = styled.section`
  overflow-y: auto;

  height: auto;
  border-top: 3px solid;

  grid-column: span 15;
`;

export default LecturePage;
