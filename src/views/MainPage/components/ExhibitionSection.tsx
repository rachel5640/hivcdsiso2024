import styled from 'styled-components';
import SisoPoster from '../assets/siso_poster_web.jpg';
import { EXHIBITION_TEXT } from '../constant/text';
import { RenderCircles } from './RenderCircles';

const ExhibitionSection = () => {
  return (
    <ExhibitionSectionBox>
      <PosterImg src={SisoPoster} alt="siso poster Our index" />
      <ExhibitionInfoBox>
        <ExhibitionInfo>
          <h2>2024 홍익대학교 시각디자인과 소모임 축제 주간 : SISO</h2>
          <br />
          <h1>《OUR INDEX》</h1>
          <p>{EXHIBITION_TEXT.EXHIBITION_KEYNOTE}</p>
        </ExhibitionInfo>
        <ExhibitionInfo>
          <p>{EXHIBITION_TEXT.EXHIBITION_PLACE}</p>
          <p>{EXHIBITION_TEXT.EXHIBITION_PLACE_DETAIL}</p>
        </ExhibitionInfo>
        <ExhibitionInfo>
          <p>{EXHIBITION_TEXT.EXHIBITION_DAY}</p>
          <p>{EXHIBITION_TEXT.EXHIBITION_TIME}</p>
        </ExhibitionInfo>
        <ExhibitionInfoList>
          <RenderCircles $ismobile={false} />
        </ExhibitionInfoList>
      </ExhibitionInfoBox>
    </ExhibitionSectionBox>
  );
};

const ExhibitionSectionBox = styled.div`
  display: flex;
  gap: 3rem;

  width: 100%;
  margin: 10rem 0 13rem;
  padding-top: 10.6rem;
`;

const PosterImg = styled.img`
  align-self: flex-start;

  width: 50%;
`;

const ExhibitionInfoBox = styled.div`
  display: block;

  width: 100%;
`;
const ExhibitionInfo = styled.div`
  padding: 1rem 0;
  border-top: 2px solid black;

  & > h1 {
    ${({ theme }) => theme.fonts.title4};

    margin-bottom: 3.5rem;
  }

  & > h2 {
    ${({ theme }) => theme.fonts.body1};

    padding-bottom: 0.5rem;
    border-bottom: 2px solid;
    word-break: keep-all;
  }

  & > p {
    ${({ theme }) => theme.fonts.body1};

    word-break: keep-all;
  }
`;

const ExhibitionInfoList = styled.div`
  display: flex;

  padding: 1rem 0;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

export default ExhibitionSection;
