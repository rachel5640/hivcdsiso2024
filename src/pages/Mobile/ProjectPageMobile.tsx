import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MobileHeader from '../../views/@common/components/MobileHeader';
import MobileFooter from '../../views/@common/components/MobileFooter';
import ProjectSectionMobile from '../../views/ProjectPage/components/ProjectSectionMobile';

const ProjectPageMobile = () => {
  const location = useLocation();
  const index = location.state;

  return (
    <>
      <MobileHeader />

      <ExhibitionTextSection>
        <ProjectSectionMobile index={index} />
      </ExhibitionTextSection>
      <MobileFooter isfixed={true} />
    </>
  );
};

const ExhibitionTextSection = styled.section`
  width: 100%;
  padding: 0 1.6rem;
`;
export default ProjectPageMobile;
