import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00f2ff',
      light: '#5cffff',
      dark: '#00bfcc',
      contrastText: '#000000',
    },
    secondary: {
      main: '#ff00e5',
      light: '#ff5cff',
      dark: '#c800b2',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0a192f',
      paper: '#112240',
    },
    text: {
      primary: '#ffffff',
      secondary: '#8892b0',
    },
  },
  typography: {
    fontFamily: '"Roboto Mono", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '0.2rem',
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '0.1rem',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      letterSpacing: '0.05rem',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '24px',
          textTransform: 'none',
          padding: '10px 24px',
          fontSize: '1rem',
          fontWeight: 500,
          boxShadow: '0 0 10px rgba(0, 242, 255, 0.3)',
          '&:hover': {
            boxShadow: '0 0 20px rgba(0, 242, 255, 0.5)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(17, 34, 64, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme; 