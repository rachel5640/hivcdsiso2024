import styled from 'styled-components';
import ScrollBarBox from '../../@common/components/ScrollBar';
import { DAYS, ENG_DAYS, TIMES } from '../constant/timeline';

const TimeLine = () => {
  const cells = Array(84)
    .fill(null)
    .map((_, index) => <div key={index}></div>);
  const filledcells = Array(84)
    .fill(null)
    .map((_, index) => <div key={index}>{index + 1}</div>);

  const dayBoxes = DAYS.map((day, index) => <DaySlot key={index}>{day}</DaySlot>);

  const engDayBoxes = ENG_DAYS.map((engDay, index) => <DaySlot key={index}>{engDay}</DaySlot>);

  return (
    <ScrollBarBox>
      <DayBoxWrapper>
        <DayBox>{dayBoxes}</DayBox>
        <DayBox>{engDayBoxes}</DayBox>
      </DayBoxWrapper>
      <Wrapper>
        <TimeLineBox>
          <TimeBox>
            {TIMES.map((time, index) => (
              <div key={index}>{time}</div>
            ))}
          </TimeBox>

          <TimeLineSheet>{cells}</TimeLineSheet>
        </TimeLineBox>
        <TimeLineBoxTop>
          <TimeBox>
            {TIMES.map((time, index) => (
              <div key={index}>{time}</div>
            ))}
          </TimeBox>

          <TimeLineSheetChecked>{filledcells}</TimeLineSheetChecked>
        </TimeLineBoxTop>
      </Wrapper>
    </ScrollBarBox>
  );
};

const Wrapper = styled.div`
  position: relative;

  width: 100%;

  background-color: blue;
`;
const TimeLineBox = styled.section`
  display: flex;
`;

const TimeLineBoxTop = styled.section`
  display: flex;
  position: absolute;
  top: 0;

  width: 100%;
`;

const TimeBox = styled.div`
  display: grid;

  height: 50rem;
  margin-right: 3.7rem;
  grid-template-rows: repeat(7, 1fr);

  & > div {
    ${({ theme }) => theme.fonts.label3};

    height: 8rem;

    &:last-child {
      height: 0;
    }
  }
`;
const TimeLineSheet = styled.div`
  display: grid;

  width: 100%;
  margin-top: 1.2rem;

  grid-template-columns: repeat(6, 1fr); /* 14줄의 가로 그리드 */
  grid-template-rows: repeat(14, 1fr); /* 7줄의 세로 그리드 */

  & > div {
    height: 4rem;
    border-top: 2.5px solid;
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
    border-bottom: 3px solid;
  }
`;

const TimeLineSheetChecked = styled.div`
  display: grid;

  width: 100%;
  margin-top: 1.2rem;

  grid-template-columns: repeat(6, 1fr); /* 14줄의 가로 그리드 */
  grid-template-rows: repeat(14, 1fr); /* 7줄의 세로 그리드 */

  & > div {
    height: 4rem;
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
