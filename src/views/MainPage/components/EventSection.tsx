import styled from 'styled-components';
import { EVENT_TEXT } from '../constant/text';
import { ImgFind } from '../assets';
import { ImgStamp } from '../assets';

const EventSection = () => {
  return (
    <EventSectionBox>
      <EventBox>
        <h1>STAMP TOUR</h1>
        <h2>{EVENT_TEXT.STAMP_TOUR}</h2>
        <EventSubText>
          <p>{EVENT_TEXT.STAMP_TOUR_CAPTION}</p>
          <ImgStamp />
        </EventSubText>
      </EventBox>
      <EventBox>
        <h1>INDEX FINDING</h1>
        <h2>{EVENT_TEXT.INDEX_FINDING}</h2>

        <EventSubText>
          <p>{EVENT_TEXT.INDEX_FINDING_CAPTION}</p>
          <ImgFind />
        </EventSubText>
      </EventBox>
    </EventSectionBox>
  );
};

const EventSectionBox = styled.section`
  display: flex;
  gap: 3rem;

  width: 100%;
  margin-bottom: 13rem;
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
`;

const EventSubText = styled.div`
  display: flex;

  & > p {
    ${({ theme }) => theme.fonts.body1};

    margin: 2.2rem 1rem 0 0;
    word-break: keep-all;
  }
`;

export default EventSection;
