import styled from 'styled-components';
import ScrollBarBox from '../../@common/components/ScrollBar';
const days = ['월', '화', '수', '목', '금', '토'];
const engDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const times = ['2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm'];

const TimeLine = () => {
  const cells = Array(98)
    .fill(null)
    .map((_, index) => <div key={index}></div>);

  const dayBoxes = days.map((day, index) => <DaySlot key={index}>{day}</DaySlot>);

  const engDayBoxes = engDays.map((engDay, index) => <DaySlot key={index}>{engDay}</DaySlot>);

  return (
    <ScrollBarBox>
      <DayBoxWrapper>
        <DayBox>{dayBoxes}</DayBox>
        <DayBox>{engDayBoxes}</DayBox>
      </DayBoxWrapper>
      <TimeLineBox>
        <TimeBox>
          {times.map((time, index) => (
            <div key={index}>{time}</div>
          ))}
        </TimeBox>
        <TimeLineSheet>{cells}</TimeLineSheet>
      </TimeLineBox>
    </ScrollBarBox>
  );
};

const TimeLineBox = styled.section`
  display: flex;
`;

const TimeBox = styled.div`
  display: grid;

  height: 50rem;
  margin-right: 3.7rem;
  grid-template-rows: repeat(7, 1fr);

  & > div {
    ${({ theme }) => theme.fonts.label3};

    height: 8rem;
  }
`;
const TimeLineSheet = styled.div`
  display: grid;

  width: 100%;
  margin-top: 1.2rem;

  grid-template-columns: repeat(7, 1fr); /* 14줄의 가로 그리드 */
  grid-template-rows: repeat(14, 1fr); /* 7줄의 세로 그리드 */

  & > div {
    height: 4rem;
    border-top: 3px solid;
    border-color: ${({ theme }) => theme.colors.darkgrey};
  }

  & > div:nth-child(14n-6),
  & > div:nth-child(14n-5),
  & > div:nth-child(14n-4),
  & > div:nth-child(14n-3),
  & > div:nth-child(14n-2),
  & > div:nth-child(14n-1),
  & > div:nth-child(14n) {
    border-top: 1.5px dashed;
    border-color: ${({ theme }) => theme.colors.darkgrey};
  }

  & > div:nth-child(n + 92):nth-child(-n + 98) {
    border-bottom: 3px solid;
  }
`;

const DayBox = styled.div`
  display: flex;

  width: 100 %;
  margin-left: 5.7rem;
  grid-template-columns: repeat(7, 1fr);
`;
const DaySlot = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  width: 100 %;

  ${({ theme }) => theme.fonts.label3};
`;

const DayBoxWrapper = styled.section`
  margin: 1.6rem 0 1rem;
`;
export default TimeLine;
