import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Intro, Experience, Comments } from './pages';
import {
  Box,
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@mui/material';
import { Navbar } from './components/Navbar';
import { routes } from './routes';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#edf2ff',
      },
    },
    typography: {
      htmlFontSize: 14,
      subtitle1: {
        fontFamily: '"Storms","Roboto","Helvetica","Arial",sans-serif',
      },
      h1: {
        fontFamily: '"Storms","Roboto","Helvetica","Arial",sans-serif',
      },
    },
  })
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        className="App"
        sx={{
          height: '100%',
          paddingLeft: { sm: 7.5 },
          paddingTop: { xs: 7.5, sm: 0 },
        }}
      >
        <Navbar />
        <MemoryRouter>
          <Routes>
            <Route path={routes.root} element={<Intro />} />
            <Route path={routes.experience} element={<Experience />} />
            <Route path={routes.comments} element={<Comments />} />
          </Routes>
        </MemoryRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App;
