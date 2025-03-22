import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import WeatherDashboard from './components/WeatherDashboard';

// Create a dark theme with futuristic colors
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00f5ff', // Neon cyan
    },
    secondary: {
      main: '#ff00ff', // Neon magenta
    },
    background: {
      default: '#0a0a20', // Deep space blue
      paper: '#1a1a35',
    },
  },
  typography: {
    fontFamily: '"Orbitron", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          textTransform: 'none',
        },
      },
    },
  },
});

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a20 0%, #1a1a35 100%);
  color: #fff;
`;

const GlowingBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background: radial-gradient(circle at 50% 50%, rgba(0, 245, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%);
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContainer>
        <GlowingBackground
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <WeatherDashboard />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
