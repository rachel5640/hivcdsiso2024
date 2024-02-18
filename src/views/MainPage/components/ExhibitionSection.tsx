import styled from 'styled-components';
import HivcdSisoPoster from '../assets/SISO_Poster_A1.png';
import { EXHIBITION_TEXT } from '../constant/text';

const ExhibitionSection = () => {
  const renderCircles = () => {
    const circles = [
      { id: '1', name: '그린비' },
      { id: '2', name: '드로마픽' },
      { id: '3', name: '아이레이' },
      { id: '4', name: '야즈' },
      { id: '5', name: '애드레날린' },
      { id: '6', name: '프로토' },
      { id: '7', name: '하이픈' },
      { id: '8', name: '한글꼴연구회' },
      { id: '9', name: '힙스' },
    ];

    const firstColumn = circles.slice(0, Math.ceil(circles.length / 2));
    const secondColumn = circles.slice(Math.ceil(circles.length / 2));

    return (
      <>
        <ul>
          {firstColumn.map((circle) => (
            <li key={circle.id}>
              <Circle id={circle.id}></Circle>
              <p>{circle.name}</p>
            </li>
          ))}
        </ul>
        <ul>
          {secondColumn.map((circle) => (
            <li key={circle.id}>
              <Circle id={circle.id}></Circle>
              <p>{circle.name}</p>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <ExhibitionSectionBox>
      <PosterImg src={HivcdSisoPoster} />
      <ExhibitionInfoBox>
        <ExhibitionInfo>
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
        <ExhibitionInfoList>{renderCircles()}</ExhibitionInfoList>
      </ExhibitionInfoBox>
    </ExhibitionSectionBox>
  );
};

const ExhibitionSectionBox = styled.div`
  display: flex;
  gap: 3rem;

  margin: 21.2rem 0 13rem;
`;

const PosterImg = styled.img`
  display: flex;
`;

const ExhibitionInfoBox = styled.div`
  display: block;
`;
const ExhibitionInfo = styled.div`
  padding: 1rem 0;
  border-top: 2px solid black;

  & > h1 {
    ${({ theme }) => theme.fonts.title4};

    margin-bottom: 3.5rem;
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

  & > ul > li > p {
    ${({ theme }) => theme.fonts.body1};
  }

  & > ul > li {
    /* stylelint-disable-next-line declaration-empty-line-before */
    display: flex;
    align-items: center;
  }

  & > ul:nth-child(2) {
    /* stylelint-disable-next-line declaration-empty-line-before */
    margin-left: 9.3rem;
  }
`;

const Circle = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 2.1rem;
  /* stylelint-disable-next-line declaration-property-unit-allowed-list */
  border-radius: 50%;

  background-color: ${({ id }) => {
    switch (id) {
      case '1':
        return '#FA538F';
      case '2':
        return '#E30629';
      case '3':
        return '#FED302';
      case '4':
        return '#A31AA3';
      case '5':
        return '#FF4802';
      case '6':
        return '#00837A';
      case '7':
        return '#35DE25';
      case '8':
        return '#4ABFEA';
      case '9':
        return '#0768F4';
    }
  }};
`;

export default ExhibitionSection;
