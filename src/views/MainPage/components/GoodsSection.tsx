import styled from 'styled-components';

const GoodsSection = () => {
  return (
    <GoodsSectionBox>
      <Title>2024 SISO Goods</Title>
      <ImgBox>
        <div>3/3 OPEN!</div>
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
  border-bottom: 2px solid black;
`;

const ImgBox = styled.div`
  display: grid;
  gap: 1rem;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 40rem;

    color: ${({ theme }) => theme.colors.grey};
    ${({ theme }) => theme.fonts.title1};
  }
`;

export default GoodsSection;
