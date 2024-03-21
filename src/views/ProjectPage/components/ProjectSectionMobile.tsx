import styled from 'styled-components';
import { useState } from 'react';
import { forwardRef } from 'react';
import { TEAM_EXHIBITION_INFO } from '../constants/text';
import Loading from '../../@common/components/Loading';
interface ProjectSectionMobileProps {
  index: number;
}

const ProjectSectionMobile = forwardRef<HTMLDivElement, ProjectSectionMobileProps>(({ index }, ref) => {
  const [loading, setLoading] = useState(true);
  const exhibitionInfo = TEAM_EXHIBITION_INFO[index];
  return (
    <div ref={ref}>
      {loading && <Loading />}
      <Poster src={exhibitionInfo.image} alt={exhibitionInfo.Title} onLoad={() => setLoading(false)} />
      <TextArea>
        <h1>{exhibitionInfo.Title}</h1>
        <p>{exhibitionInfo.text}</p>
        <ParticipantBox>
          <h1>아트디렉터</h1>
          <div>{exhibitionInfo.artdirector}</div>
          <h1>참여자</h1>
          <div>{exhibitionInfo.participant}</div>
        </ParticipantBox>
      </TextArea>
    </div>
  );
});

const Poster = styled.img`
  width: 100%;
  padding-top: 8.8rem;
`;
const TextArea = styled.section`
  margin-top: 2rem;

  & > h1 {
    ${({ theme }) => theme.fonts.title5};

    margin-bottom: 0.4rem;
    word-break: keep-all;
  }

  & > p {
    ${({ theme }) => theme.fonts.body8_1};

    word-break: keep-all;
  }
`;

const ParticipantBox = styled.div`
  display: grid;
  gap: 10px;

  width: 100%;
  margin-top: 2.1rem;
  grid-template-columns: 1fr 3fr;

  & > h1 {
    ${({ theme }) => theme.fonts.title7};
  }

  & > div {
    ${({ theme }) => theme.fonts.body8_1};

    word-break: keep-all;
  }
`;

export default ProjectSectionMobile;
