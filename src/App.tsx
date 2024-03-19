import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LecturePage from './pages/LecturePage';
import ExhibitionPage from './pages/ExhibitionPage';
import ArchivePage from './pages/ArchivePage';
import ErrorPage from './pages/ErrorPage';

import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/Theme';
import './styles/fonts/font.css';
import { ThemeProvider } from 'styled-components';
import ProjectPage from './pages/ProjectPage';

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/lecture', element: <LecturePage /> },
  { path: '/Exhibition', element: <ExhibitionPage /> },
  { path: '/Archive', element: <ArchivePage /> },
  { path: '/Exhibition/Projects', element: <ProjectPage /> },
  { path: '/*', element: <ErrorPage /> },
]);

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
