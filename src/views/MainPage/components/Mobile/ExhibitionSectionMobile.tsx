import styled from 'styled-components';
import SisoPoster from '../../assets/siso_poster_web.jpg';
import { EXHIBITION_TEXT } from '../../constant/text';
import { RenderCircles } from '../RenderCircles';
import { forwardRef } from 'react';

const ExhibitionSectionMobile = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref}>
      <Poster src={SisoPoster} alt="Siso_Poster_OurIndex" />
      <ExhibitionInfo>
        <h2>2024 홍익대학교 시각디자인과 소모임 축제 주간 : SISO</h2>
      </ExhibitionInfo>
      <Title>《OUR INDEX》</Title>
      <Description>{EXHIBITION_TEXT.EXHIBITION_KEYNOTE}</Description>
      <ExhibitionInfo>
        <div>{EXHIBITION_TEXT.EXHIBITION_PLACE}</div>
        <div>{EXHIBITION_TEXT.EXHIBITION_PLACE_DETAIL}</div>
      </ExhibitionInfo>
      <ExhibitionInfo>
        <div>{EXHIBITION_TEXT.EXHIBITION_DAY}</div>
        <div>{EXHIBITION_TEXT.EXHIBITION_TIME}</div>
      </ExhibitionInfo>
      <ExhibitionInfo>
        <div>
          <RenderCircles $ismobile={true} />
        </div>
      </ExhibitionInfo>
    </div>
  );
});

const Poster = styled.img`
  width: 100%;
  margin-bottom: 3.1rem;
  padding-top: 8.8rem;
`;

const Title = styled.h1`
  width: 100%;
  ${({ theme }) => theme.fonts.body6};

  margin-bottom: 0.8rem;
  padding-top: 0.8rem;
  border-top: 1.75px solid black;
`;

const Description = styled.div`
  ${({ theme }) => theme.fonts.body9_2};

  margin-bottom: 0.8rem;
`;

const ExhibitionInfo = styled.div`
  width: 100%;
  padding: 0.8rem 0;
  border-top: 1.75px solid black;

  &:last-child {
    border-bottom: 1.75px solid black;
  }

  & > div {
    display: flex;
    ${({ theme }) => theme.fonts.body9_2};
  }

  & > h2 {
    ${({ theme }) => theme.fonts.body9_2};
  }
`;
export default ExhibitionSectionMobile;
