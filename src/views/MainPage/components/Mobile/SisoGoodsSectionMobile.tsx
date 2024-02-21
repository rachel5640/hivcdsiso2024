import styled from 'styled-components';
import DummyImg from '../../assets/dummy_img.png';

const SisoGoodsSectionMobile = () => {
  return (
    <SisoGoodsSection>
      <h1>2024 SISO Goods</h1>
      <GoodsImg src={DummyImg}></GoodsImg>
      <GoodsImg src={DummyImg}></GoodsImg>
      <GoodsImg src={DummyImg}></GoodsImg>
      <GoodsImg src={DummyImg}></GoodsImg>
    </SisoGoodsSection>
  );
};

const SisoGoodsSection = styled.div`
  width: 100%;
  margin-top: 7rem;

  & > h1 {
    ${({ theme }) => theme.fonts.title2};

    margin-bottom: 1.8rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid black;
    border-style: dashed;
  }
`;
const GoodsImg = styled.img`
  width: calc(100vw - 3.2rem);
`;

export default SisoGoodsSectionMobile;
