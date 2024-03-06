import styled from 'styled-components';
import SisoGoodsWeb from '../assets/siso_goods_web.jpg';

const GoodsSection = () => {
  return (
    <GoodsSectionBox>
      <Title>2024 SISO Goods</Title>
      <ImgBox>
        <img src={SisoGoodsWeb} alt="Siso-Goods-Image" />
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
  border-bottom: 2.5px solid black;
`;

const ImgBox = styled.div`
  gap: 1rem;

  & > img {
    width: 100%;
  }
`;

export default GoodsSection;
