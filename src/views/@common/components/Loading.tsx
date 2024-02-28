import styled from 'styled-components';

const Loading = () => {
  return (
    <Layout>
      <Loader />
    </Layout>
  );
};

export default Loading;

const Layout = styled.div`
  width: 100%;
  height: 30rem;
`;

const Loader = styled.div`
  width: 60px;
  aspect-ratio: 4;

  background: radial-gradient(circle closest-side, #000 90%, #0000) 0 / calc(100% / 3) 100% space;
  clip-path: inset(0 100% 0 0);

  animation: l1 1s steps(4) infinite;

  @keyframes l1 {
    to {
      clip-path: inset(0 -34% 0 0);
    }
  }
`;
