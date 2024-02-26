import styled from 'styled-components';
import { forwardRef } from 'react';
import { COMMITTEE_DATA } from '../../constant/committeeData';

const ExhibitionCommitteeMobile = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <CommiteeMobileBox ref={ref}>
      <h1>EXHIBITION COMMITTEE</h1>
      {COMMITTEE_DATA.map((data, index) => (
        <div key={index}>
          <h1>{data.category}</h1>
          <h2>{data.members}</h2>
        </div>
      ))}
    </CommiteeMobileBox>
  );
});

const CommiteeMobileBox = styled.div`
  width: 100%;
  margin-top: 7rem;

  & > h1 {
    ${({ theme }) => theme.fonts.title2};

    margin-bottom: 1.8rem;
    padding-bottom: 1rem;
    border-bottom: 1.5px solid black;
  }

  & > div {
    display: flex;
    justify-content: space-between;

    width: 100%;
    padding: 0.5rem 0;
    border-bottom: 1px solid black;
  }

  & > div > h1 {
    ${({ theme }) => theme.fonts.body9};

    word-break: keep-all;

    width: 50%;
  }

  & > div > h2 {
    ${({ theme }) => theme.fonts.body9_2};

    word-break: keep-all;

    width: 50%;
  }
`;

export default ExhibitionCommitteeMobile;
