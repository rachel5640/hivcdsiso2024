import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <Layout>
      <Loader />
    </Layout>
  );
};

export default Loading;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 5rem 0;
`;

const loaderAnimation = keyframes`
  20% { background-position: 0% 0%, 50% 50%, 100% 50%; }
  40% { background-position: 0% 100%, 50% 0%, 100% 50%; }
  60% { background-position: 0% 50%, 50% 100%, 100% 0%; }
  80% { background-position: 0% 50%, 50% 50%, 100% 100%; }
`;

const Loader = styled.div`
  width: 60px;
  aspect-ratio: 2;

  --g: no-repeat radial-gradient(circle closest-side, #000 90%, #0000);

  background:
    var(--g) 0% 50%,
    var(--g) 50% 50%,
    var(--g) 100% 50%;
  background-size: calc(100% / 3) 50%;

  animation: ${loaderAnimation} 1s infinite linear;
`;
