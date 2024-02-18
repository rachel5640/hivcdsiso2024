import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LecturePage from './pages/LecturePage';
import ExhibitionPage from './pages/ExhibitionPage';
import ArchivePage from './pages/ArchivePage';
import Greenbee from './views/ExhibitionPage/pages/Greenbee';
import Dromapic from './views/ExhibitionPage/pages/Dromapic';
import Iray from './views/ExhibitionPage/pages/Iray';
import Yadz from './views/ExhibitionPage/pages/Yadz';
import Adrenalin from './views/ExhibitionPage/pages/Adrenalin';
import Proto from './views/ExhibitionPage/pages/Proto';
import Hyphen from './views/ExhibitionPage/pages/Hyphen';
import Hangulggol from './views/ExhibitionPage/pages/Hangulggol';
import Hips from './views/ExhibitionPage/pages/Hips';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/Theme';
import './styles/fonts/font.css';
import { ThemeProvider } from 'styled-components';

const router = createBrowserRouter([
  { path: '/', element: <MainPage /> },
  { path: '/lecture', element: <LecturePage /> },
  { path: '/Exhibition', element: <ExhibitionPage /> },
  { path: '/Archive', element: <ArchivePage /> },
  { path: '/Exhibition/Greenbee', element: <Greenbee /> },
  { path: '/Exhibition/Dromapic', element: <Dromapic /> },
  { path: '/Exhibition/Iray', element: <Iray /> },
  { path: '/Exhibition/Yadz', element: <Yadz /> },
  { path: '/Exhibition/Adrenalin', element: <Adrenalin /> },
  { path: '/Exhibition/Proto', element: <Proto /> },
  { path: '/Exhibition/Hyphen', element: <Hyphen /> },
  { path: '/Exhibition/Hangulggol', element: <Hangulggol /> },
  { path: '/Exhibition/Hips', element: <Hips /> },
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
