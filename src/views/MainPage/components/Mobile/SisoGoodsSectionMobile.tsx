import styled from 'styled-components';
import DummyImg from '../../assets/dummy_img.png';
import { forwardRef } from 'react';

const SisoGoodsSectionMobile = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <SisoGoodsSection ref={ref}>
      <h1>2024 SISO Goods</h1>
      <GoodsImg src={DummyImg}></GoodsImg>
      <GoodsImg src={DummyImg}></GoodsImg>
    </SisoGoodsSection>
  );
});

const SisoGoodsSection = styled.div`
  width: 100%;
  padding-top: 8.8rem;

  & > h1 {
    ${({ theme }) => theme.fonts.title2};

    margin-bottom: 1.8rem;
    padding-bottom: 1rem;
    border-bottom: 1.5px solid black;
  }
`;
const GoodsImg = styled.img`
  width: calc(100vw - 3.2rem);
`;

export default SisoGoodsSectionMobile;
