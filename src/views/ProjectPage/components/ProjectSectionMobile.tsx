import styled from 'styled-components';
import { TEAM_EXHIBITION_INFO } from '../constants/text';

interface ProjectSectionMobileProps {
  index: number;
}

const ProjectSectionMobile = ({ index }: ProjectSectionMobileProps) => {
  const exhibitionInfo = TEAM_EXHIBITION_INFO[index];
  return (
    <div>
      <TextArea>
        <h1>{exhibitionInfo.Title}</h1>
        <p>{exhibitionInfo.text}</p>
        <ParticipantBox>
          <h1>아트디렉터</h1>
          <h2>{exhibitionInfo.artdirector}</h2>
          <h1>참여자</h1>
          <h2>{exhibitionInfo.participant.split(' ').join(',')}</h2>
        </ParticipantBox>
      </TextArea>
    </div>
  );
};

const TextArea = styled.section`
  margin-top: 6.7rem;

  & > h1 {
    ${({ theme }) => theme.fonts.title5};

    margin-bottom: 0.4rem;
  }

  & > p {
    ${({ theme }) => theme.fonts.body8_1};

    word-break: keep-all;
  }
`;

const ParticipantBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;

  gap: 10px;

  margin-top: 2.1rem;

  & > h1 {
    ${({ theme }) => theme.fonts.title7};
  }

  & > h2 {
    ${({ theme }) => theme.fonts.body8_1};

    word-break: keep-all;
  }
`;
export default ProjectSectionMobile;
