import DesktopHeader from '../views/@common/components/DesktopHeader';
import NavigationBar from '../views/@common/components/NavigationBar';
import styled from 'styled-components';
import TeamInfo from '../views/ProjectPage/components/TeamInfo';

import { useState } from 'react';

const ProjectPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <DesktopHeader />
      <ProjectPageBox>
        <NavigationBar page={currentPage} onChangePage={handleChangePage} />
        <TeamInfo page={currentPage} />
      </ProjectPageBox>
    </>
  );
};

const ProjectPageBox = styled.section`
  width: 100vw;
  padding: 0 8.2rem;
`;

export default ProjectPage;
