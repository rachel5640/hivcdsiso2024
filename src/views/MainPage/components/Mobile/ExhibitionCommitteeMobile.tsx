import styled from 'styled-components';

const ExhibitionCommitteeMobile = () => {
  return (
    <CommiteeMobileBox>
      <h1>EXHIBITION COMMITTEE</h1>
    </CommiteeMobileBox>
  );
};

const CommiteeMobileBox = styled.section`
  width: 100%;
  margin-top: 7rem;

  & > h1 {
    ${({ theme }) => theme.fonts.title2};

    margin-bottom: 2.4rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid black;
    border-style: dashed;
  }
`;

export default ExhibitionCommitteeMobile;
