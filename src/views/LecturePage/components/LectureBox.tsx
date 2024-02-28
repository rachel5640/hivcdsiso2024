import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface LectureBoxWrapperProps {
  $expanded: boolean;
  number: number;
  $ismobile?: boolean;
}

interface LectureboxProps {
  number: number;
  blacknumber: string;
  title: string;
  date: string;
  description: string;
  instagram: string;
  website: string;
  clickedNumber: number | null;
  $ismobile?: boolean;
}

const Lecturebox = ({
  number,
  blacknumber,
  title,
  date,
  description,
  instagram,
  website,
  clickedNumber,
  $ismobile,
}: LectureboxProps) => {
  const [$expanded, set$Expanded] = useState(false);
  const lectureRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    set$Expanded(!$expanded);
  };

  useEffect(() => {
    if (number === clickedNumber && lectureRef.current) {
      set$Expanded(true);
      lectureRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      set$Expanded(false);
    }
  }, [number, clickedNumber]);

  return (
    <LectureBoxWrapper
      onClick={toggleExpand}
      $expanded={$expanded}
      number={number}
      $ismobile={$ismobile}
      ref={lectureRef}>
      <TitleBox $ismobile={$ismobile}>
        <LectureNumber $ismobile={$ismobile}>{blacknumber}</LectureNumber>
        <LectureInfo $ismobile={$ismobile}>
          <h1>{title}</h1>
          <h1>{date} </h1>
        </LectureInfo>
      </TitleBox>
      <DetailInfoWrapper $expanded={$expanded} $ismobile={$ismobile}>
        <DetailInfo $ismobile={$ismobile}>
          <p>{description}</p>
          <div>
            {instagram !== '' && (
              <a href={instagram} target="_blank">
                SNS
              </a>
            )}
            {website !== '' && (
              <a href={website} target="_blank">
                Website
              </a>
            )}
          </div>
        </DetailInfo>
      </DetailInfoWrapper>
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
          return `${theme.colors.red}`;
        case 4:
          return `${theme.colors.orange}`;
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

  &:last-child {
    border-bottom: ${({ $ismobile }) => ($ismobile ? '2px solid black' : '0.1px solid white')};
  }
`;

const TitleBox = styled.div<{ $ismobile?: boolean }>`
  display: flex;

  margin-bottom: ${({ $ismobile }) => ($ismobile ? '0' : '0.7rem')};
  padding: ${({ $ismobile }) => ($ismobile ? '1rem 0 1rem' : '1.4rem 0 0.8rem')};
`;

const DetailInfoWrapper = styled.div<{ $expanded: boolean; $ismobile?: boolean }>`
  overflow: hidden;

  max-height: ${({ $expanded }) => ($expanded ? '100rem' : '0')};

  transition: max-height 0.5s ease-in-out;
`;
const LectureNumber = styled.p<{ $ismobile?: boolean }>`
  width: ${({ $ismobile }) => ($ismobile ? '1rem' : '3rem')};
  ${({ $ismobile, theme }) => ($ismobile ? theme.fonts.title8 : theme.fonts.title5)};

  margin-right: ${({ $ismobile }) => ($ismobile ? '2rem' : '2rem')};
  padding-left: ${({ $ismobile }) => ($ismobile ? '0.5rem' : '1rem')};
`;

const LectureInfo = styled.div<{ $ismobile?: boolean }>`
  & > h1 {
    ${({ $ismobile, theme }) => ($ismobile ? theme.fonts.title8 : theme.fonts.title5)};
  }

  & > h2 {
    ${({ $ismobile, theme }) => ($ismobile ? theme.fonts.title7 : theme.fonts.title5)};
  }
`;

const DetailInfo = styled.div<{ $ismobile?: boolean }>`
  width: 100%;
  padding-right: 1rem;

  & > p {
    ${({ $ismobile, theme }) => ($ismobile ? theme.fonts.body10 : theme.fonts.body5)};

    margin: ${({ $ismobile }) => ($ismobile ? '0rem 0 0 3rem' : '0 0 0.5rem 4.8rem')};
  }

  & > div {
    display: flex;

    margin: ${({ $ismobile }) => ($ismobile ? '0.6rem 2rem 1.3rem 3rem ' : '0 4.8rem 3rem 4.5rem')};
  }

  & > div > a {
    ${({ $ismobile, theme }) => ($ismobile ? theme.fonts.label4 : theme.fonts.label3)};

    margin-top: ${({ $ismobile }) => ($ismobile ? '0.5rem' : '0.2rem')};
    margin-right: ${({ $ismobile }) => ($ismobile ? '0.3rem' : '0.7rem')};
    padding: ${({ $ismobile }) => ($ismobile ? '0.4rem 1rem' : '0.2rem 1rem;')};
    border: ${({ $ismobile }) => ($ismobile ? '1.5px solid black' : '2.5px solid black')};
    border-radius: 21px;

    color: black;

    &:hover {
      background-color: white;

      color: black;
    }
  }
`;

export default Lecturebox;
