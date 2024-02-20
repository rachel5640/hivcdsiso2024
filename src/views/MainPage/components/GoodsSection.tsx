import styled from 'styled-components';
import DummyImg from '../assets/dummy_img.png';

const GoodsSection = () => {
  return (
    <GoodsSectionBox>
      <Title>2024 SISO Goods</Title>
      <ImgBox>
        <img src={DummyImg} />
        <img src={DummyImg} />
        <img src={DummyImg} />
        <img src={DummyImg} />
      </ImgBox>
    </GoodsSectionBox>
  );
};

const GoodsSectionBox = styled.section`
  width: 100%;
  margin-bottom: 13rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.title1};

  margin-bottom: 2.4rem;
  padding-bottom: 1.3rem;
  border-bottom: 2px dashed;
`;

const ImgBox = styled.div`
  display: grid;
  gap: 1rem;

  grid-template-columns: repeat(2, 1fr);

  & > img {
    width: 100%;
  }
`;

export default GoodsSection;
