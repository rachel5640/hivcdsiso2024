import DesktopHeader from '../../views/@common/components/DesktopHeader';
import DesktopFooter from '../../views/@common/components/DestopFooter';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageSection from '../../views/ArchivePage/constant/components/components/ImageSection';
import ViewSection from '../../views/ArchivePage/constant/components/components/ViewSection';

interface CategoryBtnProps {
  $isactive: boolean;
}
const ArchiveDesktopPage = () => {
  const [currentSection, setCurrentSection] = useState('view');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <DesktopHeader />
      <ArchivePageBox>
        <TextBox>
          <CategoryBtn
            type="button"
            onClick={() => {
              setCurrentSection('view');
            }}
            $isactive={currentSection === 'view'}>
            전시 전경
          </CategoryBtn>
          <CategoryBtn type="button" onClick={() => setCurrentSection('image')} $isactive={currentSection === 'image'}>
            소모임별 현장사진
          </CategoryBtn>
        </TextBox>
        {currentSection === 'view' ? (
          <ViewSectionBox>
            <ViewSection />
          </ViewSectionBox>
        ) : (
          <ImageSectionBox>
            <ImageSection />
          </ImageSectionBox>
        )}
      </ArchivePageBox>
      <DesktopFooter />
    </>
  );
};

const ArchivePageBox = styled.section`
  width: 100%;
`;

const TextBox = styled.div`
  display: flex;
  position: fixed;
  top: 7.6rem;
  z-index: 10;

  width: 100%;
  padding: 0 8.2rem 2rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const CategoryBtn = styled.button<CategoryBtnProps>`
  display: flex;
  flex-direction: column;

  margin: 0 0.5rem;
  padding: 0.4rem 1.8rem 0.25rem;
  border: 3px solid;
  border-radius: 36px;

  background-color: ${({ $isactive, theme }) => ($isactive ? theme.colors.grey : theme.colors.white)};

  color: black;

  cursor: pointer;

  ${({ theme }) => theme.fonts.title6};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;

const ViewSectionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  width: 100vw;
  margin: 18rem 0 4rem;
  padding: 0 8.2rem;

  & > div > img {
    width: 100%;
    margin-top: 1.3rem;
  }

  & > div > div {
    gap: 1.3rem;

    width: calc(100vw - 16.4rem);
    margin-top: 1.3rem;
  }

  & > div > div > img {
    width: 100%;
  }
`;

const ImageSectionBox = styled.div`
  margin: 18rem 0 4rem;
  padding: 0 8.2rem;

  & > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.3rem;
  }

  & > div > img {
    width: 100%;
  }
`;

export default ArchiveDesktopPage;
