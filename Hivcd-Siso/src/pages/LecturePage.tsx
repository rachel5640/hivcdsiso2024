import styled from 'styled-components';
import DesktopHeader from '../views/@common/components/DesktopHeader';
import Footer from '../views/@common/components/Footer';

const LecturePage = () => {
  return (
    <>
      <DesktopHeader />
      <LecturePageBox>
        <TimeTable>시간표</TimeTable>
        <TextArea>
          <div>dlsdjfsldkf</div>
          <div>dlsdjfsldkf</div>
          <div>dlsdjfsldkf</div>
          <div>dlsdjfsldkf</div>
          <div>dlsdjfsldkf</div>
          <div>dlsdjfsldkf</div>
          <div>dlsdjfsldkf</div>
          <div>dlsdjfsldkf</div>
          <div>dlsdjfsldkf</div>
          <div>dlsdjfsldkf</div>
          <div>dlsdjfsldkf</div>
          <div>dlsdjfsldkf</div>
          <div>dlsdjfsldkf</div>
          <div>dlsdjfsldkf</div>
          <div>dlsdjfsldkf</div>
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
  height: 70rem;
  margin-top: 16.9rem;
  margin-bottom: 4.1rem;
  padding: 0 8.2rem;

  background-color: red;

  grid-column-gap: 1rem;
  grid-template-columns: repeat(16, 1fr);
`;

const TimeTable = styled.section`
  overflow-y: auto;

  min-height: 60dvh;
  border-top: 3px solid;

  background-color: pink;
  grid-column: span 10;
`;

const TextArea = styled.section`
  overflow-y: auto;

  height: auto;
  border-top: 3px solid;

  background-color: green;
  grid-column: span 6;

  & > div {
    display: block;

    height: 10rem;

    background-color: white;
  }
`;

export default LecturePage;
