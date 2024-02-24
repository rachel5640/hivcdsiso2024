import styled from 'styled-components';

const teams = [
  { title: '아트디렉터', members: '김주현, 정우성' },
  { title: '운영팀', members: '강보영, 김민하' },
  { title: '공간관리팀', members: '이지희, 김예린, 김동혜, 김경빈, 최유진, 최예린' },
  { title: '현장관리팀', members: '최지원, 전시은, 조서영, 정민경, 이다연' },
  { title: '사무행정팀', members: '이경민, 김예영, 송윤하' },
  { title: '홍보팀', members: '김민주, 정예원' },
  { title: '연사초청팀', members: '이일여, 박서연' },
  { title: '예산팀', members: '김주현, 정우성, 이주아' },
  { title: '웹팀', members: '강민서' },
];
const ExhibitionCommitteeMobile = () => {
  return (
    <CommiteeMobileBox>
      <h1>EXHIBITION COMMITTEE</h1>
      {teams.map((team, index) => (
        <div key={index}>
          <h1>{team.title}</h1>
          <h2>{team.members}</h2>
        </div>
      ))}
    </CommiteeMobileBox>
  );
};

const CommiteeMobileBox = styled.section`
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
