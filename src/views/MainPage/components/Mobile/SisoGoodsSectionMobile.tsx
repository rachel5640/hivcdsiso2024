import styled from 'styled-components';
import { forwardRef } from 'react';

const SisoGoodsSectionMobile = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <SisoGoodsSection ref={ref}>
      <h1>2024 SISO Goods</h1>
      <div>3/3 OPEN!</div>
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

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 20rem;

    ${({ theme }) => theme.fonts.title2};

    color: ${({ theme }) => theme.colors.grey};
  }
`;

export default SisoGoodsSectionMobile;
