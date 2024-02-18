import { useState } from 'react';
import styled from 'styled-components';

interface LectureBoxWrapperProps {
  expanded: boolean;
  number: number;
}

interface LectureboxProps {
  number: number;
  title: string;
  date: string;
  description: string;
  instagram: string;
  website: string;
}

const Lecturebox = ({ number, title, date, description, instagram, website }: LectureboxProps) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <LectureBoxWrapper onClick={toggleExpand} expanded={expanded} number={number}>
      <TitleBox>
        <LectureNumber>{number}</LectureNumber>
        <LectureInfo>
          <h1>{title}</h1>
          <h1>{date} </h1>
        </LectureInfo>
      </TitleBox>
      {expanded && (
        <DetailInfo>
          <p>{description}</p>
          <div>
            {instagram !== '' && (
              <a href={instagram} target="_blank">
                Instagram
              </a>
            )}
            {website !== '' && (
              <a href={website} target="_blank">
                Website
              </a>
            )}
          </div>
        </DetailInfo>
      )}
    </LectureBoxWrapper>
  );
};

const LectureBoxWrapper = styled.div<LectureBoxWrapperProps>`
  width: 100%;

  border-bottom: 2px solid;
  cursor: pointer;
  word-break: keep-all;

  &:hover {
    background-color: ${({ number, theme }) => {
      switch (number) {
        case 1:
          return `${theme.colors.purple}`;
        case 2:
          return `${theme.colors.blue}`;
        case 3:
          return `${theme.colors.orange}`;
        case 4:
          return `${theme.colors.red}`;
        case 5:
          return `${theme.colors.skyblue}`;
        case 6:
          return `${theme.colors.yellow}`;
        case 7:
          return `${theme.colors.teal}`;
        case 8:
          return `${theme.colors.lightgreen}`;
        case 9:
          return `${theme.colors.pink}`;
        default:
          return 'black';
      }
    }};
  }
`;

const TitleBox = styled.div`
  display: flex;

  padding: 1.6rem 0 1rem;
  margin-bottom: 1rem;
`;

const LectureNumber = styled.p`
  ${({ theme }) => theme.fonts.title5};

  margin-right: 4rem;
`;

const LectureInfo = styled.p`
  & > h1 {
    ${({ theme }) => theme.fonts.title5};
  }
`;

const DetailInfo = styled.div`
  width: 100%;
  padding-right: 1rem;

  & > p {
    ${({ theme }) => theme.fonts.body5};

    margin: 0 0 2.2rem 4.8rem;
  }

  & > div {
    display: flex;

    margin-bottom: 3.5rem;
    margin-left: 4.8rem;
  }

  & > div > a {
    ${({ theme }) => theme.fonts.label2};

    margin-right: 0.7rem;
    padding: 0.1rem 1.2rem;
    border: 2.3px solid black;
    border-radius: 21px;
    color: black;
    &: hover {
      background-color: black;
      color: white;
    }
  }
`;

export default Lecturebox;
