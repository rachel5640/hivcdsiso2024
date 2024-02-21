import styled from 'styled-components';
import { EVENT_TEXT } from '../../constant/text';
import { ImgStamp, ImgFind } from '../../assets';

const EventSectionMobile = () => {
  return (
    <>
      <EventSectionBox>
        <h1>STAMP TOUR</h1>

        <h2>{EVENT_TEXT.STAMP_TOUR}</h2>
        <div>
          <p>{EVENT_TEXT.STAMP_TOUR_CAPTION}</p>
          <ImgStamp />
        </div>
      </EventSectionBox>
      <EventSectionBox>
        <h1>INDEX FINDING</h1>

        <h2>{EVENT_TEXT.INDEX_FINDING}</h2>
        <div>
          <p>{EVENT_TEXT.INDEX_FINDING_CAPTION}</p>
          <ImgFind />
        </div>
      </EventSectionBox>
    </>
  );
};

const EventSectionBox = styled.section`
  width: 100%;
  margin-top: 7rem;

  & > h1 {
    ${({ theme }) => theme.fonts.title2};

    margin-bottom: 1.8rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid black;
    border-style: dashed;
    word-break: keep-all;
  }

  & > h2 {
    ${({ theme }) => theme.fonts.body9_2};

    word-break: keep-all;
  }

  & > div {
    display: flex;
    word-break: keep-all;
  }

  & > div > p {
    padding-top: 1rem;
    ${({ theme }) => theme.fonts.body9_2};
  }

  & > div > svg {
    height: 15vh;
    margin-top: 0.5rem;
  }
`;

export default EventSectionMobile;
