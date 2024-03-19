import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  const refreshHandler = () => {
    // 새로고침 버튼 클릭 시 홈 페이지로 이동
    navigate('/');
  };

  return (
    <ErrorPageBox>
      <ErrorMessage>Error!</ErrorMessage>
      <RefreshBtn onClick={refreshHandler}>새로고침</RefreshBtn>
    </ErrorPageBox>
  );
};

const ErrorPageBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const RefreshBtn = styled.button`
  position: fixed;
  bottom: 10rem;

  width: 14rem;
  height: 5rem;
  padding: 0.5rem 1.6rem 0.7rem;
  border: 2.8px solid;
  border-radius: 40px;

  /* 해당 부분 수정 */
  ${({ theme }) => theme.fonts.body5};

  background-color: black;

  color: white;

  cursor: pointer;
`;

const ErrorMessage = styled.div`
  /* 해당 부분 수정 */
  ${({ theme }) => theme.fonts.title1};

  margin-top: 19vh;

  /* stylelint-disable-next-line declaration-property-unit-allowed-list */
  font-size: 9vh;
`;

export default ErrorPage;
