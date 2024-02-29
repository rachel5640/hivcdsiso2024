import styled from 'styled-components';
import { forwardRef } from 'react';
import SisoGoodsMobileOne from '../../assets/siso_goods_mobile_1.jpg';
import SisoGoodsMobileTwo from '../../assets/siso_goods_mobile_2.jpg';

const SisoGoodsSectionMobile = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <SisoGoodsSection ref={ref}>
      <h1>2024 SISO Goods</h1>
      <img src={SisoGoodsMobileOne} alt="Siso Goods Sticker" />
      <img src={SisoGoodsMobileTwo} alt="Siso Goods " />
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

  & > img {
    width: 100%;
    margin-bottom: 1rem;

    ${({ theme }) => theme.fonts.title2};

    color: ${({ theme }) => theme.colors.grey};
  }

  & > img:last-child {
    margin-bottom: 0;
  }
`;

export default SisoGoodsSectionMobile;
