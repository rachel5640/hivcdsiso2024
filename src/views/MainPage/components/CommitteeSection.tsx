import styled from 'styled-components';
import { forwardRef } from 'react';
import { COMMITTEE_DATA } from '../constant/committeeData';

const CommitteeSection = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <CommitteeSectionBox ref={ref}>
      <Title>EXHIBITION COMMITTEE</Title>
      <TextBox>
        {COMMITTEE_DATA.map((item, index) => (
          <TextList key={index}>
            <h1>{item.category}</h1>
            <MemberList>{item.members}</MemberList>
          </TextList>
        ))}
      </TextBox>
    </CommitteeSectionBox>
  );
});

const CommitteeSectionBox = styled.section`
  width: 100%;
  margin-bottom: 5rem;
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.title1};

  margin-bottom: 2.4rem;
  padding-bottom: 1.3rem;
  border-bottom: 2.5px solid;
`;

const TextBox = styled.div`
  display: grid;
  gap: 1.3rem;

  width: 100%;
  grid-template-columns: repeat(2, 1fr);
`;

const TextList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  padding-bottom: 0.5rem;
  border-bottom: 2.5px solid;

  & > h1 {
    ${({ theme }) => theme.fonts.body1};
  }
`;

const MemberList = styled.div`
  ${({ theme }) => theme.fonts.body1_2};

  display: flex;

  width: 99%;
  word-break: keep-all;
`;

export default CommitteeSection;
