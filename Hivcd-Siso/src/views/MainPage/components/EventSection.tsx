import styled from 'styled-components';
import { EVENT_TEXT } from '../constant/text';

const EventSection = () => {
  return (
    <EventSectionBox>
      <EventBox>
        <h1>STAMP TOUR</h1>
        <h2>{EVENT_TEXT.STAMP_TOUR}</h2>
        <p>{EVENT_TEXT.STAMP_TOUR_CAPTION}</p>
      </EventBox>
      <EventBox>
        <h1>INDEX FINDING</h1>
        <h2>{EVENT_TEXT.INDEX_FINDING}</h2>
        <p>{EVENT_TEXT.INDEX_FINDING_CAPTION}</p>
      </EventBox>
    </EventSectionBox>
  );
};

const EventSectionBox = styled.section`
  display: flex;
  gap: 3rem;

  width: 100%;
`;

const EventBox = styled.div`
  display: block;

  width: 100%;

  & > h1 {
    ${({ theme }) => theme.fonts.title1};

    margin-bottom: 2.4rem;
    padding-bottom: 1.3rem;
    border-bottom: 2px dashed;
  }

  & > h2 {
    ${({ theme }) => theme.fonts.body1};

    word-break: keep-all;
  }

  & > p {
    ${({ theme }) => theme.fonts.body1};

    margin-top: 2.3rem;
  }
`;

export default EventSection;
