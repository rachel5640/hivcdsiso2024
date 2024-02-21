import styled from 'styled-components';
import MobileHeader from '../../views/@common/components/MobileHeader';
import MobileFooter from '../../views/@common/components/MobileFooter';

const ArchivePageMobile = () => {
  return (
    <>
      <MobileHeader />
      <Dummy>Comming Soon!</Dummy>
      <MobileFooter isfixed={true} />
    </>
  );
};

const Dummy = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 80vh;

  color: ${({ theme }) => theme.colors.grey};
  text-align: center;
  ${({ theme }) => theme.fonts.title2};
`;

export default ArchivePageMobile;
