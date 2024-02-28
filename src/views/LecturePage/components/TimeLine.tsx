import styled from 'styled-components';
import { DAYS, ENG_DAYS, TIMES } from '../constant/timeline';

interface TimeLineProps {
  onClick: (number: number) => void;
  isMobile?: boolean;
}

const TimeLine = ({ onClick, isMobile }: TimeLineProps) => {
  const handleClick = (number: number) => {
    onClick(number); // 클릭된 숫자를 부모 컴포넌트로 전달
  };

  const cells = Array(84)
    .fill(null)
    .map((_, index) => <div key={index}></div>);
  const filledcells = Array(60)
    .fill(null)
    .map((_, index) => {
      if (index === 17)
        return (
          <div key={index} onClick={() => handleClick(8)}>
            ❽
          </div>
        );
      if (index === 34)
        return (
          <div key={index} onClick={() => handleClick(1)}>
            ❶
          </div>
        );
      if (index === 35)
        return (
          <div key={index} onClick={() => handleClick(3)}>
            ❸
          </div>
        );
      if (index === 37)
        return (
          <div key={index} onClick={() => handleClick(6)}>
            ❻
          </div>
        );
      if (index === 49)
        return (
          <div key={index} onClick={() => handleClick(2)}>
            ❷
          </div>
        );
      if (index === 50)
        return (
          <div key={index} onClick={() => handleClick(4)}>
            ❹
          </div>
        );
      if (index === 51)
        return (
          <div key={index} onClick={() => handleClick(5)}>
            ❺
          </div>
        );
      if (index === 52)
        return (
          <div key={index} onClick={() => handleClick(7)}>
            ❼
          </div>
        );
      if (index === 53)
        return (
          <div key={index} onClick={() => handleClick(9)}>
            ❾
          </div>
        );
      return <div key={index}></div>;
    });

  const dayBoxes = DAYS.map((day, index) => (
    <DaySlot isMobile={isMobile} key={index}>
      {day}
    </DaySlot>
  ));
  const engDayBoxes = ENG_DAYS.map((engDay, index) => (
    <DaySlot isMobile={isMobile} key={index}>
      {engDay}
    </DaySlot>
  ));

  return (
    <>
      <DayBoxWrapper>
        <DayBox>{dayBoxes}</DayBox>
        <DayBox>{engDayBoxes}</DayBox>
      </DayBoxWrapper>
      <Wrapper>
        <TimeLineBox>
          <TimeBox isMobile={isMobile}>
            {TIMES.map((time, index) => (
              <div key={index}>{time}</div>
            ))}
          </TimeBox>

          <TimeLineSheet isMobile={isMobile}>{cells}</TimeLineSheet>
        </TimeLineBox>
        <TimeLineBoxTop>
          <TimeBox isMobile={isMobile}>
            {TIMES.map((time, index) => (
              <div key={index}>{time}</div>
            ))}
          </TimeBox>

          <TimeLineSheetChecked isMobile={isMobile}>{filledcells}</TimeLineSheetChecked>
        </TimeLineBoxTop>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;

  width: 100%;
  margin-bottom: 10rem;
`;
const TimeLineBox = styled.section`
  display: flex;
`;

const TimeLineBoxTop = styled.section`
  display: flex;
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;
  margin-bottom: 0;
`;

const TimeBox = styled.div<{ isMobile?: boolean }>`
  display: grid;

  height: ${({ isMobile }) => (isMobile ? '2.4rem' : '3rem')};
  margin-right: 3.5rem;
  grid-template-rows: repeat(7, 1fr);

  & > div {
    ${({ isMobile, theme }) => (isMobile ? theme.fonts.body7 : theme.fonts.label3)};

    width: ${({ isMobile }) => (isMobile ? '1rem ' : 'auto')};
    height: ${({ isMobile }) => (isMobile ? '4.8rem ' : '8rem')};

    &:last-child {
      height: 0;
    }
  }
`;
const TimeLineSheet = styled.div<{ isMobile?: boolean }>`
  display: grid;

  width: 100%;
  height: 100%;
  margin-top: 1.2rem;

  grid-template-columns: repeat(6, 1fr); /* 14줄의 가로 그리드 */
  grid-template-rows: repeat(12, 1fr); /* 7줄의 세로 그리드 */

  & > div {
    height: ${({ isMobile }) => (isMobile ? '2.4rem' : '4rem')};
    border-top: ${({ isMobile }) => (isMobile ? '2px solid ' : '2.5px solid')};
    border-color: ${({ theme }) => theme.colors.darkgrey};
  }

  & > div:nth-child(12n-5),
  & > div:nth-child(12n-4),
  & > div:nth-child(12n-3),
  & > div:nth-child(12n-2),
  & > div:nth-child(12n-1),
  & > div:nth-child(12n) {
    border-top: 1.5px dashed;
    border-color: ${({ theme }) => theme.colors.darkgrey};
  }

  & > div:nth-child(n + 79):nth-child(-n + 84) {
    border-bottom: ${({ isMobile }) => (isMobile ? '2px solid ' : '2.5px solid')};
  }
`;

const TimeLineSheetChecked = styled.div<{ isMobile?: boolean }>`
  display: grid;

  width: 100%;
  margin-top: 1.2rem;

  grid-template-columns: repeat(6, 1fr); /* 14줄의 가로 그리드 */
  grid-template-rows: repeat(12, 1fr); /* 7줄의 세로 그리드 */

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: ${({ isMobile }) => (isMobile ? '2.4rem' : '4rem')};

    ${({ isMobile, theme }) => (isMobile ? theme.fonts.body7 : theme.fonts.label1)};
  }

  & > div:nth-child(18) {
    height: ${({ isMobile }) => (isMobile ? '9.6rem' : '16rem')};
    border-top: ${({ isMobile }) => (isMobile ? '2px solid ' : '2.5px solid')};
    border-color: ${({ theme }) => theme.colors.darkgrey};

    background-color: ${({ theme }) => theme.colors.lightgreen};
    grid-row-end: span 4;

    cursor: pointer;
  }

  & > div:nth-child(35) {
    height: ${({ isMobile }) => (isMobile ? '9.6rem' : '16rem')};
    border-top: ${({ isMobile }) => (isMobile ? '2px solid ' : '2.5px solid')};
    border-color: ${({ theme }) => theme.colors.darkgrey};

    background-color: ${({ theme }) => theme.colors.purple};
    grid-row-end: span 4;

    cursor: pointer;
  }

  & > div:nth-child(36) {
    height: ${({ isMobile }) => (isMobile ? '9.6rem' : '16rem')};
    border-top: ${({ isMobile }) => (isMobile ? '2px solid ' : '2.5px solid')};
    border-color: ${({ theme }) => theme.colors.darkgrey};

    background-color: ${({ theme }) => theme.colors.red};
    grid-row-end: span 4;

    cursor: pointer;
  }

  & > div:nth-child(38) {
    height: ${({ isMobile }) => (isMobile ? '9.6rem' : '16rem')};
    border-top: ${({ isMobile }) => (isMobile ? '2px solid ' : '2.5px solid')};
    border-color: ${({ theme }) => theme.colors.darkgrey};

    background-color: ${({ theme }) => theme.colors.yellow};
    grid-row-end: span 4;

    cursor: pointer;
  }

  & > div:nth-child(50) {
    height: ${({ isMobile }) => (isMobile ? '9.6rem' : '16rem')};
    border-top: ${({ isMobile }) => (isMobile ? '2px solid ' : '2.5px solid')};
    border-bottom: ${({ isMobile }) => (isMobile ? '2px solid ' : '2.5px solid')};
    border-color: ${({ theme }) => theme.colors.darkgrey};

    background-color: ${({ theme }) => theme.colors.blue};
    grid-row-end: span 4;

    cursor: pointer;
  }

  & > div:nth-child(51) {
    height: ${({ isMobile }) => (isMobile ? '9.6rem' : '16rem')};
    border-top: ${({ isMobile }) => (isMobile ? '2px solid ' : '2.5px solid')};
    border-bottom: ${({ isMobile }) => (isMobile ? '2px solid ' : '2.5px solid')};
    border-color: ${({ theme }) => theme.colors.darkgrey};

    background-color: ${({ theme }) => theme.colors.orange};

    grid-row-end: span 4;

    cursor: pointer;
  }

  & > div:nth-child(52) {
    height: ${({ isMobile }) => (isMobile ? '9.6rem' : '16rem')};
    border-top: ${({ isMobile }) => (isMobile ? '2px solid ' : '2.5px solid')};
    border-bottom: ${({ isMobile }) => (isMobile ? '2px solid ' : '2.5px solid')};
    border-color: ${({ theme }) => theme.colors.darkgrey};

    background-color: ${({ theme }) => theme.colors.skyblue};
    grid-row-end: span 4;

    cursor: pointer;
  }

  & > div:nth-child(53) {
    height: ${({ isMobile }) => (isMobile ? '9.6rem' : '16rem')};
    border-top: ${({ isMobile }) => (isMobile ? '2px solid ' : '2.5px solid')};
    border-bottom: ${({ isMobile }) => (isMobile ? '2px solid ' : '2.5px solid')};
    border-color: ${({ theme }) => theme.colors.darkgrey};

    background-color: ${({ theme }) => theme.colors.teal};
    grid-row-end: span 4;

    cursor: pointer;
  }

  & > div:nth-child(54) {
    height: ${({ isMobile }) => (isMobile ? '9.6rem' : '16rem')};
    border-top: ${({ isMobile }) => (isMobile ? '2px solid ' : '2.5px solid')};
    border-bottom: ${({ isMobile }) => (isMobile ? '2px solid ' : '2.5px solid')};
    border-color: ${({ theme }) => theme.colors.darkgrey};

    background-color: ${({ theme }) => theme.colors.pink};
    grid-row-end: span 4;

    cursor: pointer;
  }
`;

const DayBox = styled.div`
  display: flex;

  width: 100 %;
  margin-left: 5.7rem;
  grid-template-columns: repeat(7, 1fr);
`;
const DaySlot = styled.div<{ isMobile?: boolean }>`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  width: 100 %;

  ${({ isMobile, theme }) => (isMobile ? theme.fonts.body7 : theme.fonts.label3)};
`;

const DayBoxWrapper = styled.section`
  margin: 1.6rem 0 1rem;
`;

export default TimeLine;
