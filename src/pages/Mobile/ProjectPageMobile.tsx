import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import MobileHeader from '../../views/@common/components/MobileHeader';
import MobileFooter from '../../views/@common/components/MobileFooter';
import ProjectSectionMobile from '../../views/ProjectPage/components/ProjectSectionMobile';
import WorksSectionMobile from '../../views/ProjectPage/components/WorksSectionMobile';
import { ExhibitionBtnSmall, WorksBtnSmall } from '../../views/ProjectPage/assets';

const ProjectPageMobile = () => {
  const location = useLocation();
  const index: number = location.state ?? 0;

  const Exhibitionref = useRef<HTMLDivElement>(null);
  const Worksref = useRef<HTMLDivElement>(null);

  const onExhibitionClick = () => {
    Exhibitionref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const onWorksClick = () => {
    Worksref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MobileHeader isnavigate={true}>
        <Navigation>
          <div onClick={onExhibitionClick}>
            <ExhibitionBtnSmall />
          </div>
          <div onClick={onWorksClick}>
            <WorksBtnSmall />
          </div>
        </Navigation>
      </MobileHeader>

      <ExhibitionTextSection>
        <ProjectSectionMobile index={index} ref={Exhibitionref} />
        <WorksSectionMobile index={index} ref={Worksref} />
      </ExhibitionTextSection>
      <MobileFooter />
    </>
  );
};

const Navigation = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 4rem;
  padding: 0 1.6rem;

  background-color: ${({ theme }) => theme.colors.white};

  & > div {
    display: flex;

    cursor: pointer;
  }

  & > div > svg {
    width: auto;
    height: 2rem;
    margin-right: 0.9rem;
  }
`;

const ExhibitionTextSection = styled.section`
  width: 100%;
  padding: 0 1.6rem;
`;
export default ProjectPageMobile;
