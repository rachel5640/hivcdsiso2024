import styled from 'styled-components';
import { TEAM_EXHIBITION_INFO } from '../constants/text';

interface ProjectSectionProps {
  index: number;
}

const ProjectSection = ({ index }: ProjectSectionProps) => {
  const exhibitionInfo = TEAM_EXHIBITION_INFO[index];

  return (
    <ProjectSectionWrapper>
      <ProjectList>
        <Dummy>3/15 Open!</Dummy>
        {/* <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem>
          <ListItem></ListItem> */}
      </ProjectList>

      <LineBox>
        <Line />
      </LineBox>
      <TextArea>
        <h1>{exhibitionInfo.Title}</h1>
        <p>{exhibitionInfo.text}</p>
        <ParticipantBox>
          <h1>아트디렉터</h1>
          <h2>{exhibitionInfo.artdirector}</h2>
          <h1>참여자</h1>
          <h2>{exhibitionInfo.participant}</h2>
        </ParticipantBox>
        <img src={exhibitionInfo.image} alt={exhibitionInfo.Title} />
      </TextArea>
    </ProjectSectionWrapper>
  );
};

const ProjectSectionWrapper = styled.section`
  display: grid;
  position: sticky;
  top: 7.6rem;

  width: 100%;
  height: 100%;
  margin-top: 2rem;
  padding: 0 8.2rem;

  grid-column-gap: 1rem;
  grid-template-columns: repeat(36, 1fr);
`;

const ProjectList = styled.section`
  min-height: calc(100vh - 16.4rem);
  border-top: 3px solid;
  grid-column: span 20;
`;

// const ListItem = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   width: 100%;
//   height: 15rem;
//   border-bottom: 3px solid black;

//   color: ${({ theme }) => theme.colors.grey};

//   cursor: pointer;

//   ${({ theme }) => theme.fonts.title1};

//   &:last-child {
//     border-bottom: none;
//   }
// `;

const Dummy = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 40%;
  ${({ theme }) => theme.fonts.title1};

  color: ${({ theme }) => theme.colors.grey};
`;

const LineBox = styled.div`
  display: flex;
  justify-content: center;

  grid-column: span 1;
`;

const Line = styled.div`
  width: 3px;
  height: 99%;

  background-color: black;
`;
const TextArea = styled.section`
  top: 0;

  border-top: 3px solid;

  grid-column: span 15;

  & > img {
    width: 100%;
    margin: 2rem 0;
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
  grid-template-columns: 1fr 3fr;

  gap: 10px;

  margin-top: 2.1rem;

  & > h1 {
    ${({ theme }) => theme.fonts.body4};
  }

  & > h2 {
    ${({ theme }) => theme.fonts.body5};

    word-break: keep-all;
  }
`;

export default ProjectSection;
