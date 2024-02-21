import DesktopHeader from '../../views/@common/components/DesktopHeader';
import NavigationBar from '../../views/@common/components/NavigationBar';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import TeamInfo from '../../views/ProjectPage/components/TeamInfo';
import { useEffect } from 'react';

import { useState } from 'react';

const ProjectPageDesktop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const index = location.state;
  const [currentPage, setCurrentPage] = useState<number>(index);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <DesktopHeader />
      <ProjectPageBox>
        <NavigationBar page={currentPage} onChangePage={handleChangePage} />
        <TeamInfo page={currentPage} />
        <Dummy>Comming Soon!</Dummy>
      </ProjectPageBox>
    </>
  );
};

const ProjectPageBox = styled.section`
  width: 100vw;
  padding: 0 8.2rem;
`;

const Dummy = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 20rem;

  ${({ theme }) => theme.fonts.title1};

  color: ${({ theme }) => theme.colors.grey};
`;

export default ProjectPageDesktop;
