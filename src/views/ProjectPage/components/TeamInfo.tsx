import styled from 'styled-components';
import { TEAM_TEXT } from '../constants/text';

interface TeamInfoProps {
  page: number;
}

const TeamInfo = ({ page }: TeamInfoProps) => {
  const SelectedTeamInfo = TEAM_TEXT[page];

  return (
    <TeamInfoBox>
      <TeamExplanationBox>{SelectedTeamInfo.text}</TeamExplanationBox>
      <TeamInstaLink href={SelectedTeamInfo.link}>{SelectedTeamInfo.instagram}</TeamInstaLink>
    </TeamInfoBox>
  );
};

const TeamInfoBox = styled.div`
  display: flex;

  width: 100%;
  margin: 9.6rem 0 4.1rem;
`;

const TeamExplanationBox = styled.div`
  ${({ theme }) => theme.fonts.body5};

  margin-right: 5.7rem;
  word-break: keep-all;
`;

const TeamInstaLink = styled.a`
  ${({ theme }) => theme.fonts.label3};

  margin-right: 3vw;

  color: black;
  text-decoration: underline;
  text-underline-position: under;
`;
export default TeamInfo;
