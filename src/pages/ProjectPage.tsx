import { Desktop, Mobile } from '../views/@common/components/mediaQuery';
import ProjectPageDesktop from './Desktop/ProjectPageDestop';
import ProjectPageMobile from './Mobile/ProjectPageMobile';

const ProjectPage = () => {
  return (
    <>
      <Mobile>
        <ProjectPageMobile />
      </Mobile>
      <Desktop>
        <ProjectPageDesktop />
      </Desktop>
    </>
  );
};

export default ProjectPage;
