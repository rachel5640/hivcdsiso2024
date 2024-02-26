import DesktopHeader from '../../views/@common/components/DesktopHeader';
import NavigationBar from '../../views/@common/components/NavigationBar';
import styled from 'styled-components';

import ProjectSection from '../../views/ProjectPage/components/ProjectSection';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useState } from 'react';
import DesktopFooter from '../../views/@common/components/DestopFooter';

const ProjectPageDesktop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const index = location.state || 0;
  const [currentPage, setCurrentPage] = useState<number>(index);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <DesktopHeader />

      <ProjectPageBox>
        <NavigationBar page={currentPage} onChangePage={handleChangePage} />
        <ProjectSection index={currentPage} />
      </ProjectPageBox>

      <DesktopFooter />
    </>
  );
};

const ProjectPageBox = styled.section`
  position: relative;

  width: 100vw;
  margin-top: 7.6rem;
`;

export default ProjectPageDesktop;
