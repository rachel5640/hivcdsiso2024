import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Loading from '../../@common/components/Loading';
import { TEAM_EXHIBITION_INFO } from '../constants/text';
import { DATA_SETS } from '../../MainPage/constant/ProjectData';

interface ProjectSectionProps {
  index: number;
  navbarheight: number;
}

interface ProjectSectionWrapperProps {
  navbarheight: number;
}

const ProjectSection = ({ index, navbarheight }: ProjectSectionProps) => {
  const exhibitionInfo = TEAM_EXHIBITION_INFO[index];
  const [loading, setLoading] = useState(true);
  const [expandedItemIndex, setExpandedItemIndex] = useState(-1);
  const currentDataSet = DATA_SETS[index] || [];

  const handleListItemClick = (index: number) => {
    setExpandedItemIndex(index === expandedItemIndex ? -1 : index);
  };

  useEffect(() => {
    setExpandedItemIndex(-1);
  }, [index]);

  return (
    <ProjectSectionWrapper navbarheight={navbarheight}>
      <ProjectList $isexpanded={expandedItemIndex >= 0}>
        {currentDataSet.map((item, index) => (
          <ListItem
            key={index}
            onClick={() => handleListItemClick(index)}
            $isdimmed={expandedItemIndex >= 0 && index == expandedItemIndex}>
            <ListImg src={item.thumbnail} alt={item.title} />
            <ProjectText>
              <h1>{item.title}</h1>
              <h2>{item.author}</h2>
            </ProjectText>
          </ListItem>
        ))}
      </ProjectList>

      <LineBox>
        <Line />
      </LineBox>
      <TextArea $isexpanded={expandedItemIndex >= 0}>
        {expandedItemIndex >= 0 && currentDataSet.length > 0 && currentDataSet[expandedItemIndex] ? (
          <>
            <TitleBox>
              <h1>{currentDataSet[expandedItemIndex].title}</h1>
              <h2>{currentDataSet[expandedItemIndex].author}</h2>
            </TitleBox>
            <p>{currentDataSet[expandedItemIndex].text}</p>
            {loading && <Loading />}
            {currentDataSet[expandedItemIndex].image.map((url, index) => (
              <img key={index} src={url} alt={`Image ${index + 1}`} onLoad={() => setLoading(false)} />
            ))}
          </>
        ) : (
          <>
            <h1>{exhibitionInfo.Title}</h1>
            <p>{exhibitionInfo.text}</p>
            <ParticipantBox>
              <h1>아트디렉터</h1>
              <h2>{exhibitionInfo.artdirector}</h2>
              <h1>참여자</h1>
              <h2>{exhibitionInfo.participant}</h2>
            </ParticipantBox>
            {loading && <Loading />}
            <img src={exhibitionInfo.image} alt={exhibitionInfo.Title} onLoad={() => setLoading(false)} />
          </>
        )}
      </TextArea>
    </ProjectSectionWrapper>
  );
};

const ProjectSectionWrapper = styled.section<ProjectSectionWrapperProps>`
  display: flex;

  width: 100%;
  height: calc(100vh - ${({ navbarheight }) => navbarheight}px - 7.6rem);
  margin-top: 2rem;
  padding: 0 8.2rem;
`;

const ProjectList = styled.section<{ $isexpanded: boolean }>`
  overflow: scroll;

  width: ${({ $isexpanded }) => ($isexpanded ? '39%' : '58%')};
  height: 100%;
  border-top: 3px solid;

  transition: width 0.3s ease-in-out;
`;

const ListItem = styled.div<{ $isdimmed: boolean }>`
  display: flex;
  align-items: center;

  width: 100%;
  height: 16rem;
  padding: 2rem 0;
  border-bottom: 3px solid black;

  background-color: ${({ $isdimmed, theme }) => ($isdimmed ? theme.colors.grey : theme.colors.white)};

  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

const ListImg = styled.img`
  width: 16rem;
  height: 12rem;
  margin-right: 2.3rem;

  background-color: lightgrey;
  object-fit: cover;
`;

const ProjectText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;

  & > h1 {
    ${({ theme }) => theme.fonts.body5};

    word-break: keep-all;
  }

  & > h2 {
    ${({ theme }) => theme.fonts.body5_2};

    word-break: keep-all;
  }
`;

const LineBox = styled.div`
  display: flex;
  justify-content: center;

  width: 3%;
  height: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin: 1.4rem 0;

  & > h1 {
    ${({ theme }) => theme.fonts.title3};
  }

  & > h2 {
    ${({ theme }) => theme.fonts.body3};
  }
`;

const Line = styled.div`
  width: 3px;
  height: 95%;

  background-color: black;
`;
const TextArea = styled.section<{ $isexpanded: boolean }>`
  overflow: scroll;
  top: 0;

  width: ${({ $isexpanded }) => ($isexpanded ? '58%' : '39%')};
  height: 100%;
  margin-bottom: 2rem;
  border-top: 3px solid;

  transition: width 0.3s ease-in-out;

  & > img {
    width: 100%;
    margin: 1rem 0 0;
  }

  & > h1 {
    ${({ theme }) => theme.fonts.title3};

    margin-top: 1.4rem;
    word-break: keep-all;
  }

  & > p {
    ${({ theme }) => theme.fonts.body5};

    word-break: keep-all;

    margin-top: 1.5rem;
  }
`;

const ParticipantBox = styled.div`
  display: grid;
  gap: 10px;

  margin-top: 2.1rem;
  margin-bottom: 2rem;
  grid-template-columns: 1fr 3fr;

  & > h1 {
    ${({ theme }) => theme.fonts.body4};
  }

  & > h2 {
    ${({ theme }) => theme.fonts.body5};

    word-break: keep-all;
  }
`;

export default ProjectSection;
