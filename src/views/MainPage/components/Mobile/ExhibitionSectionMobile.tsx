import styled from 'styled-components';
import SisoPoster from '../../assets/siso_poster_web.jpg';
import { EXHIBITION_TEXT } from '../../constant/text';
import { RenderCircles } from '../RenderCircles';

const ExhibitionSectionMobile = () => {
  return (
    <>
      <Poster src={SisoPoster} alt="Siso_Poster_OurIndex" />
      <Title>《OUR INDEX》</Title>
      <Description>{EXHIBITION_TEXT.EXHIBITION_KEYNOTE}</Description>
      <ExhibitionInfo>
        <p>{EXHIBITION_TEXT.EXHIBITION_PLACE}</p>
        <p>{EXHIBITION_TEXT.EXHIBITION_PLACE_DETAIL}</p>
      </ExhibitionInfo>
      <ExhibitionInfo>
        <p>{EXHIBITION_TEXT.EXHIBITION_DAY}</p>
        <p>{EXHIBITION_TEXT.EXHIBITION_TIME}</p>
      </ExhibitionInfo>
      <ExhibitionInfo>
        <div>
          <RenderCircles ismobile={true} />
        </div>
      </ExhibitionInfo>
    </>
  );
};

const Poster = styled.img`
  width: 100%;
  margin-bottom: 3.1rem;
`;

const Title = styled.h1`
  width: 100%;
  ${({ theme }) => theme.fonts.body6};

  margin-bottom: 0.8rem;
  padding-top: 0.8rem;
  border-top: 2px solid black;
`;

const Description = styled.p`
  ${({ theme }) => theme.fonts.body9_2};

  margin-bottom: 0.8rem;
`;

const ExhibitionInfo = styled.p`
  width: 100%;
  padding: 0.8rem 0;
  border-top: 2px solid black;

  &:last-child {
    border-bottom: 2px solid black;
  }

  & > p {
    ${({ theme }) => theme.fonts.body9_2};
  }

  & > div {
    display: flex;
  }

  & > div > ul {
    margin-right: 3.15rem;
  }

  & > div > ul > li {
    display: flex;
    align-items: center;

    margin-bottom: 0.2rem;
  }

  & > div > ul > li > p {
    ${({ theme }) => theme.fonts.body9_2};
  }
`;
export default ExhibitionSectionMobile;
