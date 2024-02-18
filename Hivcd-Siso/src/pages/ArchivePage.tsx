import styled from 'styled-components';
import DesktopHeader from '../views/@common/components/DesktopHeader';
import Footer from '../views/@common/components/Footer';

const ArchivePage = () => {
  return (
    <>
      <DesktopHeader />
      <ArchivePageBox />
      <Footer />
    </>
  );
};
const ArchivePageBox = styled.section`
  width: 100vw;

  /* stylelint-disable-next-line order/properties-order */
  padding: 0 8.2rem;
`;

export default ArchivePage;
