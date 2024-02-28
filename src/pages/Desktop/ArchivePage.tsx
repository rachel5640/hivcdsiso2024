import styled from 'styled-components';
import DesktopHeader from '../../views/@common/components/DesktopHeader';
import DesktopFooter from '../../views/@common/components/DestopFooter';
import { useEffect } from 'react';

const ArchiveDesktopPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <DesktopHeader />
      <ArchivePageBox>Comming Soon!</ArchivePageBox>
      <DesktopFooter $isfixed={true} />
    </>
  );
};
const ArchivePageBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 80dvh;
  padding: 0 8.2rem;

  color: ${({ theme }) => theme.colors.grey};

  ${({ theme }) => theme.fonts.title1};
`;

export default ArchiveDesktopPage;
