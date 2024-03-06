import DesktopHeader from '../../views/@common/components/DesktopHeader';
import NavigationBar from '../../views/@common/components/NavigationBar';
import styled from 'styled-components';

import ProjectSection from '../../views/ProjectPage/components/ProjectSection';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useState } from 'react';

interface ProjectPageBoxProps {
  navbarheight: number;
}

const ProjectPageDesktop = () => {
  const [navbarheight, setNavBarHeight] = useState<number>(0);
  const getNavBarHeight = (height: number) => {
    setNavBarHeight(height);
  };

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

      <ProjectPageBox navbarheight={navbarheight}>
        <NavigationBar page={currentPage} onChangePage={handleChangePage} getNavBarHeight={getNavBarHeight} />
        <ProjectSection index={currentPage} navbarheight={navbarheight} />
      </ProjectPageBox>
    </>
  );
};

const ProjectPageBox = styled.section<ProjectPageBoxProps>`
  position: fixed;
  top: 7.6rem;

  width: 100vw;
  margin: 0;
`;

export default ProjectPageDesktop;
